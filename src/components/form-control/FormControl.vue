<template>
  <div
    class="c-form-control relative skeleton text-14 select-none font-semibold"
    :disabled="disabled"
    :class="{
      error: (validation && validation.$error) || showError,
      readonly: readonly || disabled,
      disabled: disabled,
      'has-hover': hover && !(readonly || disabled),
      'has-focus': focus && !(readonly || disabled),
      'label-inside': labelInside,
      'label-always-visible': labelAlwaysVisible
    }"
    @mouseenter="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <slot />
    <div
      class="error-msg text-left bg-warning hidden rounded-b text-white py-2 px-3 text-12"
      v-if="(validation && validation.$error) || showError"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop } from "vue-property-decorator";
import Base from "@/mixins/base";

@Component({
  components: {}
})
export default class CFormControl extends Mixins(Base) {
  @Prop() public validation!: object;
  @Prop({ default: "This field is required" }) public errorMessage!: string;
  @Prop() public showError!: boolean;
  @Prop() public readonly!: boolean;
  @Prop() public disabled!: boolean;
  @Prop() public labelInside!: boolean;
  @Prop() public labelAlwaysVisible!: boolean;
  public hover = false;
  public focus = false;

  @Emit("focus") public setFocus(val) {
    this.focus = val;
    return val;
  }

  @Emit("blur") public onBlur(event) {
    this.setFocus(false);
    return event.target.value;
  }

  @Emit("hover") public setHover(val) {
    this.hover = val;

    return val;
  }
}
</script>

<style lang="scss">
.c-form-control {
  &[disabled],
  &[disabled] .box {
    @apply cursor-not-allowed;
  }

  &[disabled] {
    @apply opacity-50;
  }

  &.has-label {
    &.label-always-visible {
      &.has-value {
        label {
          --transform-scale-x: 0.85;
          --transform-translate-x: 0;
          --transform-translate-y: -100%;
          --transform-scale-y: 0.85;
        }
      }
      .box,
      &.box {
        @apply h-14;
      }
    }
    &.label-inside {
      label {
        @apply absolute transform top-1/2 left-0 -translate-y-1/2 px-3;
      }
    }
  }

  &:not(.error) {
    &.has-hover {
      .prefix,
      .suffix,
      .box {
        @apply border-alt3;
      }

      .box {
        @apply bg-alt;
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 32px var(--alt) inset;
      }
    }

    &.has-focus {
      .prefix,
      .suffix,
      .box {
        @apply border-accent;
      }
      .box {
        @apply bg-base;
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 32px var(--base) inset;
      }
    }

    &.active {
      .box {
        @apply border-accent;
      }
    }
  }

  &.error {
    .error-msg {
      @apply block;
    }
    .box {
      @apply border-warning border-2 rounded-b-none;
    }
  }
  .box {
    @apply h-8 bg-base transition-colors duration-300 rounded-md text-14 text-font-primary outline-none border border-alt2 font-semibold;
  }

  .suffix,
  .prefix {
    @apply px-2 min-w-10 flex items-center justify-center border-alt2 h-full text-font-alt2 flex-shrink-0 transition-colors duration-300;
  }

  .placeholder {
    @apply opacity-50;
  }

  .prefix {
    @apply border-r;
  }

  .suffix {
    @apply border-l;
  }

  label {
    @apply transform origin-left font-semibold transition duration-300 z-10 text-font-alt3;
  }

  input {
    @apply outline-none w-full h-full bg-transparent px-3 font-semibold shadow-none;

    &::placeholder {
      @apply text-font-alt3;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 32px var(--base) inset;
      -webkit-text-fill-color: var(--font-primary);
      border-radius: 6px;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
}
</style>
