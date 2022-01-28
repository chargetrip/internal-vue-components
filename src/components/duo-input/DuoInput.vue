<template>
  <div
    class="c-duo-input rounded border border-transparent bg-base transition"
    :class="{
      'has-error': validation.$error,
      'has-focus': hasFocus,
      'has-hover': hasHover
    }"
  >
    <Input
      id="input1"
      @focus="onFocus"
      @blur="onBlur"
      @hover="hasHover = $event"
      v-bind="input1"
      :value="input1.value"
      @input="$emit('input1', $event)"
    />
    <div class="divider h-px w-full bg-alt transition" />
    <Input
      id="input2"
      @focus="onFocus"
      @blur="onBlur"
      @hover="hasHover = $event"
      v-bind="input2"
      :value="input2.value"
      @input="$emit('input2', $event)"
    />
    <p
      class="error-msg text-left bg-warning text-white py-2 px-3 text-12 !m-0"
      v-if="validation.$error"
    >
      <strong>
        {{ errorMessage }}
      </strong>
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Validation } from "vuelidate";
import Input from "../input/Input.vue";

@Component({ components: { Input } })
export default class DuoInput extends Vue {
  @Prop() validation!: Validation & { input1: Validation; input2: Validation };
  @Prop() errorMessage!: string;
  @Prop() input1!: any;
  @Prop() input2!: any;
  hasFocus = false;
  hasHover = false;

  @Emit("focus") onFocus() {
    this.hasFocus = true;
  }
  @Emit("blur") onBlur() {
    this.hasFocus = false;
  }
}
</script>
<style lang="scss">
.c-duo-input {
  &.has-hover {
    @apply bg-alt;

    .divider {
      @apply bg-alt2;
    }
  }
  &.has-focus,
  &.has-error {
    @apply bg-base;

    .divider {
      @apply bg-alt;
    }
  }
  &.has-focus {
    @apply border-accent;
  }
  &.has-error {
    @apply border-2 border-warning;
  }
  .c-form-control.has-focus .box,
  .c-form-control.has-hover .box,
  .c-form-control .box {
    @apply rounded-none border-0 bg-transparent;
  }
}
</style>
