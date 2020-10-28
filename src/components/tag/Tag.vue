<template functional>
  <div
    class="c-tag flex max-w-full items-center justify-center rounded-2xs h-6 px-2 text-font-primary text-14 font-semibold"
    :class="[data.class, data.staticClass, props.color, props.type]"
  >
    <div class="truncate">
      {{ props.title }}
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.c-tag {
  &.secondary {
    @apply rounded-xl text-12 h-auto h-5;
  }

  &.accent {
    @apply bg-accent text-white;
  }

  &.error {
    @apply bg-error text-white;
  }

  &.warning {
    @apply bg-warning text-white;
  }

  &.note {
    @apply bg-note text-white;
  }
  &.alt {
    @apply bg-alt;
  }
  &.font-primary {
    @apply bg-font-primary text-body;
  }
  &.alt2 {
    @apply bg-alt2;
  }
}
</style>
