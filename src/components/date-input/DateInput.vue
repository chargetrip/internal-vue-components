<template>
  <Input
    class="c-date-input"
    v-bind="$props"
    v-maska="mask"
    :maxlength="formatString.length"
    :placeholder="placeholder"
    :value="formattedDate"
    :label="label"
    :focus="focus"
    @focus="setFocus(true)"
    @input="onInput"
  />
</template>

<script lang="ts">
import { Component, Prop, Ref, Emit } from "vue-property-decorator";
import Input from "@/components/input/Input.vue";
import { FormControlProps } from "@/utilities/utilities";
import { format, isValid, parse, startOfDay } from "date-fns";
import { maska } from "maska";

@Component({
  components: { Input },
  directives: { maska }
})
export default class CDateInput extends FormControlProps {
  @Ref("input") public input!: HTMLInputElement;
  @Prop({ default: null }) readonly value!: Date | null;
  // For valid format tokens, see: https://date-fns.org/v2.28.0/docs/parse
  @Prop({ default: "MM / yyyy" }) readonly formatString!: string;
  // NOTE: If a `mask` is used, make sure that it matches `formatString`, e.g:
  // formatString="dd / MM / yyyy"
  // mask="## / ## / ####"
  @Prop({ default: "## / ####" }) readonly mask!: string;

  focus = false;

  get formattedDate(): string {
    try {
      return format(this.value!, this.formatString);
    } catch (e) {
      return "";
    }
  }

  @Emit("focus")
  public setFocus(value: boolean) {
    this.focus = value;
    return value;
  }

  @Emit("input")
  public onInput(value: string) {
    // Prevent early parsing of an invalid date
    if (value.length === this.formatString.length) {
      const parsed = parse(value, this.formatString, new Date());

      if (isValid(parsed)) {
        return startOfDay(parsed);
      }
    }

    return value;
  }
}
</script>
