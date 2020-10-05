<template>
  <component
    class="c-menu-item text-font-alt3 flex items-center group hover:text-font-primary transition duration-300 h-8"
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
    <Tag class="ml-3" type="secondary" v-if="soon" color="font-primary">
      Soon
    </Tag>
    <span
      class="icon-arrow-up-right pl-4 icon-external ml-auto text-18 transition duration-300"
      v-if="bind.target === '_blank'"
    />
  </component>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import Tag from "@/components/tag/Tag.vue";

@Component({ components: { Tag } })
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
        to: this.hash ? `${this.to}#${this.hash}` : this.to,
        target: this.target || "_self",
        hash: this.hash,
        is: "router-link"
      };
    }

    return {
      href: this.href,
      target: this.target || "_blank",
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

  &.router-link-exact-active,
  &.nuxt-link-exact-active {
    @apply text-font-primary;

    .dynamic-icon {
      @apply border-font-primary;
    }
  }
}
</style>
