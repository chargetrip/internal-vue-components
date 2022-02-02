<template>
  <div class="c-checkbox-tree select-none" :class="{ overflow }">
    <Checkbox
      class="py-3 border-b border-base"
      :value="allChecked"
      v-bind="all"
      v-if="all"
      @input="toggleAll"
    />
    <ul>
      <li
        class="border-b border-base last:border-0"
        ref="optionEl"
        v-for="(option, key) in options"
        :key="key"
      >
        <div
          class="flex toggle justify-start py-3 items-center cursor-pointer"
          @click="index = index === key ? null : key"
        >
          <Checkbox
            @click.native.stop
            v-bind="option"
            :value="
              option.children
                ? allChildrenChecked(option)
                : value.some(val => val === option.id)
            "
            :sub-label="option.children ? getLabel(option) : option.subLabel"
            @input="
              option.children
                ? checkOrUncheckAllChildren($event, option)
                : onInput($event, option)
            "
          />
          <div
            class="icon-chevron-down text-16 cursor-pointer w-14 h-6 flex items-center justify-center ml-auto block"
            :class="{ 'transform rotate-180': index === key }"
            v-if="option.children"
          />
        </div>
        <ul
          v-show="index === key"
          class="border-t border-base bg-base space-y-2 py-3 px-4"
          v-if="option.children"
        >
          <li
            class="flex items-start"
            v-for="(child, cKey) in option.children"
            :key="cKey"
          >
            <Checkbox
              v-bind="child"
              :value="value.some(val => val === child.id)"
              :sub-label="getNestedSublabel(child)"
              @input="onInput($event, child)"
            />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop, Ref } from "vue-property-decorator";
import Checkbox from "@/components/checkbox/Checkbox.vue";
import Base from "@/mixins/base";

@Component({
  components: { Checkbox }
})
export default class CCheckboxTree extends Mixins(Base) {
  @Ref("optionEl") public optionElList!: HTMLElement[];
  @Prop() all;
  @Prop() overflow!: boolean;
  @Prop() options;
  @Prop({ default: [] }) value;
  @Prop() nestedLabelFn;
  @Prop() labelFn;
  index = null;

  @Emit("input") onInput(checked, option) {
    return checked
      ? [...this.value, option.id]
      : this.value.filter(val => val !== option.id);
  }

  allChildrenChecked(option) {
    return option.children
      ? this.checkedChildren(option).length === option.children.length
      : false;
  }

  getLabel(option) {
    const checkedChildren = this.checkedChildren(option);

    return (
      this.labelFn?.(option, checkedChildren) ||
      `${checkedChildren.length} / ${option.children?.length || 0} selected`
    );
  }

  getNestedSublabel(child) {
    return this.nestedLabelFn?.(child);
  }

  checkedChildren(option) {
    return option.children
      ? option.children.filter(child =>
          this.value.some(val => child.id === val)
        )
      : 0;
  }
  get allChecked() {
    return (
      this.options.flatMap(option => option.children).length ===
      this.value.length
    );
  }

  @Emit("input") toggleAll() {
    return this.allChecked
      ? []
      : this.options
          .flatMap(option => {
            return option.children || option;
          })
          .map(child => child.id);
  }

  @Emit("input") checkOrUncheckAllChildren(checked, option) {
    return checked
      ? [
          ...new Set([
            ...this.value,
            ...(option.children?.map(child => child.id) || [])
          ])
        ]
      : this.value.filter(
          val => !option.children?.some(child => child.id === val)
        );
  }
}
</script>
<style lang="scss">
.c-checkbox-tree {
  &.overflow {
    ul ul li,
    ul li > .toggle,
    > .c-form-control {
      @apply pl-6;
    }
    ul ul li,
    > .c-form-control {
      @apply pr-6;
    }
  }
  ul {
  }
}
</style>
