<template>
  <component
    class="c-button max-w-full text-white focus:outline-none border border-transparent whitespace-no-wrap transition-all duration-300 px-4 cursor-pointer rounded-sm flex items-center font-semibold text-14"
    :disabled="disabled"
    :is="bind.is"
    v-on="onEvent"
    v-bind="bind"
    :class="[
      color,
      size,
      {
        skeleton: hasSkeleton,
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
import { openSmallchat } from "@/utilities/utilities";
import { Location, RawLocation } from "vue-router";

@Component({
  methods: {
    openSmallchat
  }
})
export default class Button extends Vue {
  @Prop() title!: string;
  @Prop() color!: string;
  @Prop({ default: "md" }) size!: string;
  @Prop({ default: true }) hasSkeleton!: boolean;
  @Prop() icon!: string;
  @Prop() disabled!: boolean;
  @Prop() href!: string;
  @Prop() to!: RawLocation;
  @Prop() transparent!: boolean;
  @Prop({ default: false }) shouldOpenChat!: boolean;

  get hasTitle() {
    return this.title || this.$slots.default;
  }

  get onEvent() {
    if (this.shouldOpenChat) {
      return {
        ...this.$listeners,
        click: openSmallchat
      };
    }

    return {
      ...this.$listeners
    };
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
    &.body-alt {
      @apply bg-font-primary text-subdued;

      &.transparent {
        @apply bg-subdued text-font-primary border-font-primary;

        &:hover {
          @apply bg-font-primary text-subdued;
        }
      }
    }

    &.alt {
      @apply bg-alt;

      &:hover {
        @apply bg-alt2;
      }
      &.transparent {
        @apply bg-transparent border;

        &:hover {
          @apply bg-alt;
        }
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
  &.subdued {
    @apply bg-subdued text-font-primary border-alt;
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
      @apply border-accent text-accent;

      &:hover {
        @apply text-white border-accent-alt;
      }
    }
  }

  &.body-alt {
    @apply bg-white text-black;

    &.transparent {
      @apply border-white text-font-primary;

      &:hover {
        @apply bg-white;
        color: #0c0c0f;
      }
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
    @apply h-10 rounded-md text-16;

    &.square {
      @apply w-10;
    }
  }

  &.sm {
    @apply h-8 text-14;

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
