<template functional>
  <div
    class="action-bar top-0 z-40 py-6"
    :class="[data.class, data.staticClass, { sticky: props.sticky }]"
  >
    <slot />
  </div>
</template>
<style lang="scss">
.action-bar {
  background: var(--sticky-bg);

  &.sticky {
    @apply sticky;
  }
}
</style>
