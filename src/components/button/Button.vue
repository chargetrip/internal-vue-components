<template>
  <component
    class="c-button max-w-full text-white focus:outline-none border border-transparent whitespace-no-wrap transition-all duration-300 px-4 cursor-pointer rounded-sm flex items-center font-semibold text-14"
    :disabled="disabled"
    :is="bind.is"
    v-bind="bind"
    :class="[
      color,
      size,
      {
        disabled: disabled,
        'has-icon': icon
      }
    ]"
  >
    <span class="block truncate mx-auto">
      {{ title }}
      <slot />
    </span>
    <span class="icon ml-3" v-if="icon" :class="`icon-${icon}`" />
  </component>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() title;
  @Prop() color;
  @Prop({ default: "md" }) size;
  @Prop() icon;
  @Prop() disabled;
  @Prop() href;
  @Prop() to;

  get bind() {
    if (this.href) {
      return {
        is: "a",
        target: "_blank",
        href: this.href
      };
    }

    if (this.to) {
      return {
        is: "router-link",
        href: this.to
      };
    }

    return {
      is: "button"
    };
  }
}
</script>
<style lang="scss">
.theme-light {
  .c-button {
    &.alt {
      @apply bg-alt;

      &:hover {
        @apply bg-alt2;
      }
    }
  }
}
.c-button {
  &[disabled] {
    @apply cursor-not-allowed opacity-50;
  }

  &.note {
    @apply bg-note text-white;

    &:hover {
      @apply bg-note-alt;
    }
  }
  &.base {
    @apply bg-base text-font-primary;

    &:hover {
      @apply bg-accent text-white;
    }
  }
  &.body {
    @apply bg-body border-accent text-accent;
  }

  &.alt {
    @apply bg-alt2 text-font-primary;

    &:hover {
      @apply bg-alt;
    }
  }

  &.accent {
    @apply bg-accent text-white;

    &:hover {
      @apply bg-accent-alt;
    }

    .divider {
      @apply bg-accent-alt;
    }
  }

  &.error {
    @apply bg-error text-white;

    &:hover {
      @apply bg-error-alt;
    }

    .divider {
      @apply bg-error-alt;
    }
  }

  &.xs {
    @apply h-5 w-5 p-0;
  }
  &.md {
    @apply h-10 rounded-md;
  }

  &.sm {
    @apply h-8;
  }

  &.lg {
    @apply h-12 rounded;
  }

  &.has-icon {
    @apply pr-3;
  }
}
</style>
