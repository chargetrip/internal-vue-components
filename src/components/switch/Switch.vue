<template>
  <FormControl class="c-switch" :class="{ active: value }">
    <label class="!text-font-primary" :for="id" v-if="label">
      {{ label }}
    </label>
    <div
      class="switch-box transition duration-300 border relative select-none cursor-pointer leading-none text-12 h-6 flex items-center uppercase font-bold rounded-sm p-1"
      @click="toggle"
    >
      <input
        class="opacity-0 invisible absolute w-full h-full"
        type="checkbox"
        :id="id"
        :checked="value"
      />
      <div
        class="thumb z-10 transition duration-300 absolute h-4 shadow bg-white rounded-xs"
      ></div>
      <div class="grid">
        <div class="on text-white transition duration-300 pl-1">
          {{ onLabel || "On" }}
        </div>
        <div class="off transition duration-300 ml-auto pr-1 opacity-50">
          {{ offLabel || "Off" }}
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
export default class CSwitch extends Vue {
  @Prop() public value!: boolean;
  @Prop() public label!: string;
  @Prop() public id!: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  @Prop() public offLabel!: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  @Prop() public onLabel!: string;

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
      --transform-translate-x: calc(100% + 8px);
    }

    .off {
      @apply opacity-0;
    }
  }

  .thumb {
    width: calc(50% - 8px);
  }

  .grid {
    grid-template-columns: repeat(2, minmax(32px, 1fr));
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
