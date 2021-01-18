<template>
  <div
    class="c-tooltip z-5 flex flex-col rounded py-2 px-4 bg-base border border-alt2 shadow-down-sm absolute"
    :class="{ left: orientation === 'left', bottom: orientation === 'bottom' }"
    @click.stop
  >
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

    &:after {
      @apply w-2 h-2 transform rotate-45 border-r border-t absolute block mt-3 translate-x-full border-alt2 bg-base;
      right: 3px;
      top: -2px;
      content: "";
    }
  }

  &.bottom {
    @apply top-full left-1/2 transform -translate-x-1/2 mt-2;

    &:after {
      @apply w-2 h-2 transform -rotate-45 border-r border-t absolute block -translate-x-1/2 left-1/2 border-alt2 bg-base top-0;
      top: -4px;
      content: "";
    }
  }
}
</style>
