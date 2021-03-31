<template>
  <FormControl
    class="c-checkbox cursor-pointer"
    :class="{
      active: value,
      'has-label': label,
      'has-focus': focus,
      'has-box': box
    }"
    v-bind="$props"
    @click.native="$emit('input', !value)"
  >
    <div
      class="checkbox-container flex items-center flex-row-reverse justify-end"
      :class="{ box: box }"
    >
      <label
        class="ml-3 cursor-pointer pointer-events-none"
        :for="checkboxId"
        v-if="label"
        @click.stop
      >
        <span
          class="sub-label block text-font-alt3 text-12"
          v-if="subLabel"
          v-html="subLabel"
        />
        <span class="label text-font-primary" v-html="label"></span>
      </label>
      <div :class="{ prefix: box }">
        <div
          class="input-wrapper border-alt3 border select-none w-4 h-4 relative bg-accent rounded-sm transition-colors duration-300"
        >
          <span
            class="text-white transition duration-300 marker text-8 center"
            :class="`icon icon-${icon}`"
          />
          <input
            ref="input"
            class="cursor-pointer absolute w-full h-full left-0 top-0 pointer-events-none opacity-0"
            :id="checkboxId"
            @focus="onFocus"
            @blur="onBlur"
            :checked="value"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  </FormControl>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import FormControl from "@/components/form-control/FormControl.vue";
import { FormControlProps } from "@/utilities/utilities";

@Component({
  components: { FormControl },
  props: FormControlProps
})
export default class CCheckbox extends Vue {
  @Prop() public subLabel!: string;
  @Prop() public checkboxId!: boolean;
  @Prop() public box!: boolean;
  @Prop({ default: "checkmark" }) public icon!: string;
  public focus = false;

  @Emit("input")
  public onInput(): boolean {
    return !this.value;
  }

  @Emit("focus") public onFocus() {
    this.focus = true;

    return this.value;
  }

  @Emit("blur") public onBlur() {
    this.focus = false;

    return this.value;
  }
}
</script>

<style lang="scss">
.theme-light {
  .c-checkbox {
    &:not(.active) {
      .input-wrapper {
        @apply bg-transparent;
      }
    }
  }
}
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
    &.error {
      .input-wrapper {
        @apply border-warning;
      }
    }
    &.has-focus {
      .box {
        @apply bg-alt;
      }
      .input-wrapper {
        @apply border-accent;
      }
    }
    &:not(.has-focus) {
      &.active {
        &.has-hover {
          .box,
          .prefix,
          .suffix {
            @apply border-alt3;

            &.has-hover {
              @apply border-alt3;
            }
          }
        }
        .box,
        .prefix,
        .suffix {
          @apply border-alt2;

          &.has-hover {
            @apply border-alt2;
          }
        }
      }
    }

    .box {
      @apply h-auto h-14;

      label {
        @apply flex-1;
      }
    }
  }

  .error-msg {
    @apply bg-transparent text-warning pl-7 text-12 font-normal;
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
        @apply opacity-0;
      }
    }
  }
}
</style>
