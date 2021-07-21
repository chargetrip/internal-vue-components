<template>
  <div
    class="c-readonly"
    :class="{ 'is-checkbox': normalizedComponentType === 'checkbox' }"
  >
    <TitleWithSubTitle
      v-if="!isEditing"
      :title="normalizedValue"
      :suffix="suffix"
      :prefix="prefix"
      :sub-title="label"
    />
    <Select
      v-bind="$props"
      @input="$emit('input', $event)"
      v-else-if="normalizedComponentType === 'select'"
    />
    <Input
      v-bind="$props"
      @input="$emit('input', $event)"
      v-else-if="normalizedComponentType === 'input'"
    />
    <Checkbox
      v-bind="$props"
      @input="$emit('input', $event)"
      v-else-if="normalizedComponentType === 'checkbox'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TitleWithSubTitle from "@/components/title-with-sub-title/TitleWithSubTitle.vue";
import Input from "@/components/input/Input.vue";
import Select from "@/components/select/Select.vue";
import Checkbox from "@/components/checkbox/Checkbox.vue";
import { FormControlProps } from "@/utilities/utilities";
@Component({
  components: { Select, Input, TitleWithSubTitle, Checkbox }
})
export default class CReadonly extends FormControlProps {
  @Prop() public componentType!: string;
  @Prop() public type!: string;
  @Prop() public icon!: string;
  @Prop() public hotkey!: { key: string; icon: string };
  @Prop() public id!: string;
  @Prop() public prefix!: string;
  @Prop() public suffix!: string;
  @Prop() public placeholder!: string;
  @Prop() public validation!: object;
  @Prop() public name!: string;
  @Prop() public box!: boolean;
  @Prop() public autocomplete!: string;
  @Prop() public maxlength!: number;
  @Prop() public readonly!: boolean;
  @Prop() public isEditing!: boolean;
  @Prop() public disabled!: boolean;
  @Prop() public showCheckmark!: boolean;
  @Prop() public label!: string;
  @Prop() public labelInside!: boolean;
  @Prop() public labelAlwaysVisible!: boolean;
  @Prop() public multi!: boolean;
  @Prop() public tags!: boolean;
  @Prop() public options!: Array<{ value: string; label: string }>;

  get normalizedValue() {
    return this.options
      ? Array.isArray(this.value)
        ? this.options
            .filter(
              option =>
                Array.isArray(this.value) &&
                this.value.find(v => v === option.value)
            )
            .map(option => option.value)
            .join(", ")
        : this.options.find(option => option.value === this.value)?.label
      : this.value;
  }

  get normalizedComponentType() {
    if (this.componentType) {
      return this.componentType;
    }

    return this.options ? "select" : "input";
  }
}
</script>

<style lang="scss">
.c-readonly {
  &.is-checkbox {
    .c-title-with-subtitle {
      .label,
      .sub-label {
        &:first-letter {
          @apply uppercase;
        }
      }
    }
  }
}
</style>
