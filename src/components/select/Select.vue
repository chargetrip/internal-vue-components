<template>
  <FormControl
    v-bind="$props"
    class="c-select font-semibold text-font-primary"
    :class="{
      active: active && !readonly && !disabled,
      'has-label': label,
      'has-value': hasValue
    }"
    @hover="$emit('hover', $event)"
  >
    <select
      class="opacity-0 absolute"
      @focus="onFocus()"
      @blur="onBlur()"
    ></select>
    <div
      class="box selected cursor-pointer rounded-sm flex items-stretch justify-between"
      ref="selectedEl"
    >
      <div
        class="divider-r flex flex-col h-full justify-center overflow-hidden flex-1 px-3"
      >
        <label v-if="label" v-html="label" />
        <div class="placeholder" v-if="placeholder && !isSelected">
          {{ placeholder }}
        </div>
        <div v-if="isSelected">
          <div class="flex" v-if="multi">
            <template v-if="tags">
              <Tag
                v-for="(option, key) in selected.slice(0, 3)"
                :key="key"
                :class="`mr-2 last:mr-0`"
                :color="readonly ? 'alt' : 'alt2'"
              >
                {{ option.label
                }}<span
                  v-if="readonly && key !== 2 && key !== selected.length - 1"
                  >,
                </span>
                <span
                  class="icon icon-close cursor-pointer ml-1"
                  @click.stop="setValue(option.value)"
                  v-if="!readonly"
                ></span>
              </Tag>
              <Tag
                :color="readonly ? 'alt' : 'alt2'"
                v-if="selected.length > 3"
              >
                + {{ selected.length - 3 }}
              </Tag>
            </template>
            <template v-else> {{ selected.length }} Selected </template>
          </div>
          <div class="value truncate" v-else>
            {{ selected.label }}
          </div>
        </div>
      </div>
      <div class="suffix icon icon-chevron-down"></div>
    </div>
    <div
      class="options min-w-full p-1 origin-top z-50 absolute rounded-sm top-full mt-1 bg-base border border-alt2 shadow-overlay"
      v-if="!disabled"
      v-show="active && !readonly && !disabled"
    >
      <ul class="max-h-80 overflow-y-scroll whitespace-no-wrap" ref="optionsEl">
        <li
          class="option h-8 rounded-sm flex items-center px-2 cursor-pointer"
          v-for="(option, key) in normalizedOptions"
          :key="key"
          :class="{ active: optionIndex === key }"
          ref="optionEl"
          @mousedown.stop="setValue(option.value)"
          @mouseenter="setOptionIndex(key)"
          @touchdown.stop="setValue(option.value)"
        >
          <Checkbox class="mr-2" :value="option.selected" v-if="multi" />
          <div class="truncate">
            {{ option.label }}
          </div>
        </li>
      </ul>
    </div>
  </FormControl>
</template>

<script lang="ts">
import {
  Component,
  Mixins,
  Prop,
  Ref,
  Emit,
  Watch
} from "vue-property-decorator";
import { Listen } from "@/utilities/decorators";
import Base from "@/mixins/base";
import { FormQuestionOption } from "../../types";
import Checkbox from "@/components/checkbox/Checkbox.vue";
import Tag from "@/components/tag/Tag.vue";
import FormControl from "@/components/form-control/FormControl.vue";

@Component({
  components: { FormControl, Checkbox, Tag }
})
export default class CSelect extends Mixins(Base) {
  @Ref("selectedEl") public selectedEl;
  @Ref("optionsEl") public optionsEl;
  @Ref("optionEl") public optionEl;
  @Prop() public validation!: object;
  @Prop() public errorMessage!: string;
  @Prop() public showError!: boolean;
  @Prop() public readonly!: boolean;
  @Prop() public disabled!: boolean;
  @Prop() public multi!: boolean;
  @Prop() public options!: FormQuestionOption[];
  @Prop() public placeholder!: string;
  @Prop() public tags!: boolean;
  @Prop() public label!: string;
  @Prop() public value!: string | string[];
  public active = false;
  public optionIndex = 0;
  public searchStr = "";
  public timeout = 0;

  @Listen("click") public onClick(e): void {
    const path = e.path || this.getPath(e.target);

    this.setActive(
      this.active
        ? this.multi
          ? !!path.find(p => p === this.optionsEl)
          : false
        : !!path.find(p => p === this.selectedEl)
    );
  }

  @Listen("keydown") public onKeyDown(e) {
    if (!this.active || e.key === "Shift") return;
    if (e.key === "ArrowDown") {
      this.setOptionIndex(
        this.optionIndex < this.normalizedOptions.length - 1
          ? this.optionIndex + 1
          : 0
      );
    } else if (e.key === "ArrowUp") {
      this.setOptionIndex(
        this.optionIndex > 0
          ? this.optionIndex - 1
          : this.normalizedOptions.length - 1
      );
    } else if (e.key === "Escape") {
      this.setActive(false);
    } else if (e.key === "Enter") {
      this.setValue(this.normalizedOptions[this.optionIndex].value as string);
    } else {
      clearTimeout(this.timeout as number);
      this.timeout = window.setTimeout(() => {
        this.searchStr = "";
      }, 1500);
      this.searchStr += e.key;

      const index = this.normalizedOptions.findIndex(
        option =>
          option.label.slice(0, this.searchStr.length).toLowerCase() ===
          this.searchStr.toLowerCase()
      );
      const optionEl = this.optionEl[index];

      if (!optionEl) return;

      this.setOptionIndex(index);
    }
    this.optionsEl.scrollTo(0, this.optionEl[this.optionIndex].offsetTop - 4);
  }

  get normalizedOptions() {
    return this.options.map(option => ({
      ...option,
      selected: Array.isArray(this.value)
        ? this.value.find(value => value === option.value)
        : false
    }));
  }

  public getPath(target) {
    const path = [target];

    while ((target = target.parentElement)) {
      path.push(target);
    }

    return path;
  }

  public setOptionIndex(val) {
    this.optionIndex = val;
  }

  public onFocus(): void {
    this.$emit("focus");
    this.setActive(true);
  }

  public onBlur(): void {
    this.$emit("blur");
    this.setActive(false);
  }

  @Emit("input") public setValue(val: string) {
    if (!Array.isArray(this.value)) {
      this.setActive(false);
      return val;
    } else {
      return this.value.find(value => value === val)
        ? this.value.filter(value => value !== val)
        : [...this.value, val];
    }
  }

  get isSelected() {
    return (
      (this.multi && this.selected.length) ||
      (!this.multi && this.selected?.value)
    );
  }
  public setActive(val: boolean) {
    this.active = val;

    return val;
  }

  get hasValue() {
    if (!this.selected) return false;

    return this.selected || (this.selected?.[0]?.value && !this.readonly);
  }

  @Emit("focus") @Watch("active") public onActiveChange() {
    return this.active;
  }

  get selected(): any {
    return this.multi
      ? this.normalizedOptions.filter(
          option =>
            Array.isArray(this.value) &&
            this.value.find(o => o === option.value)
        )
      : this.normalizedOptions.find(option => option.value === this.value);
  }
}
</script>

<style lang="scss">
.theme-light {
  .c-select .options {
    @apply bg-body border-alt;
  }
  .c-select .option.active {
    @apply bg-base;
  }
}

.c-select {
  &[disabled] {
    * {
      @apply cursor-not-allowed;
    }
  }
  &.has-value {
    label {
      @apply transform;
      --transform-scale-x: 0.85;
      --transform-translate-x: 0;
      --transform-translate-y: 0%;
      --transform-scale-y: 0.85;
    }
  }

  &.has-label {
    .icon-chevron-down {
      @apply w-10;
    }
    .box {
      @apply h-14;
    }
  }

  .option {
    &.active {
      @apply bg-alt2;
    }
  }
  &:not(.active) {
    .icon-slide-up {
      transform: rotate(180deg);
    }
  }
}
</style>
