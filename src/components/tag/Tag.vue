<template functional>
  <div
    class="c-tag flex max-w-full items-center justify-center rounded-2xs h-6 px-2 text-font-primary text-12 font-semibold"
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
    @apply rounded-xl;
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
