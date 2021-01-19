<template>
  <div
    class="c-checkbox-tree form-question select-none"
    @mousedown="onMouseDown"
  >
    <Checkbox
      class="toggle-all pb-4 border-b border-alt"
      label="Select all"
      name="test"
      :checkbox-id="'all'"
      :icon="checkedAll ? 'checkmark' : 'minus'"
      v-model="checkedAll"
      @input="onCheckedAllChange($event)"
      v-if="all"
    />
    <div
      class="option last:mb-0"
      v-for="(option, o) in normalizedValue"
      :class="{
        'pb-6 border-b border-alt': option.children && option.showChildren
      }"
      :key="o"
    >
      <div
        class="flex items-center"
        :class="{
          'border-b border-alt py-4': option.children,
          'py-1': !option.children
        }"
      >
        <Checkbox
          :icon="
            !option.children || checkedAllChildren(option)
              ? 'checkmark'
              : 'minus'
          "
          @input="onInput(option)"
          ref="option"
          v-bind="option"
          v-model="option.value"
        />
        <span
          class="icon-chevron-down text-20 ml-auto mr-6"
          @click="option.showChildren = !option.showChildren"
          v-if="option.children"
        />
      </div>
      <div
        class="children mt-6 px-5"
        v-if="option.children"
        v-show="option.showChildren"
      >
        <Checkbox
          class="mb-6 last:mb-0"
          v-bind="child"
          :key="`${c}-${o}`"
          ref="childOption"
          v-model="child.value"
          v-for="(child, c) in option.children"
          @input="$emit('input', normalizedValue)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Mixins,
  Prop,
  Ref,
  Watch
} from "vue-property-decorator";
import Checkbox from "@/components/checkbox/Checkbox.vue";
import { CheckboxTreeValue } from "@/types";
import { Listen } from "@/utilities/decorators";
import Base from "@/mixins/base";

@Component({
  components: { Checkbox }
})
export default class CCheckboxTree extends Mixins(Base) {
  @Ref("option") public options!: HTMLBaseElement;
  @Ref("childOption") public childOptions!: HTMLBaseElement;
  @Prop() public label!: string;
  @Prop() public value!: CheckboxTreeValue[];
  @Prop() public all!: boolean;
  public checkedAll = false;
  public startPos: null | MouseEvent = null;
  public selecting = false;
  public selectingOptions: null | CheckboxTreeValue[] = null;
  normalizedValue: CheckboxTreeValue[] = [];
  e: MouseEvent | null = null;

  @Watch("value", { immediate: true }) onValueChange() {
    this.normalizedValue = this.value.map(option => ({
      ...option,
      value: option.children
        ? option.children.some(child => child.value)
        : option.value,
      showChildren:
        option.showChildren !== undefined ? option.showChildren : false
    }));

    this.checkedAll = this.all
      ? this.flattenValue.filter(x => !x.value).length === 0
      : false;
  }

  get flattenValue(): CheckboxTreeValue[] {
    return this.normalizedValue
      .reduce((arr: CheckboxTreeValue[], item: CheckboxTreeValue) => {
        arr.push(item);

        if (item.children) arr.push(...item.children);

        return arr;
      }, [])
      .filter((item: CheckboxTreeValue) => !item.children);
  }

  public checkedAllChildren(option) {
    return !option.children.filter(child => !child.value).length;
  }

  @Emit("input") public onInput(option: CheckboxTreeValue) {
    if (option.children) {
      option.children = option.children.map(child => ({
        ...child,
        value: option.value
      }));
    }

    return this.normalizedValue;
  }

  @Emit("input") public onCheckedAllChange() {
    return this.getCheckedAllValue(this.normalizedValue);
  }

  public onMouseDown(e) {
    this.startPos = e;
    this.selecting = true;
    this.selectingOptions = this.normalizedValue;
  }

  loopSelected(options, compareOptions) {
    return options.map(option => {
      if (!this.startPos || !this.e) return option;

      const el = compareOptions.find(
        optionEl => optionEl.$props.checkboxId === option.checkboxId
      ).$el;
      const optionRect = el.getBoundingClientRect();

      const condition =
        (optionRect.top + optionRect.height >= this.startPos.clientY &&
          optionRect.top <= this.e.clientY) ||
        (optionRect.top <= this.startPos.clientY &&
          optionRect.top + optionRect.height >= this.e.clientY);

      const value = condition ? !option.value : option.value;

      return {
        ...option,
        value: value,
        children:
          option.children && option.showChildren
            ? this.loopSelected(option.children, this.childOptions)
            : option.children && !option.showChildren
            ? option.children.map(child => ({ ...child, value: value }))
            : option.children
      };
    });
  }

  @Listen("mousemove") public onMouseMove(e) {
    if (
      this.selecting &&
      this.selectingOptions &&
      this.startPos &&
      Math.abs(this.startPos.clientY - e.clientY) > 3
    ) {
      this.e = e;

      this.$emit(
        "input",
        this.loopSelected(this.selectingOptions, this.options)
      );
    }
  }

  @Listen("mouseup") public onMouseUp() {
    this.selecting = false;
  }

  public getCheckedAllValue(arr: CheckboxTreeValue[]) {
    return arr.map((option: CheckboxTreeValue) => {
      option.value = this.checkedAll;

      if (option.children) {
        option.children = this.getCheckedAllValue(option.children);
      }

      return option;
    });
  }
}
</script>
