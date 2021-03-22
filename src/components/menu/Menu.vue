<template>
  <div
    class="c-menu w-full sm:w-1/3 md:w-auto mt-12 sm:mt-6 md:mt-0"
    :class="{ 'has-sub-menu': hasSubMenu }"
  >
    <strong v-if="title" class="mb-4 block text-16 text-center sm:text-left">
      {{ title }}
    </strong>
    <nav
      class="text-font-alt3 flex text-14"
      :class="{
        'flex-row': direction === 'row',
        'flex-col': direction === 'column',
        'gap-2': gap === 2,
        'gap-3': gap === 3,
        'gap-6': gap === 6,
        'gap-8': gap === 8,
        'gap-10': gap === 10
      }"
    >
      <div
        class="item justify-center h-16 flex items-center sm:justify-start relative group"
        v-for="(item, key) in normalizedItems"
        :class="{
          'show-sub-menu': subMenuIndex === key,
          active: item.isActive,
          'has-sub-menus': item.subMenus
        }"
        @click="subMenuIndex = key"
        @mouseenter="onMouseEnter(key)"
        @mouseleave="onMouseLeave"
        :key="key"
      >
        <div
          class="menu-item-wrapper flex flex-1 w-full items-center transition duration-300 ease-out"
        >
          <MenuItem v-bind="item" />
          <div
            class="icon icon-chevron-down pl-2 ml-auto"
            v-if="item.subMenus"
          />
        </div>
        <SubMenu v-if="item.subMenus" :menus="item.subMenus" />
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import MenuItem from "../menu-item/MenuItem.vue";
import SubMenu from "../sub-menu/SubMenu.vue";

@Component({ components: { SubMenu, MenuItem } })
export default class Menu extends Vue {
  @Prop() title;
  @Prop() items;
  @Prop({ default: "row" }) direction;
  @Prop({ default: 3 }) gap;
  subMenuIndex = null;

  get hasSubMenu() {
    return this.items.some(item => item.subMenus);
  }

  get normalizedItems() {
    return this.items.map(item => ({
      ...item,
      isActive: item?.subMenus?.some(menu =>
        menu.items.some(item => item.isLinkActive)
      )
    }));
  }

  onMouseEnter(index) {
    if (window.innerWidth >= 1024) {
      this.subMenuIndex = index;
    }
  }

  onMouseLeave() {
    if (window.innerWidth >= 1024) {
      this.subMenuIndex = null;
    }
  }

  @Watch("$route") onRouteChange() {
    this.subMenuIndex = null;
  }
}
</script>
<style lang="scss">
.c-menu {
  .menu-item-wrapper > .c-menu-item {
    @apply cursor-default;
  }
  &.has-sub-menu {
    .menu-item-wrapper {
      @apply h-8 rounded-sm border border-transparent px-3;

      &.active > .icon,
      &.active > .c-menu-item {
        @apply text-font-primary;
      }
    }
    .item.has-sub-menus.show-sub-menu {
      .menu-item-wrapper {
        @apply border-alt;
      }
    }
  }
}
</style>
