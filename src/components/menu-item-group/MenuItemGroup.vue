<template>
  <div
    class="c-menu-item-group"
    :class="[`depth-${depth}`, { 'show-children': showChildren }]"
  >
    <MenuItem
      :class="{ 'font-semibold': !children, inset: inset }"
      :style="{ paddingLeft: `${padding}px` }"
      ref="MenuItem"
      v-if="to || href"
      @click.native="showChildren = true"
      v-bind="$props"
    />
    <div
      v-else
      class="toggle h-10 flex items-center text-font-alt3 cursor-pointer mr-3 pr-3"
      :style="{ paddingLeft: `${padding}px` }"
      @click="showChildren = !showChildren"
    >
      <span :class="`icon-${icon}`" class="text-18 mr-3" v-if="icon" />
      {{ title }}
      <span class="icon-chevron-down ml-auto" />
    </div>
    <div
      class="children"
      v-if="children && children.length"
      v-show="showChildren"
    >
      <c-menu-item-group
        :depth="depth + 1"
        :key="c"
        :padding="40"
        :parent="title"
        v-for="(child, c) in children"
        v-bind="child"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import MenuItem from "../menu-item/MenuItem.vue";

@Component({ name: "c-menu-item-group", components: { MenuItem } })
export default class CMenuItemGroup extends Vue {
  @Prop() to;
  @Prop() href;
  @Prop() hash;
  @Prop() soon;
  @Prop() arrow;
  @Prop() title;
  @Prop() icon;
  //
  @Prop({ default: true }) inset;
  @Prop() padding;
  @Prop() path;
  @Prop() children;
  @Prop({ default: 0 }) depth;
  showChildren = this.depth > 0;
}
</script>
<style lang="scss">
.c-menu-item-group {
  .c-menu-item {
    &.router-link-exact-active,
    &.nuxt-link-exact-active {
      @apply bg-base rounded-r-md mr-3 font-semibold;
    }
  }

  &.depth-0 {
    &.show-children {
      > .toggle {
        @apply bg-base rounded-r-md;

        .icon-chevron-down {
          @apply transform rotate-180;
        }
      }
    }
    > .c-menu-item,
    .toggle {
      @apply font-semibold;
    }

    > .children {
      @apply mt-3;

      & > * {
        @apply mb-6;

        &:last-child {
          @apply mb-0;
        }
      }
    }
  }

  &:not(.depth-0) {
    > .c-menu-item {
      &.router-link-exact-active,
      &.nuxt-link-exact-active {
        @apply text-accent;
      }
    }

    .toggle {
      @apply cursor-default text-font-primary opacity-75 h-8;

      .icon-chevron-down {
        @apply hidden;
      }
    }
  }
}
</style>
