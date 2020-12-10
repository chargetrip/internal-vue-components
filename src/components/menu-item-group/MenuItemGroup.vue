<template>
  <div
    class="c-menu-item-group"
    :class="[
      `depth-${depth}`,
      { 'show-children': showChildren, 'children-open': childrenIndex !== null }
    ]"
  >
    <MenuItem
      :class="{ 'font-semibold': !children, inset: inset }"
      :style="{ paddingLeft: `${padding}px` }"
      @click.native="onItemClick"
      ref="MenuItem"
      v-if="to || href"
      v-bind="$props"
    />
    <div
      v-else
      class="toggle h-10 flex items-center hover:text-font-primary cursor-pointer mr-3 pr-3 transition duration-300"
      :style="{ paddingLeft: `${padding}px` }"
      @click="$emit('setChildrenIndex', index === childrenIndex ? null : index)"
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
  @Prop() index;
  @Prop() childrenIndex;
  @Prop({ default: 0 }) depth;

  onItemClick() {
    if (!this.depth) {
      this.$emit("setChildrenIndex", null);
    }
  }
  get showChildren() {
    return this.childrenIndex === this.index || this.depth > 0;
  }
}
</script>
<style lang="scss">
.c-menu-item-group {
  .c-menu-item {
    @apply text-current;

    &:hover {
      @apply text-font-primary;
    }

    &.router-link-active,
    &.nuxt-link-active {
      @apply bg-base rounded-r-md mr-3 font-semibold text-font-primary;
    }
  }

  &.depth-0 {
    &.show-children {
      > .toggle {
        @apply bg-base rounded-r-md text-font-primary;

        .icon-chevron-down {
          @apply transform rotate-180;
        }
      }
    }
    &.children-open {
      > .c-menu-item {
        &.router-link-active,
        &.nuxt-link-active {
          @apply bg-transparent text-font-alt3;

          &:hover {
            @apply text-font-primary;
          }
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
      &.router-link-active,
      &.nuxt-link-active {
        @apply text-accent;
      }
    }

    .toggle {
      @apply cursor-default text-font-alt3 opacity-70 h-8;

      .icon-chevron-down {
        @apply hidden;
      }
    }
  }
}
</style>
