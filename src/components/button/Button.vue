<template>
  <component
    class="c-button max-w-full skeleton text-white focus:outline-none border border-transparent whitespace-no-wrap transition-all duration-300 px-4 cursor-pointer rounded-sm flex items-center font-semibold text-14"
    :disabled="disabled"
    :is="bind.is"
    v-bind="bind"
    :class="[
      color,
      size,
      {
        square: !hasTitle && icon,
        disabled: disabled,
        'has-icon': icon,
        transparent: transparent
      }
    ]"
  >
    <span class="block truncate mx-auto" v-if="hasTitle">
      {{ title }}
      <slot />
    </span>
    <span
      class="icon ml-3"
      v-if="icon"
      :class="[{ 'last:mx-auto': !hasTitle }, `icon-${icon}`]"
    />
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
  @Prop() transparent;

  get hasTitle() {
    return this.title || this.$slots.default;
  }
  get bind() {
    if (this.href) {
      return {
        is: "a",
        target: "_blank",
        rel: "noopener",
        href: this.href
      };
    }

    if (this.to) {
      return {
        is: "router-link",
        to: this.to
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

    &.transparent {
      @apply border-note;
    }
  }
  &.base {
    @apply bg-base text-font-primary;

    &:hover {
      @apply bg-accent text-white;
    }

    &.transparent {
      @apply border-base;
    }
  }

  &.body {
    @apply bg-body border-accent text-accent;

    &.transparent {
      @apply border-body;
    }
  }

  &.alt {
    @apply bg-alt text-font-primary;

    &:hover {
      @apply bg-alt2;
    }

    &.transparent {
      @apply border-alt;
    }
  }

  &.alt2 {
    @apply bg-alt2 text-font-primary;

    &:hover {
      @apply bg-alt;
    }

    &.transparent {
      @apply border-alt2;
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

    &.transparent {
      @apply border-accent;
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

    &.transparent {
      @apply border-error;
    }
  }

  &.xs {
    @apply h-6 px-2 rounded-sm;

    &.square {
      @apply w-6;
    }
  }

  &.md {
    @apply h-10 rounded-md;

    &.square {
      @apply w-10;
    }
  }

  &.sm {
    @apply h-8;

    &.square {
      @apply w-8;
    }
  }

  &.lg {
    @apply h-12 rounded;

    &.square {
      @apply w-12;
    }
  }

  &.has-icon {
    @apply pr-3;
  }

  &.transparent {
    @apply bg-transparent border;
  }

  &.square {
    @apply px-0;
  }
}
</style>
