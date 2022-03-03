<template>
  <transition :name="`fade-${noAnimation ? 'none' : orientation}`" appear>
    <div
      class="c-tooltip z-5 flex flex-col rounded p-3 bg-subdued absolute transform text-14"
      :class="{
        'is-dark': isDark,
        'no-animation': noAnimation,
        left: orientation === 'left',
        top: orientation === 'top',
        right: orientation === 'right',
        bottom: orientation === 'bottom'
      }"
      @click.stop
    >
      <div class="triangle w-2 h-2 absolute block bg-subdued transform" />
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
      --tw-translate-x: -50%;
      --tw-translate-y: calc(-100% - 12px);
    }

    &.left {
      --tw-translate-x: calc(-100% - 12px);
    }

    &.right {
      @apply right-0 left-auto;

      --tw-translate-x: calc(100% + 12px);
    }
  }
  &:hover {
    .c-tooltip {
      @apply visible opacity-100;

      &.left {
        @apply -translate-x-full;
      }

      &.right {
        @apply translate-x-full;
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
.fade-right-enter-active,
.fade-left-enter-active {
  transition: all 0.3s ease-out;
}

.fade-top-enter,
.fade-top-leave-to,
.fade-left-enter,
.fade-left-leave-to,
.fade-right-enter,
.fade-right-leave-to,
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

.fade-right-enter,
.fade-right-leave-to {
  transform: translateX(calc(100% + 12px));
}

.c-tooltip {
  box-shadow: 0px 2px 3px rgba(10, 12, 30, 0.08),
    0px 6px 24px rgba(11, 17, 34, 0.08);
  &.is-dark,
  &.is-dark .triangle {
    background: #202024;
    color: #9ca7b2;

    p {
      color: #9ca7b2;
    }

    strong {
      color: #ffffff;
    }
  }

  .triangle {
    border-top-right-radius: 2px;
  }

  &.left,
  &.right {
    @apply top-0 -mt-3;

    .triangle {
      @apply mt-5 top-0;
    }
  }

  &.left {
    @apply -ml-2 left-0 -translate-x-full;

    .triangle {
      @apply rotate-45 translate-x-full;
      right: 4px;
    }
  }

  &.right {
    @apply -mr-2 left-auto top-0 right-0 translate-x-full;

    .triangle {
      --tw-rotate: -135deg;
      left: -5px;
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
      margin-top: -4px;
    }
  }
  &.bottom {
    @apply top-full mt-2;

    .triangle {
      @apply -rotate-45 -translate-x-1/2 left-1/2;
      top: -4px;
    }
  }
}
</style>
