<template>
  <aside
    class="c-side-nav bg-body lg:bg-subdued top-0 h-auto text-14 flex flex-col lg:border-r border-alt sticky lg:relative w-full lg:w-auto text-font-alt3"
    :class="{
      'show-menu': showMenu
    }"
    @click="$emit('setShowMenu', false)"
  >
    <div class="container flex-1 overflow-y-scroll pt-3 bg-body lg:bg-subdued">
      <div>
        <nav
          class="flex flex-col py-3"
          @click.stop
          v-for="(nav, i) in navs"
          :key="i"
        >
          <MenuItemGroup
            v-for="(navItem, n) in nav"
            :key="n"
            :padding="24"
            :children-index="childrenIndex"
            @setChildrenIndex="childrenIndex = $event"
            :index="`${i}-${n}`"
            v-bind="navItem"
          />
        </nav>
      </div>
      <slot />
    </div>
    <div
      class="icon mt-auto py-4 text-16 px-6 border-t border-alt icon-sun cursor-pointer"
      :class="{
        'icon-filled-dark-mode': !darkMode,
        'icon-filled-light-mode': darkMode
      }"
      @click="$emit('setDarkMode', !darkMode)"
    />
  </aside>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Ref, Watch } from "vue-property-decorator";
import Base from "@/mixins/base";
import MenuItem from "@/components/menu-item/MenuItem.vue";
import MenuItemGroup from "@/components/menu-item-group/MenuItemGroup.vue";
import { default as CSwitch } from "@/components/switch/Switch.vue";
import Button from "@/components/button/Button.vue";

@Component({
  components: { MenuItemGroup, MenuItem, CSwitch, Button }
})
export default class CSideNav extends Mixins(Base) {
  @Ref("scrollContainer") scrollContainerEl;
  @Ref("navContainer") navContainerEl;
  @Prop() navs;
  @Prop() darkMode;
  childrenIndex = this.getChildrenIndex();
  @Prop() showMenu;

  getChildrenIndex() {
    return this.navs.reduce((index, arr, i) => {
      const indexOfItem = arr.findIndex(item =>
        this.$route.fullPath.includes(item?.fullPath)
      );

      return indexOfItem >= 0 ? `${i}-${indexOfItem}` : index;
    }, null);
  }

  @Watch("$route.path") hideMenu() {
    this.childrenIndex = this.getChildrenIndex();
  }

  @Watch("childrenIndex") onChildrenIndexChange() {
    if (this.childrenIndex && window.innerWidth >= 1024) {
      const [index1, index2] = this.childrenIndex
        .split("-")
        .map(x => parseInt(x));

      let item = this.navs[index1][index2];

      while (item.children[0]) {
        item = item.children[0];
      }

      this.$router.push(item.to);
    }
  }
}
</script>
<style lang="scss">
.c-side-nav {
  .sticky-header {
    @apply py-3;
  }
  .mobile-bg {
    z-index: -1;
  }

  @screen lg-max {
    @apply mt-16 fixed hidden border-b;

    .container {
      max-height: calc(100vh - 64px);
    }

    &.show-menu {
      @apply flex;

      &:after {
        content: "";
        z-index: -1;
        @apply block w-screen h-screen fixed top-0 left-0 bg-black opacity-50;
      }
    }
  }
}
</style>
