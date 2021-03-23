<template>
  <div class="c-menu" :class="{ 'has-sub-menu': hasSubMenu }">
    <strong v-if="title" class="mb-4 block text-16">
      {{ title }}
    </strong>
    <nav
      class="text-font-alt3 flex text-14"
      :class="{
        'flex-row': direction === 'row',
        'flex-col': direction === 'column'
      }"
    >
      <div
        class="item justify-center flex items-center sm:justify-start relative group"
        v-for="(item, key) in normalizedItems"
        :class="[
          direction === 'row' ? `last:mr-0 mr-${gap}` : `last:mb-0 mb-${gap}`,
          {
            'is-in-index': item.isInIndex,
            active: item.isActive,
            'has-sub-menus': item.subMenus
          }
        ]"
        @click="toggle(key)"
        @mouseenter="onMouseEnter(key)"
        @mouseleave="onMouseLeave(key)"
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
  indices = new Set();

  get hasSubMenu() {
    return this.items.some(item => item.subMenus);
  }

  get normalizedItems() {
    return this.items.map((item, i) => ({
      ...item,
      isInIndex: this.indices.has(i),
      isActive: item?.subMenus?.some(menu =>
        menu.items.some(item => item.isLinkActive)
      )
    }));
  }

  onMouseEnter(key) {
    if (window.innerWidth >= 1024) {
      this.indices.add(key);

      this.indices = new Set(Array.from(this.indices));
    }
  }

  toggle(key) {
    this.indices.has(key) ? this.indices.delete(key) : this.indices.add(key);

    this.indices = new Set(Array.from(this.indices));
  }

  onMouseLeave(key) {
    if (window.innerWidth >= 1024) {
      this.indices.delete(key);
      this.indices = new Set(Array.from(this.indices));
    }
  }

  @Watch("$route") onRouteChange() {
    this.indices = new Set();
  }
}
</script>
<style lang="scss">
.c-menu {
  &.has-sub-menu {
    .menu-item-wrapper {
      @screen lg {
        @apply px-3 h-8 rounded-sm border border-transparent;
      }
    }
    .item.has-sub-menus.is-in-index {
      .menu-item-wrapper {
        @apply border-alt;
      }
    }
  }

  .item {
    &.active .menu-item-wrapper {
      & > .icon,
      > .c-menu-item {
        @apply text-font-primary;
      }
    }

    &.has-sub-menus {
      .menu-item-wrapper {
        > .c-menu-item {
          @apply cursor-default;
        }
      }
    }
  }

  @screen lg-max {
    .c-menu-item {
      .icon {
        @apply text-16;
      }
    }
  }
}
</style>
