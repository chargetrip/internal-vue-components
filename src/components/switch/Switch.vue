<template>
  <FormControl
    class="c-switch cursor-pointer"
    v-bind="$props"
    :class="[size, { active: value }]"
    @click.native="toggle"
  >
    <label class="flex cursor-pointer items-center" :for="id" v-if="label">
      <span class="mr-3 text-18" :class="`icon-${icon}`" v-if="icon" />
      {{ label }}
    </label>
    <div
      class="switch-box flex w-14 transition duration-300 border relative select-none cursor-pointer leading-none text-12 h-6 flex items-center uppercase font-bold rounded-sm p-1"
    >
      <input
        class="opacity-0 invisible absolute w-full h-full"
        type="checkbox"
        :id="id"
        :checked="value"
      />
      <div
        class="thumb w-4 z-10 transition duration-300 absolute h-4 shadow-down-sm bg-white rounded-xs"
      ></div>
      <div
        class="icon w-8 absolute h-full left-0 top-0 flex items-center justify-center icon-on-indicator on text-white transition duration-300"
      />
      <div
        class="icon w-8 absolute h-full right-0 top-0 flex items-center justify-center icon-off-indicator off transition duration-300 ml-auto opacity-50"
      />
    </div>
  </FormControl>
</template>

<script lang="ts">
import { Component, Emit, Prop } from "vue-property-decorator";
import FormControl from "@/components/form-control/FormControl.vue";
import { FormControlProps } from "@/utilities/utilities";

@Component({
  components: { FormControl }
})
export default class CSwitch extends FormControlProps {
  @Prop({ default: "md" }) public size!: string;

  @Emit("input")
  public toggle(): boolean {
    if (this.disabled) return Boolean(this.value);

    return !this.value;
  }
}
</script>

<style lang="scss">
.c-switch {
  &.sm {
    &.active {
      .thumb {
        --tw-translate-x: calc(12px);
      }
    }
    .switch-box {
      @apply h-4 w-8;

      .thumb {
        width: 10px;
        height: 10px;
      }
      .icon {
        @apply w-4 text-8;
      }
    }
  }
  &.active {
    .switch-box {
      @apply bg-accent border-accent-alt;
    }

    .thumb {
      @apply transform;
      --tw-translate-x: calc(30px);
    }

    .off {
      @apply opacity-0;
    }
  }

  &:not(.active) {
    .switch-box {
      @apply bg-alt border-alt2;
    }

    .on {
      @apply opacity-0;
    }
  }
}
</style>
