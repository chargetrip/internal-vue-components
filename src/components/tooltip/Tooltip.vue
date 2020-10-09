<template>
  <div
    class="c-tooltip z-5  0 flex flex-col rounded p-4 bg-base border top-0 -mt-2 left-0 border-alt2 shadow-down-s absolute -ml-2 transform -translate-x-full"
    @click.stop
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Watch } from "vue-property-decorator";
import Base from "@/mixins/base";
import { Listen } from "@/utilities/decorators";

@Component({
  components: {}
})
export default class CTooltip extends Mixins(Base) {
  @Listen("click") @Watch("$route") @Emit("close") public onClick() {
    return true;
  }
}
</script>

<style lang="scss">
.c-tooltip {
  &:after {
    @apply w-2 h-2 transform rotate-45 border-r border-t absolute block mt-3 translate-x-full border-alt2 bg-base;
    right: 3px;
    top: -2px;
    content: "";
  }
}
</style>
