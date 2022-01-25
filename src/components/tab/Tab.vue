<template functional>
  <div
    class="c-tab max-w-full text-14 text-font-primary border border-transparent whitespace-no-wrap select-none leading-none font-semibold transition duration-300 cursor-pointer h-8 px-3 rounded-sm flex items-center justify-center min-w-14"
    :class="[
      data.class,
      data.staticClass,
      props.color || 'base',
      {
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
  &.base {
    @apply bg-base;

    &:hover {
      @apply hover:bg-alt;
    }
  }
  &.body {
    @apply bg-body text-font-alt3;

    &:hover {
      @apply text-font-primary;
    }
  }
  &[disabled] {
    @apply cursor-not-allowed opacity-50;
  }
  &.lg {
    @apply flex-col items-start h-auto py-3 rounded;

    .title {
      @apply text-20;
    }
  }
  &.active {
    @apply border-accent;
  }
}
</style>
