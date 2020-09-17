<template functional>
  <div
    class="c-tag flex max-w-full items-center justify-center rounded-2xs h-6 px-2 text-font-primary text-14 font-semibold"
    :class="[
      data.class,
      data.staticClass,
      { alt: props.color === 'alt', alt2: props.color === 'alt2' }
    ]"
  >
    <div class="truncate">
      {{ props.title }}
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.c-tag {
  &.alt {
    @apply bg-alt;
  }
  &.alt2 {
    @apply bg-alt2;
  }
}
</style>
