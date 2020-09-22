<template>
  <FormControl
    class="c-calendar font-semibold"
    v-bind="$props"
    :class="{
      active: active && !disabled,
      'has-date': dates.length,
      'is-after': isAfter,
      'is-before': isBefore
    }"
    @click.native.stop
  >
    <div
      class="flex box selected sm items-center relative z-20 cursor-pointer"
      @click="setActive(!active)"
    >
      <div
        class="value h-8 px-3 flex items-center flex-1 divider"
        v-if="
          (range && value && value.length) || (!range && value && !value.length)
        "
      >
        <span>
          {{
            !range
              ? $options.filters.date(value, "MMM dd, yyyy")
              : $options.filters.date(value[0], "MMM dd, yyyy")
          }}
        </span>
        <template v-if="value[1]">
          <span class="mx-2 icon icon-arrow-right" />
          <span>
            {{ value[1] | date("MMM dd, yyyy") }}
          </span>
        </template>
      </div>
      <div class="px-3 placeholder" v-else>
        {{ placeholder }}
      </div>
      <div class="suffix icon icon-chevron-down"></div>
    </div>
    <div
      class="date-picker absolute border z-40 rounded border-alt2 left-1/2 transform -translate-x-1/2 bg-base top-full mt-1"
      v-if="active && !disabled"
    >
      <div class="flex px-6 py-4">
        <div
          class="text-center calendar text-16 whitespace-no-wrap mr-6 last:mr-0"
          v-for="(month, m) in months"
          :key="m"
        >
          <div class="flex relative mb-6">
            <div
              class="cursor-pointer ml-2 icon icon-arrow-left"
              @click="addMonth(-1)"
              v-if="!m"
            />
            <div class="month absolute transform -translate-x-1/2 left-1/2">
              {{ month.value | date("MMMM yyyy") }}
            </div>
            <div
              class="cursor-pointer ml-auto mr-2 icon icon-arrow-right"
              @click="addMonth(1)"
              v-if="m"
            />
          </div>
          <ul class="days flex text-alt3">
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
              @click="addDate(month.value, date)"
              @mouseenter="setHoverDate(month.value, date)"
              :class="{
                'is-selected': isSelected(month.value, date),
                'is-range': isInRange(month.value, date),
                empty: !date
              }"
            >
              {{ date }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </FormControl>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop, Watch } from "vue-property-decorator";
import {
  addMonths,
  compareAsc,
  getDaysInMonth,
  isAfter,
  isBefore,
  isEqual,
  setDate,
  startOfMonth
} from "date-fns";
import Base from "@/mixins/base";
import { Listen } from "@/utilities/decorators";
import date from "@/filters/date";
import FormControl from "@/components/form-control/FormControl.vue";

@Component({
  components: { FormControl },
  filters: { date }
})
export default class CCalendar extends Mixins(Base) {
  @Prop() public value!: Date[];
  @Prop() public range!: boolean;
  @Prop() public disabled!: boolean;
  @Prop({ default: "Select date" }) public placeholder!: string;
  public active = false;
  public dates: Date[] = [];
  public currentMonth: Date = new Date();
  public hoverDate: Date | null = null;

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

  @Emit("input") @Watch("range") public onRangeChange() {
    return null;
  }

  @Listen("click") public onClick(): void {
    this.setActive(false);
  }

  public setActive(val: boolean): void {
    this.active = val;
  }

  public isInRange(month: Date, day: number): boolean {
    if (!this.dates[0] || !this.hoverDate) return false;

    const date = setDate(month, day);

    return isBefore(this.dates[0], this.hoverDate)
      ? isAfter(date, this.dates[0]) && isBefore(date, this.hoverDate)
      : isAfter(date, this.hoverDate) && isBefore(date, this.dates[0]);
  }

  get isAfter(): boolean {
    if (!(this.hoverDate && this.dates.length)) return false;

    return isAfter(this.hoverDate, this.dates[0]);
  }

  get isBefore(): boolean {
    if (!(this.hoverDate && this.dates.length)) return false;

    return isBefore(this.hoverDate, this.dates[0]);
  }

  public isSelected(month: Date, day: number): boolean {
    if (!this.dates[0]) return false;

    return isEqual(this.dates[0], setDate(month, day));
  }

  public addDate(month: Date, day: number): void {
    if (!this.range) {
      this.$emit("input", setDate(month, day));
      this.setActive(false);
    } else {
      this.dates = [...this.dates, setDate(month, day)];
    }

    if (this.dates.length > 1) {
      this.$emit("input", this.dates.sort(compareAsc));
      this.setActive(false);
    }
  }

  @Watch("active") public onActiveChange(): void {
    if (!this.active) this.dates = [];
  }

  public addMonth(months: number): void {
    this.currentMonth = addMonths(this.currentMonth, months);
  }

  public setHoverDate(month: Date, day: number): void {
    if (!this.dates.length) return;

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
  &[disabled] {
    @apply opacity-50;
  }
  &:not(.is-after) {
    &:not(.is-before) {
      .calendar {
        .dates {
          li {
            &:hover {
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
          &.is-selected {
            @apply rounded-l-md;
          }

          &:hover {
            @apply rounded-r-md;
          }
        }
      }
    }
  }
  &.is-before {
    .calendar {
      .dates {
        li {
          &.is-selected {
            @apply rounded-r-md;
          }

          &:hover {
            @apply rounded-l-md;
          }
        }
      }
    }
  }
  .calendar {
    li {
      @apply w-10 h-10 flex items-center justify-center;
    }

    .dates {
      li {
        &:not(.empty) {
          &.is-selected,
          &:hover {
            @apply bg-accent;
          }

          &.is-range {
            background: rgba(0, 120, 255, 0.2);
          }
        }
      }
    }
  }
}
</style>
