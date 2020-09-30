<template>
  <component
    class="c-menu-item text-font-alt3 flex items-center group hover:text-font-primary transition duration-300 px-4 h-8"
    @click="$emit('click', $event)"
    :class="{ soon: soon, 'has-icon': icon }"
    v-bind="bind"
    :is="bind.is"
  >
    <span :class="`icon-${icon}`" class="icon mr-3 text-18" v-if="icon"></span>
    <span class="title" v-if="title || $slots.default">
      {{ title }}
      <slot />
    </span>
    <span
      class="soon ml-3 text-12 font-bold flex items-center bg-font-primary text-body rounded-sm h-5 px-1"
      v-if="soon"
    >
      Soon
    </span>
    <span
      class="icon-arrow-up-right pl-4 icon-external ml-auto text-18 transition duration-300"
      v-if="bind.target === '_blank'"
    />
  </component>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class CMenuItem extends Vue {
  @Prop() to;
  @Prop() href;
  @Prop() target;
  @Prop() hash;
  @Prop() soon;
  @Prop() title;
  @Prop() icon;

  get bind() {
    if (this.to) {
      return {
        to: this.to,
        target: this.target || "_self",
        hash: this.hash,
        is: "router-link"
      };
    }

    return {
      href: this.href,
      target: this.target || "_blank",
      hash: this.hash,
      is: "a"
    };
  }
}
</script>
<style lang="scss">
.c-menu-item {
  &.has-icon {
    @apply h-12;
  }
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
