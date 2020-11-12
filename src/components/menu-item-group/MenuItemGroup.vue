<template>
  <div
    class="c-menu-item-group font-semibold"
    :class="[`depth-${depth}`, { 'hide-children': hideChildren }]"
  >
    <div
      class="parent hidden xl2:block px-6 mb-6 text-font-primary"
      v-if="showParent"
    >
      {{ parent }}
    </div>
    <router-link
      to="/"
      class="back hidden mb-6 cursor-pointer text-font-alt3 lg:flex items-center"
      v-if="showBack"
      @click="$emit('back')"
    >
      <span class="icon-chevron-left text-16 mr-3" />
      <div>
        Home / <span class="text-font-primary ml-1">{{ parent }}</span>
      </div>
    </router-link>
    <MenuItem
      :class="{ 'font-semibold': !children }"
      v-if="to"
      ref="MenuItem"
      @click.native="onItemClick"
      v-bind="$props"
    />
    <div
      v-else
      class="group h-8 flex items-center"
      :class="{
        'uppercase text-font-primary tracking-wide text-12': isEven,
        'text-font-alt3 cursor-pointer': !isEven
      }"
      @click="onClick"
    >
      {{ title }}
      <span class="icon-chevron-right ml-auto text-16" v-if="!isEven" />
    </div>
    <div
      class="children hidden"
      v-if="children && children.length"
      :class="{ overlay: depth === 1, active: showNextLevel || forceNextLevel }"
    >
      <c-menu-item-group
        :show-next-level="!isEven"
        :depth="depth + 1"
        :show-back="depth === 1 && !c"
        :show-parent="depth === 3 && !c"
        :class="{ 'mb-8 last:mb-0': depth === 1 }"
        :key="c"
        @closeMenu="$emit('closeMenu')"
        :parent="title"
        v-for="(child, c) in children"
        v-bind="child"
        @back="forceNextLevel = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch } from "vue-property-decorator";
import MenuItem from "../menu-item/MenuItem.vue";

@Component({ name: "c-menu-item-group", components: { MenuItem } })
export default class CMenuItemGroup extends Vue {
  @Prop() to;
  @Prop() hash;
  @Prop() soon;
  @Prop() arrow;
  @Prop() title;
  @Prop() icon;
  //
  @Prop() hideChildren;
  @Prop() showBack;
  @Prop() showParent;
  @Prop() path;
  @Prop() callback;
  @Prop() children;
  @Prop() parent;
  @Prop({ default: 0 }) depth;
  @Prop() showNextLevel;
  forceNextLevel = this.getForceNextLevel();

  getForceNextLevel() {
    const p: string[] = this.$route?.path?.split("/") || [];

    return p[2] ? this.path === p[2] : false;
  }

  @Watch("$route") onRouteChange() {
    this.forceNextLevel = this.getForceNextLevel();
  }

  get isEven() {
    return this.depth % 2 === 0;
  }

  onClick() {
    if (this.to) return;

    if (
      this.depth === 1 &&
      this.children?.length &&
      window.innerWidth >= 1024
    ) {
      let firstChild = this.children[0];

      while (!firstChild.to) {
        firstChild = firstChild.children[0];
      }
      this.$router?.push(firstChild.to);
    }

    if (!this.isEven) {
      this.forceNextLevel = true;
    }
  }

  onItemClick() {
    if (this.callback) {
      this.callback(this.$props);
    }
    this.$emit("closeMenu");
  }
}
</script>
<style lang="scss">
.c-menu-item-group {
  &.hide-children {
    .children,
    .children.active {
      @apply hidden;

      @screen xl2 {
        top: -86px;
        padding-top: 92px !important;
        height: calc(100vh - 35px);
        @apply absolute block w-full left-full ml-1 border-r border-alt bg-body;

        .c-menu-item {
          @apply px-6;
        }
      }
    }
  }
  .children {
    &.active {
      @apply block;
    }
  }

  &:not(.hide-children) {
    .c-menu-item {
      &.router-link-active,
      &.nuxt-link-active {
        @apply text-font-primary;

        & + .children {
          display: block;

          @screen xl2 {
            top: -86px;
            padding-top: 86px;
            height: calc(100vh - 35px);
            @apply absolute w-full left-full bg-body ml-1 border-r border-alt;

            .c-menu-item {
              @apply pr-6;
            }
          }

          .c-menu-item {
            @apply font-normal pl-6;
          }
        }
      }
    }
  }

  .overlay {
    @apply absolute top-0 left-0 w-full h-full bg-body px-6;

    > .children {
      > .c-menu-item-group {
        > .c-menu-item {
          @apply font-semibold;
        }
      }
    }
  }

  @screen lg-max {
    &.depth-0,
    &.depth-1 {
      @apply m-0;

      > .c-menu-item,
      > .group {
        @apply hidden;
      }

      .overlay {
        @apply relative h-auto px-0;
      }
    }
  }
}
</style>
