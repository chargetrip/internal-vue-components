<template>
  <Input
    class="c-month-input"
    v-bind="$props"
    :maxlength="9"
    :label="label || 'MM / YYYY'"
    :placeholder="placeholder || 'MM / YYYY'"
    @input="onInput"
    :value="value"
  />
</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop, Ref } from "vue-property-decorator";
import Base from "@/mixins/base";
import Input from "@/components/input/Input.vue";

@Component({
  components: { Input }
})
export default class CMonthInput extends Mixins(Base) {
  @Prop() public id!: string;
  @Prop() public validation!: object;
  @Prop() public name!: string;
  @Prop() public autocomplete!: string;
  @Prop() public disabled!: boolean;
  @Prop() public readonly!: boolean;
  @Prop() public showCheckmark!: boolean;
  @Prop() public label!: boolean;
  @Prop() public placeholder!: boolean;
  @Prop() public value!: string | number | null;
  @Ref("input") public input!: HTMLInputElement;

  @Emit("input") public onInput(value, event) {
    if (event.inputType !== "deleteContentBackward" && value.length === 2) {
      return `${value} / `;
    }

    return value;
  }
}
</script>
