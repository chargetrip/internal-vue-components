<template functional>
  <component
    class="c-menu-item text-font-alt3 font-semibold flex items-center group hover:text-font-primary transition duration-300 h-12 px-4"
    @click="$emit('click', $event)"
    :class="[data.class, data.staticClass, { soon: props.soon }]"
    :to="props.to"
    :is="props.to ? 'router-link' : 'a'"
  >
    <span
      :class="`icon-${props.icon}`"
      class="icon mr-3 text-18"
      v-if="props.icon"
    ></span>
    <span class="title">
      {{ props.title }}
      <slot />
    </span>
    <span
      class="ml-3 text-12 font-bold flex items-center bg-font-primary text-body rounded-sm h-5 px-1"
      v-if="props.soon"
    >
      Soon
    </span>
    <span
      class="icon-arrow-up-right pl-4 icon-external ml-auto text-18 transition duration-300"
      v-if="props.target === '_blank'"
    />
  </component>
</template>

<style lang="scss">
.c-menu-item {
  &:not(:hover) {
    .icon-external {
      @apply opacity-0;
    }
  }
  &.soon {
    @apply pointer-events-none;

    .icon,
    .title {
      @apply opacity-60;
    }
  }

  &.router-link-active {
    @apply text-font-primary;

    .dynamic-icon {
      @apply border-font-primary;
    }
  }
}
</style>
