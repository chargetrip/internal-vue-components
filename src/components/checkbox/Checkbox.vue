<template>
  <FormControl
    class="c-checkbox cursor-pointer flex items-center flex-row-reverse justify-end"
    :class="{
      active: value,
      error: validation && validation.$error,
      'has-label': label
    }"
    v-bind="$props"
    @click.prevent="onInput"
  >
    <label class="capitalize ml-3 cursor-pointer" :for="label" v-if="label">
      <span class="sub-label block text-font-alt3 text-12" v-if="subLabel">{{
        subLabel
      }}</span>
      <span class="label text-font-primary" v-html="label"></span>
    </label>
    <div
      class="input-wrapper border-alt3 border select-none w-4 h-4 relative bg-accent rounded-sm"
    >
      <div
        class="text-white marker text-10 center"
        :class="`icon icon-${icon}`"
      ></div>
      <input
        ref="input"
        class="cursor-pointer absolute w-full h-full opacity-0 left-0 top-0"
        :id="label"
        :value="value"
        :checked="value"
        type="checkbox"
        @change="onInput"
      />
    </div>
  </FormControl>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import FormControl from "@/components/form-control/FormControl.vue";

@Component({
  components: { FormControl }
})
export default class CCheckbox extends Vue {
  @Prop() public label!: string;
  @Prop() public subLabel!: string;
  @Prop() public name!: string;
  @Prop() public value!: boolean;
  @Prop() public disabled!: boolean;
  @Prop() public validation!: object;
  @Prop({ default: "checkmark" }) public icon!: string;
  @Emit("input") public onInput(): boolean {
    return !this.value;
  }
}
</script>

<style lang="scss">
.c-checkbox {
  &[disabled] {
    @apply opacity-50 pointer-events-none;

    .input-wrapper,
    label,
    input {
      @apply pointer-events-none;
    }
  }

  &.c-form-control {
    &.box {
      @apply p-3 h-auto h-14;
    }
  }

  &:not([disabled]) {
    &.active,
    &:hover.active {
      .input-wrapper {
        @apply border-accent-alt;
      }
    }
    &:hover {
      .input-wrapper {
        @apply border-alt4;
      }
    }
  }
  &:not(.active) {
    .input-wrapper {
      @apply bg-alt;

      .marker {
        @apply hidden;
      }
    }
  }
}
</style>