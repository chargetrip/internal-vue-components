<template functional>
  <div
    class="c-tab max-w-full skeleton text-14 text-font-primary border whitespace-no-wrap select-none leading-none font-semibold transition duration-300 cursor-pointer border-transparent bg-base h-8 px-3 border border-solid border-alt rounded-sm flex items-center justify-center min-w-14 hover:bg-alt hover:border-alt2"
    :class="[
      data.class,
      data.staticClass,
      { active: props.active, lg: props.size === 'lg' }
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
  &[disabled] {
    @apply cursor-not-allowed opacity-50;
  }
  &.lg {
    @apply flex-col items-start h-auto py-3 rounded;

    .title {
      @apply text-20;
    }
  }
  &.active,
  &.active:hover {
    @apply border-accent;
  }
}
</style>
