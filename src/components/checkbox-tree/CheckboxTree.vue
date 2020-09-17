<template>
  <div
    class="c-checkbox-tree form-question select-none"
    @mousedown="onMouseDown"
  >
    <Checkbox
      class="pb-4 border-b border-alt"
      label="Select all"
      name="test"
      :icon="checkedAll ? 'checkmark' : 'minus'"
      v-model="checkedAll"
      v-if="all"
    />
    <div
      class="option last:mb-0"
      v-for="(option, o) in value"
      :key="o"
      :class="{ 'mb-6': option.children }"
    >
      <Checkbox
        class="border-b border-alt py-4"
        :icon="
          !option.children || checkedAllChildren(option) ? 'checkmark' : 'minus'
        "
        @input="onInput(option)"
        ref="option"
        v-bind="option"
        v-model="option.value"
      />
      <div class="children mt-6 ml-5" v-if="option.children">
        <Checkbox
          class="mb-6 last:mb-0"
          v-bind="child"
          :key="c"
          ref="childOption"
          v-model="child.value"
          v-for="(child, c) in option.children"
          @input="onChildInput(option, child, $event)"
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
  @Prop() public label!: string;
  @Prop() public value!: CheckboxTreeValue[];
  @Prop() public all!: boolean;
  public checkedAll = false;
  public startPos: null | MouseEvent = null;
  public selecting = false;
  public selectingOptions: null | CheckboxTreeValue[] = null;
  public beforeMount(): void {
    this.onValueChange();
  }

  public onValueChange(): void {
    this.checkedAll = this.all
      ? this.flattenValue.filter(x => !x.value).length === 0
      : false;
  }

  get flattenValue(): CheckboxTreeValue[] {
    return this.value
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

    return this.value;
  }

  @Emit("input") @Watch("checkedAll") public onCheckedAllChange() {
    return this.getCheckedAllValue(this.value);
  }

  @Emit("input") public onChildInput(option: CheckboxTreeValue) {
    if (option.children)
      option.value = option.children.filter(child => child.value).length !== 0;

    return this.value;
  }

  public onMouseDown(e) {
    this.startPos = e;
    this.selecting = true;
    this.selectingOptions = this.value;
  }

  @Listen("mousemove") public onMouseMove(e) {
    if (
      this.selecting &&
      this.selectingOptions &&
      this.startPos &&
      Math.abs(this.startPos.clientY - e.clientY) > 10
    ) {
      const value = this.selectingOptions.map((option, i) => {
        if (!this.startPos) return option;
        const optionRect = this.options[i].$el.getBoundingClientRect();
        const condition =
          (optionRect.top + optionRect.height >= this.startPos.clientY &&
            optionRect.top <= e.clientY) ||
          (optionRect.top <= this.startPos.clientY &&
            optionRect.top + optionRect.height >= e.clientY);

        return {
          ...option,
          value: condition ? !option.value : option.value
        };
      });

      this.$emit("input", value);
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
