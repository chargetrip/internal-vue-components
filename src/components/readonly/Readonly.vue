<template>
  <div class="c-readonly">
    <TitleWithSubTitle
      v-if="readonly"
      :title="normalizedValue"
      :sub-title="label"
    />
    <Select
      class="my-3"
      v-bind="$props"
      @input="$emit('input', $event)"
      v-else-if="normalizedComponentType === 'select'"
    />
    <Input
      class="my-3"
      v-bind="$props"
      @input="$emit('input', $event)"
      v-else-if="normalizedComponentType === 'input'"
    />
    <Checkbox
      class="my-3"
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
@Component({
  components: { Select, Input, TitleWithSubTitle }
})
export default class CReadonly extends Vue {
  @Prop() public componentType!: string;
  @Prop() public type!: string;
  @Prop() public icon!: string;
  @Prop() public hotkey!: { key: string; icon: string };
  @Prop() public id!: string;
  @Prop() public placeholder!: string;
  @Prop() public validation!: object;
  @Prop() public name!: string;
  @Prop() public box!: boolean;
  @Prop() public autocomplete!: string;
  @Prop() public maxlength!: number;
  @Prop() public readonly!: boolean;
  @Prop() public disabled!: boolean;
  @Prop() public showCheckmark!: boolean;
  @Prop() public label!: string;
  @Prop() public labelInside!: boolean;
  @Prop() public labelAlwaysVisible!: boolean;
  @Prop() public multi!: boolean;
  @Prop() public tags!: boolean;
  @Prop() public options!: Array<{ value: string; label: string }>;
  @Prop() public value!: string | number | null | string[];

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
    return this.componentType || this.options ? "select" : "input";
  }
}
</script>
