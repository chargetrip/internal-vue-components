<template>
  <FormControl class="c-switch" :class="{ active: value }">
    <label class="!text-font-primary" :for="id" v-if="label">
      {{ label }}
    </label>
    <div
      class="switch-box w-14 transition duration-300 border relative select-none cursor-pointer leading-none text-12 h-6 flex items-center uppercase font-bold rounded-sm p-1"
      @click="toggle"
    >
      <input
        class="opacity-0 invisible absolute w-full h-full"
        type="checkbox"
        :id="id"
        :checked="value"
      />
      <div
        class="thumb w-4 z-10 transition duration-300 absolute h-4 shadow bg-white rounded-xs"
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
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import FormControl from "@/components/form-control/FormControl.vue";

@Component({
  components: { FormControl }
})
export default class CSwitch extends Vue {
  @Prop() public value!: boolean;
  @Prop() public label!: string;
  @Prop() public id!: string;
  @Emit("input") public toggle(): boolean {
    return !this.value;
  }
}
</script>

<style lang="scss">
.c-switch {
  &.active {
    .switch-box {
      @apply bg-accent border-accent-alt;
    }

    .thumb {
      @apply transform;
      --transform-translate-x: calc(30px);
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
