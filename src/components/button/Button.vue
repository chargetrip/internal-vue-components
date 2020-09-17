<template functional>
  <button
    class="c-button max-w-full text-white focus:outline-none border border-transparent whitespace-no-wrap leading-none transition-all duration-300 px-4 cursor-pointer rounded-sm flex items-center font-semibold text-14"
    :disabled="props.disabled"
    :class="[
      data.class,
      data.staticClass,
      {
        disabled: props.disabled,
        note: props.color === 'note',
        accent: props.color === 'accent',
        error: props.color === 'error',
        alt: props.color === 'alt',
        base: props.color === 'base',
        body: props.color === 'body',
        xs: props.size === 'xs',
        sm: props.size === 'sm',
        md: props.size === 'md',
        lg: props.size === 'lg'
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
.c-button {
  &[disabled] {
    @apply cursor-not-allowed opacity-50;
  }

  &.note {
    @apply bg-note;

    &:hover {
      @apply bg-note-alt;
    }
  }
  &.base {
    @apply bg-base text-font-primary;

    &:hover {
      @apply bg-accent;
    }
  }
  &.body {
    @apply bg-body border-alt2;
  }

  &.alt {
    @apply bg-alt2 text-font-primary;

    &:hover {
      @apply bg-alt;
    }
  }

  &.accent {
    @apply bg-accent;

    &:hover {
      @apply bg-accent-alt;
    }

    .divider {
      @apply bg-accent-alt;
    }
  }

  &.error {
    @apply bg-error;

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
    @apply h-10;
  }

  &.sm {
    @apply h-8;
  }

  &.lg {
    @apply h-12;
  }
}
</style>
