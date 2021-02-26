<template>
  <transition :name="`fade-${noAnimation ? 'none' : orientation}`" appear>
    <div
      class="c-tooltip z-5 flex flex-col rounded py-2 px-4 bg-base border border-alt2 shadow-down-sm absolute transform text-14"
      :class="{
        'is-dark': isDark,
        'no-animation': noAnimation,
        left: orientation === 'left',
        top: orientation === 'top',
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
  @Prop() noAnimation;

  @Listen("click") @Watch("$route") @Emit("close") public onClick() {
    return true;
  }
}
</script>

<style lang="scss">
.group {
  .c-tooltip {
    &:not(.no-animation) {
      @apply transition duration-300 ease-out;
    }

    @apply opacity-0 invisible;

    &.bottom {
      @apply translate-y-3;
    }

    &.top {
      --transform-translate-x: -50%;
      --transform-translate-y: calc(-100% - 12px);
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

      &.top {
        @apply -translate-y-full;
      }

      &.bottom {
        @apply translate-y-0;
      }
    }
  }
}

.fade-top-enter-active,
.fade-bottom-enter-active,
.fade-left-enter-active {
  transition: all 0.3s ease-out;
}

.fade-top-enter,
.fade-top-leave-to,
.fade-left-enter,
.fade-left-leave-to,
.fade-bottom-enter,
.fade-bottom-leave-to {
  opacity: 0;
}

.fade-bottom-enter,
.fade-bottom-leave-to {
  transform: translate(-50%, 12px);
}

.fade-top-enter,
.fade-top-leave-to {
  transform: translate(-50%, calc(-100% - 12px));
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

  &.top,
  &.bottom {
    @apply left-1/2 -translate-x-1/2;

    .triangle {
      @apply -translate-x-1/2 left-1/2;
    }
  }

  &.top {
    @apply top-0 -mt-2 -translate-y-full;

    .triangle {
      @apply rotate-135 top-full;
      margin-top: -3px;
    }
  }
  &.bottom {
    @apply top-full mt-2;

    .triangle {
      @apply -rotate-45 -translate-x-1/2 left-1/2;
      top: -5px;
    }
  }
}
</style>
