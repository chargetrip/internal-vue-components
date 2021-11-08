<template>
  <div
    class="c-form-control relative text-14 select-none font-semibold"
    :data-cy="id"
    :disabled="disabled"
    :class="{
      error: isError,
      readonly: readonly || disabled,
      disabled: disabled,
      skeleton: isSkeleton,
      'has-error-message': errorMessage,
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
      v-if="isError && errorMessage && errorMessage"
    >
      {{ errorMessage }}
    </div>
    <Tooltip
      class="left-full whitespace-nowrap z-20"
      :orientation="orientation"
      v-if="focus && rulesTitle"
    >
      <p class="leading-none mb-1">
        <strong>
          {{ rulesTitle }}
        </strong>
      </p>
      <ul class="font-normal">
        <li v-for="(rule, key) in normalizedRules" :key="key">
          <span
            class="icon-checkmark text-14 mr-1"
            :class="{
              'text-accent': rule.isValid,
              'text-font-alt3': !rule.isValid
            }"
          />
          {{ rule.description }}
        </li>
      </ul>
    </Tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Watch } from "vue-property-decorator";
import { FormControlProps } from "@/utilities/utilities";
import Tooltip from "@/components/tooltip/Tooltip.vue";

@Component({ components: { Tooltip } })
export default class CFormControl extends FormControlProps {
  @Prop() focus;
  public hover = false;
  public orientation = "right";

  mounted() {
    this.orientation = window.innerWidth < 720 ? "bottom" : "right";
  }

  @Emit("focus") public setFocus(val) {
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

  @Watch("value") onValueChange() {
    this.setHover(false);
    this.setFocus(false);
  }

  get isError() {
    if (this.showError) {
      return true;
    }

    if (!this.validation) {
      return false;
    }

    if (this.form) {
      return this.form.$dirty && this.validation.$error;
    }

    return this.validation.$error;
  }

  get normalizedRules() {
    return Object.entries(this.validation)
      .filter(([key]) => key in this.validation?.$params)
      .map(([key, value]) => {
        return {
          description: this.rules[key],
          isValid: value
        };
      });
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
          --tw-scale-y: 0.85;
          --tw-translate-x: 2px;
          --tw-translate-y: -100%;
          --tw-scale-x: 0.85;
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
    &.has-error-message {
      .box {
        @apply rounded-b-none;
      }
    }
    .error-msg {
      @apply block;
    }
    .box {
      @apply border-warning border-2;
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
