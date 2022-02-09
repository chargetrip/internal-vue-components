<template functional>
  <div
    class="c-tab max-w-full text-14 whitespace-no-wrap select-none leading-none font-semibold transition duration-300 cursor-pointer h-8 px-3 rounded-sm flex items-center justify-center min-w-14"
    :class="[
      data.class,
      data.staticClass,
      {
        warning: props.warning,
        active: props.active,
        lg: props.size === 'lg',
        skeleton: props.skeleton !== false
      }
    ]"
    :disabled="props.disabled"
    v-on="data.on"
  >
    <span class="title block truncate" v-if="props.title">
      {{ props.title }}
    </span>
    <span class="sub-title text-font-alt3" v-if="props.subTitle">
      {{ props.subTitle }}
    </span>
    <slot />
    <span class="icon" :class="`icon-${props.icon}`" v-if="props.icon" />
  </div>
</template>
<style lang="scss">
.c-tab {
  @apply bg-base border border-transparent;

  &:hover {
    @apply bg-alt;
  }

  &.active {
    @apply border-accent;
  }

  &[disabled] {
    @apply cursor-not-allowed opacity-50 border-transparent #{!important};
  }
  &.lg {
    @apply flex-col items-start h-auto py-2 rounded;

    .title {
      @apply text-22;
    }
  }
  &.active {
    @apply border-accent text-font-primary;
  }
}
</style>
