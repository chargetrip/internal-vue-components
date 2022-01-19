<template>
  <Input
    class="c-date-input"
    v-bind="$props"
    v-maska="mask"
    :maxlength="formatString.length"
    :placeholder="placeholder"
    @input="onInput"
    :value="formattedDate"
    :label="label"
  />
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref } from "vue-property-decorator";
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
  // For valid format tokens, see: https://date-fns.org/v2.28.0/docs/parse
  @Prop({ default: "MM / yyyy" }) readonly formatString!: string;
  // NOTE: If a `mask` is used, make sure that it matches `formatString`, e.g:
  // formatString="dd / MM / yyyy"
  // mask="## / ## / ####"
  @Prop({ default: "## / ####" }) readonly mask!: string;
  @Prop({ default: null }) readonly initialValue!: Date | null;

  get formattedDate(): string {
    if (this.initialValue) {
      return format(this.initialValue, this.formatString);
    }

    return "";
  }

  @Emit("input")
  public onInput(value: string, _: InputEvent) {
    // Prevent early parsing of an invalid date
    if (value.length === this.formatString.length) {
      const parsed = parse(value, this.formatString, new Date());

      if (isValid(parsed)) {
        this.$emit("input-date", startOfDay(parsed));
      }
    }

    return value;
  }
}
</script>
