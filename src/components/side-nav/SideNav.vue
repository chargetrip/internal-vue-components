<template>
  <aside
    class="c-side-nav lg:bg-body top-0 lg:pt-8 h-auto text-14 lg:justify-start flex flex-col lg:border-r border-alt sticky lg:relative w-full lg:w-auto hover:text-font-alt3"
    @click="hideMenu"
    :class="{
      'show-menu': showMenu && showToggleMenu
    }"
  >
    <div
      class="flex logo lg-max:h-14 px-6 lg:pb-8 border-b border-alt relative"
      @click.stop
    >
      <div
        class="mobile-bg lg:hidden absolute bg-body inset-0 rounded-t-xl overflow-hidden"
      />
      <router-link class="lg-max:w-5 w-7 flex items-center" to="/home">
        <svg viewBox="0 0 27 32" fill="none" class="w-full">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.816117 9.64871C3.06395 2.53476 10.6051 -1.54079 17.6608 0.546414C24.715 2.63317 28.6115 10.0922 26.3636 17.2061C23.2599 27.0288 12.2017 31.3349 12.2017 31.3349C9.46194 32.8096 5.95568 31.7356 4.46159 29.0652C4.46159 29.0652 -2.28762 19.4714 0.816117 9.64871ZM17.106 6.86328H12.1157C11.7312 6.86328 11.2863 7.14905 11.1379 7.50156L7.43049 16.3084C7.13781 17.0037 7.53244 17.5798 8.31843 17.5798H10.9319L9.31209 23.2909C8.89524 24.7606 9.45293 25.0712 10.5574 23.9857L19.1889 15.5026C19.7419 14.9592 19.5564 14.518 18.7739 14.518H14.4587L17.8763 8.09314C18.2376 7.41379 17.8927 6.86328 17.106 6.86328Z"
            class="fill-current text-font-primary"
          />
        </svg>
      </router-link>
      <div class="ml-auto flex items-center">
        <span
          class="icon-dark-mode hover:text-font-primary cursor-pointer lg:w-8 lg:h-8 lg:rounded-full lg:bg-base flex items-center justify-center transition duration-300"
          @click="$emit('changeDarkMode', !darkMode)"
        />
        <slot name="icons" />
        <span
          class="icon-menu lg:hidden cursor-pointer ml-4"
          @click="showMenu = !showMenu"
          v-if="showToggleMenu"
        />
      </div>
    </div>

    <div
      class="nav-container flex-1 overflow-y-scroll relative z-10 lg-max:hidden lg-max:border-b border-alt"
      ref="navContainer"
      :class="{ 'mt-3': !$slots.default }"
      @click.stop
    >
      <div class="lg-max:hidden sticky-header" v-if="$slots.default">
        <slot />
      </div>
      <nav
        class="flex flex-col py-3 border-b border-alt last:border-0"
        :class="{ 'lg:pt-0': !i }"
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
          @closeMenu="showMenu = false"
        />
      </nav>
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Ref, Watch } from "vue-property-decorator";
import Base from "@/mixins/base";
import MenuItem from "@/components/menu-item/MenuItem.vue";
import MenuItemGroup from "@/components/menu-item-group/MenuItemGroup.vue";
import { default as CSwitch } from "@/components/switch/Switch.vue";

@Component({
  components: { MenuItemGroup, MenuItem, CSwitch }
})
export default class CSideNav extends Mixins(Base) {
  @Ref("scrollContainer") scrollContainerEl;
  @Ref("navContainer") navContainerEl;
  @Prop() darkMode;
  @Prop() navs;
  childrenIndex = this.getChildrenIndex();
  @Prop() showToggleMenu;
  showMenu = false;

  getChildrenIndex() {
    return this.navs.reduce((index, arr, i) => {
      const indexOfItem = arr.findIndex(item =>
        this.$route.fullPath.includes(item?.fullPath)
      );

      return indexOfItem >= 0 ? `${i}-${indexOfItem}` : index;
    }, null);
  }

  @Watch("$route.path") hideMenu() {
    this.showMenu = false;
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

  @Watch("showMenu") onMenuOpenChange() {
    this.$emit("toggleMenu", this.showMenu);
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
    .logo.sticky-header {
      @apply py-0 flex items-center;

      background: unset;
    }
    &.show-menu {
      &:after {
        content: "";
        z-index: -1;
        @apply block w-screen h-screen absolute top-0 left-0 bg-body opacity-50;
      }

      .nav-container {
        @apply block;
      }
    }
    .nav-container {
      @apply absolute left-0 top-full w-full bg-body hidden;
      max-height: calc(100vh - 54px);
    }
  }
}
</style>
