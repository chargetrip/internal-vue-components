<template functional>
  <button
    class="c-button max-w-full text-white focus:outline-none border border-transparent whitespace-no-wrap transition-all duration-300 px-4 cursor-pointer rounded-sm flex items-center font-semibold text-14"
    :disabled="props.disabled"
    :class="[
      data.class,
      data.staticClass,
      props.color,
      props.size,
      {
        disabled: props.disabled,
        'has-icon': props.icon
      }
    ]"
    v-on="data.on"
  >
    <span class="block truncate mx-auto">
      {{ props.title }}
      <slot />
    </span>
    <span class="icon ml-3" v-if="props.icon" :class="`icon-${props.icon}`" />
  </button>
</template>
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
