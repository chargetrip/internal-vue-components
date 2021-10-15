<template functional>
  <div
    class="action-bar z-40 pb-4 flex items-center"
    :class="[
      data.class,
      data.staticClass,
      props.color || 'body',
      props.position || 'top',
      { sticky: props.sticky }
    ]"
  >
    <slot />
  </div>
</template>
<style lang="scss">
.action-bar {
  &.top {
    @apply top-0;

    &.body {
      background: var(--sticky-body-to-down-bg);
    }
    &.base {
      background: var(--sticky-base-to-down-bg);
    }

    &.subdued {
      background: var(--sticky-subdued-to-down-bg);
    }
  }

  &.bottom {
    @apply bottom-0;

    &.body {
      background: var(--sticky-body-to-up-bg);
    }
    &.base {
      background: var(--sticky-base-to-up-bg);
    }

    &.subdued {
      background: var(--sticky-subdued-to-up-bg);
    }
  }
  &.sticky {
    @apply py-6;
  }
}
</style>
