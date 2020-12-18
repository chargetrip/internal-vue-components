<template>
  <FormControl
    class="c-checkbox cursor-pointer"
    :class="{
      active: value,
      'has-label': label,
      'has-box': box
    }"
    v-bind="$props"
    @click.prevent.native="onInput"
  >
    <div
      class="checkbox-container flex items-center flex-row-reverse justify-end"
      :class="{ box: box }"
    >
      <label class="ml-3 cursor-pointer" :for="checkboxId" v-if="label">
        <span class="sub-label block text-font-alt3 text-12" v-if="subLabel">{{
          subLabel
        }}</span>
        <span class="label text-font-primary" v-html="label"></span>
      </label>
      <div :class="{ prefix: box }">
        <div
          class="input-wrapper border-alt3 border select-none w-4 h-4 relative bg-accent rounded-sm"
        >
          <div
            class="text-white marker text-12 center"
            :class="`icon icon-${icon}`"
          ></div>
          <input
            ref="input"
            class="cursor-pointer absolute w-full h-full left-0 top-0 opacity-0"
            :id="checkboxId"
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

@Component({
  components: { FormControl }
})
export default class CCheckbox extends Vue {
  @Prop() public label!: string;
  @Prop() public subLabel!: string;
  @Prop() public name!: string;
  @Prop() public value!: boolean;
  @Prop() public checkboxId!: boolean;
  @Prop() public box!: boolean;
  @Prop() public disabled!: boolean;
  @Prop() public validation!: object;
  @Prop() public errorMessage!: string;
  @Prop() public showError!: boolean;
  @Prop({ default: "checkmark" }) public icon!: string;

  @Emit("input")
  public onInput(): boolean {
    return !this.value;
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
    &.active {
      .box {
        @apply border-alt;

        &.has-hover {
          @apply border-alt3;
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
