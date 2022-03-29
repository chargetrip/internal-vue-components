<template>
  <component
    class="c-button max-w-full text-font-primary focus:outline-none border border-transparent whitespace-no-wrap transition-all duration-300 px-4 cursor-pointer rounded-sm flex items-center font-semibold text-14"
    :disabled="disabled"
    :is="bind.is"
    v-on="onEvent"
    v-bind="bind"
    :class="[
      type,
      size,
      {
        skeleton: hasSkeleton,
        square: !hasTitle && icon,
        disabled: disabled,
        'has-icon': icon,
        outline: outline
      }
    ]"
  >
    <template v-if="!isLoading">
      <span class="block truncate mx-auto" v-if="hasTitle">
        {{ title }}
        <slot />
      </span>
      <Icon
        class="icon ml-3"
        v-if="icon"
        :name="icon"
        :class="[{ 'last:mx-auto': !hasTitle }]"
      />
    </template>
    <svg class="mx-auto progress w-4 animate-spin" viewBox="0 0 120 120" v-else>
      <circle cx="60" cy="60" r="54" stroke-width="12" stroke="white" />
    </svg>
  </component>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { openChat } from "@/utilities/utilities";
import { RawLocation } from "vue-router";
import Icon from "@/components/icon/Icon.vue";

@Component({
  components: { Icon },
  methods: {
    openChat
  }
})
export default class Button extends Vue {
  @Prop() title!: string;
  @Prop() isLoading!: boolean;
  @Prop() type!: string;
  @Prop({ default: "md" }) size!: string;
  @Prop() icon!: string;
  @Prop() disabled!: boolean;
  @Prop() href!: string;
  @Prop() to!: RawLocation;
  @Prop() outline!: boolean;
  @Prop({ default: false }) shouldOpenChat!: boolean;
  @Prop({ default: true }) hasSkeleton!: boolean;

  get hasTitle() {
    return this.title || this.$slots.default;
  }

  get onEvent() {
    if (this.shouldOpenChat) {
      return {
        ...this.$listeners,
        click: openChat
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
.c-button {
  @apply outline-none;

  &[disabled] {
    @apply cursor-not-allowed opacity-50;
  }

  &.primary {
    @apply bg-accent;

    &:hover {
      @apply bg-accent-alt;
    }

    &:active {
      @apply bg-accent-alt2;
    }

    &.outline {
      @apply border-accent;

      &:hover {
        @apply border-accent-alt;
      }

      &:active {
        @apply border-accent-alt2;
      }
    }
  }

  &.secondary {
    @apply bg-base;

    &:hover {
      @apply bg-alt;
    }

    &:active {
      @apply bg-subdued;
    }

    &.outline {
      @apply border-alt4;

      &:hover {
        @apply border-alt3;
      }

      &:active {
        @apply border-alt2;
      }
    }
  }

  &.primary,
  &.note,
  &.error {
    @apply text-white;
  }

  &.note {
    @apply bg-note;

    &:hover {
      @apply bg-note-alt;
    }

    &:active {
      @apply bg-note-alt2;
    }

    &.outline {
      @apply border-note;

      &:hover {
        @apply border-note-alt;
      }

      &:active {
        @apply border-note-alt2;
      }
    }
  }

  &.error {
    @apply bg-error;

    &:hover {
      @apply bg-error-alt;
    }

    &:active {
      @apply bg-error-alt2;
    }

    &.outline {
      @apply border-error;

      &:hover {
        @apply border-error-alt;
      }

      &:active {
        @apply border-error-alt2;
      }
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
    @apply h-8 text-14 px-3;

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

  &.outline {
    @apply border;
    @apply bg-transparent #{!important};
  }

  &.square {
    @apply px-0;
  }

  svg circle {
    fill: none;
    stroke-dasharray: 339.292;
    stroke-dashoffset: 88.2159;
    stroke-linecap: round;
  }
}
</style>
