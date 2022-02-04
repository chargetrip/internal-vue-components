<template>
  <FormControl
    class="c-calendar font-semibold text-14"
    v-bind="$props"
    :class="{
      active: active && !disabled,
      'has-start-and-end': initialValue.length === 2,
      'has-date': dates || (dates && dates.length),
      'is-range': range,
      'is-after': isAfter,
      'is-before': isBefore
    }"
  >
    <div
      class="flex box selected sm items-center relative z-20 cursor-pointer"
      ref="box"
    >
      <div
        class="value h-8 px-3 flex items-center flex-1 divider"
        v-if="
          (range && value && value.length) || (!range && value && !value.length)
        "
      >
        <p>
          {{
            !range
              ? $options.filters.date(value, "MMM dd, yyyy")
              : $options.filters.date(value[0], "MMM dd, yyyy")
          }}
        </p>
        <template v-if="value[1]">
          <span class="mx-2 icon icon-arrow-right" />
          <p>
            {{ value[1] | date("MMM dd, yyyy") }}
          </p>
        </template>
      </div>
      <p class="px-3 placeholder" v-else>
        {{ placeholder }}
      </p>
      <div class="suffix icon icon-chevron-down" />
    </div>
    <div
      class="date-picker-wrapper left-1/2 transform -translate-x-1/2 absolute top-full"
    >
      <div
        class="date-picker relative z-40 rounded bg-subdued mt-1 shadow-overlay"
        ref="datePicker"
        :style="{ left: `${datePickerOffsetLeft}px` }"
      >
        <div
          class="flex justify-between items-center px-4 py-4 border-b border-alt"
        >
          <MaskedInput
            class="w-full"
            placeholder="DD / MM / YYYY"
            :value="startDateString"
            :maskOptions="dateMask"
            @complete="onInputStartDate"
            @focus="onFocusStartDate"
          />
          <template v-if="range">
            <div class="mx-2 icon icon-arrow-right" />
            <MaskedInput
              class="w-full"
              placeholder="DD / MM / YYYY"
              :value="endDateString"
              :maskOptions="dateMask"
              @complete="onInputEndDate"
              @focus="onFocusEndDate"
            />
          </template>
        </div>
        <div class="flex px-6 py-4">
          <div
            class="text-center calendar whitespace-no-wrap mr-6 last:mr-0"
            v-for="(month, m) in months"
            :key="m"
          >
            <div class="flex relative mb-6">
              <div
                class="cursor-pointer ml-2 icon icon-arrow-left"
                @click="addMonth(-1)"
                v-if="!m"
              />
              <p
                class="month absolute transform -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2"
              >
                {{ month.value | date("MMMM yyyy") }}
              </p>
              <div
                class="cursor-pointer ml-auto mr-2 icon icon-arrow-right"
                @click="addMonth(1)"
                v-if="m"
              />
            </div>
            <ul class="days flex text-font-alt3">
              <li>
                Mo
              </li>
              <li>
                Tu
              </li>
              <li>
                We
              </li>
              <li>
                Th
              </li>
              <li>
                Fr
              </li>
              <li>
                Sa
              </li>
              <li>
                Su
              </li>
            </ul>
            <ul class="dates flex flex-wrap">
              <li
                class="date cursor-pointer"
                v-for="(date, i) in month.dates"
                :key="i"
                @click.stop="addDate(month.value, date)"
                @mouseenter="setHoverDate(month.value, date)"
                @mouseleave="hoverDate = null"
                :class="{
                  disabled: disableFuture && isAfterToday(month.value, date),
                  'is-start-of-week': isStartOfWeek(month.value, date),
                  'is-start-of-month': isStartOfMonth(month.value, date),
                  'is-end-of-week': isEndOfWeek(month.value, date),
                  'is-end-of-month': isEndOfMonth(month.value, date),
                  'is-start-date': isStartDate(month.value, date),
                  'is-end-date': isEndDate(month.value, date),
                  'is-hover-date': isHoverDate(month.value, date),
                  'is-range': isInRange(month.value, date),
                  empty: !date
                }"
              >
                <div>
                  {{ date }}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between items-center px-6 pb-4">
          <Button size="sm" type="secondary" @click.stop="onCancel"
            >Cancel</Button
          >
          <Button size="sm" type="primary" @click.stop="onApply">Apply</Button>
        </div>
      </div>
    </div>
  </FormControl>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Watch } from "vue-property-decorator";
import {
  addMonths,
  compareAsc,
  endOfDay,
  endOfWeek,
  endOfMonth,
  format,
  getDaysInMonth,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  isSameYear,
  isValid,
  parse,
  setDate,
  startOfDay,
  startOfWeek,
  startOfMonth,
  addDays
} from "date-fns";
import { Listen } from "@/utilities/decorators";
import date from "@/filters/date";
import FormControl from "@/components/form-control/FormControl.vue";
import MaskedInput from "@/components/masked-input/MaskedInput.vue";
import Button from "@/components/button/Button.vue";
import { FormControlProps, getPath } from "@/utilities/utilities";

@Component({
  components: { MaskedInput, Button, FormControl },
  filters: { date }
})
export default class CCalendar extends FormControlProps {
  @Ref("box") boxEl!: HTMLElement;
  @Ref("datePicker") datePicker!: HTMLElement;
  @Prop({ default: () => [] }) value!: Date[] | Date | null;
  @Prop() public range!: boolean;
  @Prop({ default: 16 }) public safeSpace!: number;
  @Prop() public disableFuture!: boolean;
  @Prop({ default: "Select date" }) public placeholder!: string;
  initialValue: Date[] = [];
  dates: Date[] = [];
  public active = false;
  currentMonth: Date = new Date();
  hoverDate: Date | null = null;
  datePickerOffsetLeft = 0;
  dateMask = {
    mask: "`00` {/} `00` {/} `0000`",
    placeholderChar: " ",
    overwrite: true,
    lazy: true
  };

  get months() {
    const nextMonth = addMonths(this.currentMonth, 1);

    return [
      {
        value: this.currentMonth,
        dates: this.getNormalizedDates(this.currentMonth)
      },
      {
        value: nextMonth,
        dates: this.getNormalizedDates(nextMonth)
      }
    ];
  }

  get startDateString(): string {
    return this.dates[0] ? format(this.dates[0], "dd/MM/yyyy") : "";
  }

  get endDateString(): string {
    return this.dates[1] ? format(this.dates[1], "dd/MM/yyyy") : "";
  }

  @Listen("click")
  public onClick(e): void {
    const path = e.path || getPath(e.target);
    const clickedEl = path.some(p => p === this.$el);
    const clickedBox = path.some(p => p === this.boxEl);

    this.setActive(clickedBox ? !this.active : clickedEl);
  }

  public onCancel(): void {
    this.setActive(false);
  }

  public onInputStartDate(value: string): void {
    const parsed = parse(value, "dd/MM/yyyy", new Date());

    if (!isValid(parsed)) {
      return;
    }

    const startDate = startOfDay(parsed);

    // Do not update calendar if this date is an invalid future date
    if (this.disableFuture && isAfter(startDate, Date.now())) {
      return;
    }

    if (this.dates.length > 1) {
      this.dates = [startDate, this.dates[1]];
      // Sort start and end date if one that was entered goes past the other
      this.dates.sort(compareAsc);
    } else {
      this.dates = [startDate];
    }

    // Update current month to the input that received focus.
    this.currentMonth = startOfDay(startDate);
  }

  public onApply(): void {
    this.$emit("input", this.dates);
    this.setActive(false);
  }

  public onInputEndDate(value: string): void {
    const parsed = parse(value, "dd/MM/yyyy", new Date());

    if (!isValid(parsed)) {
      return;
    }

    const endDate = endOfDay(parsed);

    const isInFuture = isAfter(endDate, startOfDay(addDays(new Date(), 1)));
    // Do not update calendar if this date is an invalid future date
    if (this.disableFuture && isInFuture) {
      return;
    }

    this.dates = [this.dates[0], endDate];

    // Sort dates in place if the entered value goes past the other
    this.dates.sort(compareAsc);

    // Update current month to the input that received focus.
    this.currentMonth = startOfDay(endDate);
  }

  public onFocusStartDate(): void {
    this.currentMonth = startOfDay(this.dates[0]);
  }

  public onFocusEndDate(): void {
    this.currentMonth = startOfDay(this.dates[1]);
  }

  public setActive(val: boolean): void {
    this.active = val;
  }

  public isInRange(month: Date, day: number): boolean {
    if (!this.range) return false;

    const selectedOrHoverDate = this.dates?.[1] || this.hoverDate;
    if (!selectedOrHoverDate || !this.dates?.[0]) return false;

    const date = setDate(month, day);

    return isBefore(this.dates[0], selectedOrHoverDate)
      ? isAfter(date, this.dates[0]) && isBefore(date, selectedOrHoverDate)
      : isAfter(date, selectedOrHoverDate) && isBefore(date, this.dates[0]);
  }

  isEqual(date1: Date, date2: Date): boolean {
    return (
      isSameYear(date1, date2) &&
      isSameMonth(date1, date2) &&
      isSameDay(date1, date2)
    );
  }

  get isAfter(): boolean {
    if (!this.range) return false;

    const selectedOrHoverDate = this.dates?.[1] || this.hoverDate;

    if (!selectedOrHoverDate || !this.dates?.[0]) return false;

    return isAfter(selectedOrHoverDate, this.dates[0]);
  }

  get isBefore(): boolean {
    if (!this.range) return false;

    const selectedOrHoverDate = this.dates?.[1] || this.hoverDate;
    if (!selectedOrHoverDate || !this.dates?.[0]) return false;

    return isBefore(selectedOrHoverDate, this.dates[0]);
  }

  isAfterToday(month: Date, day: number) {
    return isAfter(setDate(month, day), new Date());
  }

  public isStartDate(month: Date, day: number): boolean {
    const value = this.dates?.[0] || this.dates;

    if (!value) return false;

    return this.isEqual(value as Date, setDate(month, day));
  }

  public isEndDate(month: Date, day: number): boolean {
    if (!this.dates?.[1]) return false;

    return this.isEqual(this.dates[1], setDate(month, day));
  }

  public isStartOfWeek(month: Date, day: number): boolean {
    const currentDay = setDate(month, day);

    return isSameDay(startOfWeek(currentDay, { weekStartsOn: 1 }), currentDay);
  }

  public isEndOfWeek(month: Date, day: number): boolean {
    const currentDay = setDate(month, day);

    return isSameDay(endOfWeek(currentDay, { weekStartsOn: 1 }), currentDay);
  }

  public isStartOfMonth(month: Date, day: number): boolean {
    const currentDay = setDate(month, day);

    return isSameDay(startOfMonth(month), currentDay);
  }

  public isEndOfMonth(month: Date, day: number): boolean {
    const currentDay = setDate(month, day);

    return isSameDay(endOfMonth(month), currentDay);
  }

  public isHoverDate(month: Date, day: number): boolean {
    if (!this.hoverDate) return false;

    return this.isEqual(this.hoverDate, setDate(month, day));
  }

  public addDate(month: Date, day: number): void {
    if (!this.range) {
      this.$emit("input", startOfDay(setDate(month, day)));
      this.setActive(false);
      return;
    }

    if (this.initialValue.length) {
      this.initialValue = [];
      this.dates = [setDate(month, day)];
      return;
    }

    this.dates.push(setDate(month, day));

    if (this.dates.length > 1) {
      const [startDate, endDate] = this.dates.sort(compareAsc);

      this.$emit("input", [startOfDay(startDate), endOfDay(endDate)]);
      this.setActive(false);
    }
  }

  @Watch("active")
  public onActiveChange(): void {
    if (this.active) {
      this.dates = this.value instanceof Date ? [this.value] : this.value || [];
      this.initialValue = this.dates;
    }

    const datePickerRect = this.datePicker.getBoundingClientRect();

    const offsetLeft = datePickerRect.left + datePickerRect.width;

    if (datePickerRect.left < this.safeSpace) {
      this.datePickerOffsetLeft =
        Math.abs(datePickerRect.left) + this.safeSpace;
    } else if (offsetLeft >= window.innerWidth) {
      this.datePickerOffsetLeft =
        window.innerWidth - offsetLeft - this.safeSpace;
    } else {
      this.datePickerOffsetLeft = 0;
    }
  }

  public addMonth(months: number): void {
    this.currentMonth = addMonths(this.currentMonth, months);
  }

  public setHoverDate(month: Date, day: number): void {
    this.hoverDate = setDate(month, day);
  }

  public getNormalizedDates(month: Date): number[] {
    const day = startOfMonth(month).getDay();

    return new Array(!day ? 6 : day - 1)
      .fill("")
      .concat(new Array(getDaysInMonth(month)).fill("").map((x, i) => i + 1));
  }
}
</script>

<style lang="scss">
.c-calendar {
  &.has-start-and-end {
    .is-hover-date div {
      @apply rounded;
    }
  }
  &:not(.is-range) {
    .is-start-date div {
      @apply rounded;
    }
  }
  &[disabled] {
    @apply opacity-50;
  }

  &:not(.active) {
    .date-picker-wrapper {
      @apply opacity-0 invisible;
    }
  }

  &:not(.is-after) {
    &:not(.is-before) {
      .calendar {
        .dates {
          li {
            & div {
              @apply rounded-md;
            }

            &:hover div {
              @apply rounded-md;
            }
          }
        }
      }
    }
  }

  &.is-after {
    .calendar {
      .dates {
        li {
          &.is-start-date div {
            @apply rounded-md;
          }

          &.is-hover-date div,
          &.is-end-date div {
            @apply rounded-md;
          }

          &.is-start-date.is-end-date.is-hover-date div {
            @apply rounded-md;
          }
        }
      }
    }
  }

  &.is-before {
    .calendar {
      .dates {
        li {
          &.is-hover-date div,
          &.is-end-date div {
            @apply rounded-md;
          }

          &.is-start-date div {
            @apply rounded-md;
          }
        }
      }
    }
  }

  .calendar {
    li {
      @apply box-content w-8 h-8 flex items-center justify-center py-0.5;
    }

    .dates {
      li {
        &:not(.is-start-date) {
          &.is-start-of-week {
            div {
              @apply rounded-l-md;
            }

            &.is-hover-date div {
              @apply rounded-md;
            }

            &.is-end-of-month div {
              @apply rounded-md;
            }
          }

          &.is-end-of-week {
            div {
              @apply rounded-r-md;
            }

            &.is-hover-date div {
              @apply rounded-md;
            }

            &.is-start-of-month div {
              @apply rounded-md;
            }
          }

          &.is-start-of-month {
            div {
              @apply rounded-md;
            }
          }

          &.is-end-of-month:not(.is-start-of-week):not(.is-hover-date):not(.is-end-date) {
            div {
              @apply rounded-r-md rounded-l-none;
            }
          }
        }

        &.is-range {
          &.is-start-of-month:not(.is-hover-date):not(.is-end-date):not(.is-end-of-week) {
            div {
              @apply rounded-l-md rounded-r-none;
            }
          }
        }

        &.disabled div {
          @apply pointer-events-none opacity-50;
        }

        &:not(.empty) {
          &.is-range div {
            background: rgba(0, 120, 255, 0.2);
          }
          &.is-start-date div,
          &.is-end-date div,
          &.is-hover-date div {
            @apply bg-accent text-white #{!important};
          }
        }

        div {
          @apply flex w-full h-full justify-center items-center;
        }
      }
    }
  }

  /* An override for the style applied by FormControl on `.box`, since it
   * applies to a nested `.box` as well, which we do not want.
   */
  .c-masked-input {
    &.c-form-control {
      .box {
        @apply h-8 bg-base transition-colors duration-300 rounded-md text-14 text-font-primary outline-none border border-base font-semibold;
      }

      &:not(.error) {
        &.has-hover {
          .box {
            @apply bg-alt border-alt;
          }
        }

        &.has-focus {
          .box {
            @apply bg-base border-accent;
          }
        }

        &.active {
          .box {
            @apply border-accent;
          }
        }
      }
    }
  }
}
</style>
