<template>
  <div
    class="c-tooltip z-5 flex flex-col rounded py-2 px-4 bg-base border border-alt2 shadow-down-sm absolute"
    :class="{ left: orientation === 'left', bottom: orientation === 'bottom' }"
    @click.stop
  >
    <div
      class="triangle w-2 h-2 border-r border-t absolute block bg-base border-alt2"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop, Watch } from "vue-property-decorator";
import Base from "@/mixins/base";
import { Listen } from "@/utilities/decorators";

@Component({
  components: {}
})
export default class CTooltip extends Mixins(Base) {
  @Prop({ default: "left" }) orientation;

  @Listen("click") @Watch("$route") @Emit("close") public onClick() {
    return true;
  }
}
</script>

<style lang="scss">
.c-tooltip {
  &.left {
    @apply top-0 -mt-2 -ml-2 transform -translate-x-full left-0;

    .triangle {
      @apply transform rotate-45 mt-3 translate-x-full border-alt2;
      right: 3px;
      top: -2px;
      content: "";
    }
  }

  &.bottom {
    @apply top-full left-1/2 transform -translate-x-1/2 mt-2;

    .triangle {
      @apply transform -rotate-45 -translate-x-1/2 left-1/2;
      top: -4px;
      content: "";
    }
  }
}
</style>
