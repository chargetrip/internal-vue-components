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
        class="item flex items-center justify-center sm:justify-start relative group transition duration-300 ease-out"
        v-for="(item, key) in normalizedItems"
        :class="{ active: item.isActive, 'has-sub-menus': item.subMenus }"
        :key="key"
      >
        <MenuItem v-bind="item" />
        <div class="icon icon-chevron-down ml-2" v-if="item.subMenus" />
        <SubMenu v-if="item.subMenus" :menus="item.subMenus" />
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import MenuItem from "../menu-item/MenuItem.vue";
import SubMenu from "../sub-menu/SubMenu.vue";

@Component({ components: { SubMenu, MenuItem } })
export default class Menu extends Vue {
  @Prop() title;
  @Prop() items;
  @Prop({ default: "row" }) direction;
  @Prop({ default: 3 }) gap;

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
}
</script>
<style lang="scss">
.c-menu {
  &.has-sub-menu {
    .item {
      @apply h-8 rounded-sm border border-transparent px-3;

      &.active > .icon,
      &.active > .c-menu-item {
        @apply text-font-primary;
      }

      &.has-sub-menus {
        &:hover {
          @apply border-alt;
        }
      }
    }
  }
}
</style>
