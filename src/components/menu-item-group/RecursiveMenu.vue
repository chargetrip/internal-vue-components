<template>
  <div
    class="c-recursive-menu"
    :class="[
      `depth-${depth}`,
      {
        'show-children': showChildren,
        'children-open': childrenIndex !== null,
        'child-active': childActive
      }
    ]"
  >
    <RecursiveMenuItem
      :class="{ 'font-semibold': !children, inset: inset }"
      class="h-8 px-6"
      :style="{ paddingLeft: `${padding}px` }"
      @click.native="onItemClick"
      ref="MenuItem"
      v-if="to || href"
      v-bind="$props"
      :title="title"
      :icon="normalizedIcon"
    />
    <div
      v-else
      class="toggle h-10 flex items-center cursor-pointer mr-3 pr-3 transition duration-300"
      :style="{ paddingLeft: `${padding}px` }"
      @click="$emit('setChildrenIndex', index === childrenIndex ? null : index)"
    >
      <span
        :class="`icon-${normalizedIcon}`"
        class="icon text-18 mr-3"
        v-if="icon"
      />
      {{ title }}
      <span class="icon-chevron-down ml-auto" />
    </div>
    <div
      class="children"
      v-if="children && children.length"
      v-show="showChildren"
    >
      <c-recursive-menu
        :depth="depth + 1"
        :key="c"
        :padding="54"
        :parent="title"
        v-for="(child, c) in children"
        v-bind="child"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import RecursiveMenuItem from "../recursive-menu-item/RecursiveMenuItem.vue";
import MenuItem from "../menu-item/MenuItem.vue";

@Component({
  name: "c-recursive-menu",
  components: { RecursiveMenuItem, MenuItem }
})
export default class CMenuItemGroup extends Vue {
  @Prop() to;
  @Prop() href;
  @Prop() hash;
  @Prop() soon;
  @Prop() arrow;
  @Prop() title;
  @Prop() icon;
  @Prop() fullPath;
  @Prop() callback;
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

  get childActive() {
    return this.$route.path.includes(this.fullPath);
  }

  get normalizedIcon() {
    if (!this.icon) return null;

    if (this.to === "/") {
      return this.$route.path === "/" ? `filled-${this.icon}` : this.icon;
    }
    return this.$route.path.includes(this.fullPath || this.to)
      ? `filled-${this.icon}`
      : this.icon;
  }
}
</script>
<style lang="scss">
.c-menu-item-group {
  .c-menu-item {
    @apply text-current mr-3 pr-3;

    &:hover {
      @apply text-font-primary;
    }

    &[href="/"] {
      &.router-link-exact-active,
      &.nuxt-link-exact-active {
        @apply text-font-primary;
      }
    }
    &:not([href="/"]) {
      &.router-link-active,
      &.nuxt-link-active {
        @apply text-font-primary;
      }
    }
  }

  &.depth-0 {
    &:hover,
    &.show-children,
    &.child-active {
      > .toggle {
        @apply text-font-primary;
      }
    }

    &.show-children {
      > .toggle {
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
      @apply my-3;
    }
  }

  &:not(.depth-0) {
    > .c-menu-item {
      &.router-link-active,
      &.nuxt-link-active {
        @apply text-accent font-semibold;
      }
    }

    .toggle {
      @apply cursor-default h-8 text-font-primary;

      .icon-chevron-down {
        @apply hidden;
      }
    }
  }
}
</style>
