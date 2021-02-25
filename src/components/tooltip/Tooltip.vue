<template>
  <transition :name="`fade-${orientation}`" appear>
    <div
      class="c-tooltip z-5 flex flex-col rounded py-2 px-4 bg-base border border-alt2 shadow-down-sm absolute transform text-14"
      :class="{
        'is-dark': isDark,
        left: orientation === 'left',
        bottom: orientation === 'bottom'
      }"
      @click.stop
    >
      <div
        class="triangle w-2 h-2 border-r border-t absolute block bg-base border-alt2 transform"
      />
      <slot />
    </div>
  </transition>
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
  @Prop() isDark;

  @Listen("click") @Watch("$route") @Emit("close") public onClick() {
    return true;
  }
}
</script>

<style lang="scss">
.group {
  .c-tooltip {
    @apply opacity-0 invisible transition duration-300 ease-out;

    &.bottom {
      @apply translate-y-3;
    }

    &.left {
      --transform-translate-x: calc(-100% - 12px);
    }
  }
  &:hover {
    .c-tooltip {
      @apply visible opacity-100;

      &.left {
        @apply -translate-x-full;
      }

      &.bottom {
        @apply translate-y-0;
      }
    }
  }
}

.fade-bottom-enter-active,
.fade-left-enter-active {
  transition: all 0.3s ease-out;
}

.fade-left-enter,
.fade-bottom-enter,
.fade-bottom-leave-to,
.fade-left-leave-to {
  opacity: 0;
}

.fade-bottom-enter,
.fade-bottom-leave-to {
  transform: translate(-50%, 12px);
}

.fade-left-enter,
.fade-left-leave-to {
  transform: translateX(calc(-100% - 12px));
}

.c-tooltip {
  &.is-dark,
  &.is-dark .triangle {
    @apply bg-font-primary text-body border-font-alt;
  }
  &.left {
    @apply top-0 -mt-2 -ml-2 left-0 -translate-x-full;

    .triangle {
      @apply rotate-45 mt-3 translate-x-full border-alt2;
      right: 3px;
      top: -2px;
    }
  }

  &.bottom {
    @apply top-full left-1/2 -translate-x-1/2 mt-2;

    .triangle {
      @apply -rotate-45 -translate-x-1/2 left-1/2;
      top: -5px;
    }
  }
}
</style>
