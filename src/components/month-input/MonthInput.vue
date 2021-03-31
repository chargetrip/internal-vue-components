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
import { FormControlProps } from "@/utilities/utilities";

@Component({
  components: { Input },
  props: FormControlProps
})
export default class CMonthInput extends Mixins(Base) {
  @Ref("input") public input!: HTMLInputElement;

  @Emit("input") public onInput(value, event) {
    if (event.inputType !== "deleteContentBackward" && value.length === 2) {
      return `${value} / `;
    }

    return value;
  }
}
</script>
