<template>
  <div
    class="c-recursive-menu overflow-hidden"
    :class="[
      `depth-${depth}`,
      {
        'has-children': children && children.length,
        'show-children': showChildren,
        'has-icon': icon,
        'children-open': children && children.length && childrenIndex !== null,
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
      ref="toggleEl"
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
    <div class="children" ref="childrenEl" v-if="children && children.length">
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
import { Vue, Prop, Component, Watch, Ref } from "vue-property-decorator";
import RecursiveMenuItem from "../recursive-menu-item/RecursiveMenuItem.vue";
import MenuItem from "../menu-item/MenuItem.vue";
import anime from "animejs/lib/anime.es.js";

@Component({
  name: "c-recursive-menu",
  components: { RecursiveMenuItem, MenuItem }
})
export default class CMenuItemGroup extends Vue {
  @Ref("toggleEl") toggleEl;
  @Ref("childrenEl") childrenEl;
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
  @Prop() previousChildrenIndex;
  @Prop({ default: 0 }) depth;
  animation = {
    height: 40,
    translateY: 0
  };

  mounted() {
    this.onChildrenIndexChange();
  }

  onItemClick() {
    if (!this.depth) {
      this.$emit("setChildrenIndex", null);
    }
  }

  get isActive() {
    return this.childrenIndex === this.index;
  }

  get showChildren() {
    return this.isActive || this.depth > 0;
  }

  get childActive() {
    return this.$route.path.includes(this.fullPath);
  }

  @Watch("childrenIndex") onChildrenIndexChange() {
    if (!this.toggleEl || !this.childrenEl || this.depth !== 0) return;

    if (this.isActive) {
      this.animate(
        { height: this.childrenEl.offsetHeight + this.toggleEl.offsetHeight },
        { opacity: 1, translateY: 0 }
      );
    } else if (this.previousChildrenIndex === this.index) {
      this.animate({ height: 40 }, { opacity: 0, translateY: -24 });
    }
  }

  animate(elValue, childrenValue) {
    anime({
      targets: this.$el,
      easing: "easeOutCubic",
      duration: 300,
      ...elValue
    });
    anime({
      targets: this.childrenEl,
      easing: "easeOutCubic",
      duration: 300,
      ...childrenValue
    });
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
.c-recursive-menu {
  will-change: opacity, transform, height;

  &:not(.show-children) {
    @apply h-8;

    &.has-icon {
      @apply h-10;
    }

    .children {
      @apply pointer-events-none;
    }
  }
  .c-menu-item {
    @apply text-current mr-3 pr-3;

    &:hover {
      @apply text-font-primary;
    }

    &[href="/"] {
      &.router-link-exact-active,
      &.active,
      &.nuxt-link-exact-active {
        @apply text-font-primary;
      }
    }
    &:not([href="/"]) {
      &.router-link-active,
      &.active,
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
      @screen lg-max {
        @apply mb-0;
      }

      > * {
        &.has-children {
          @apply pb-6 pt-2;
        }
      }
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
