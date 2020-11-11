<template>
  <aside
    class="c-side-nav bg-body top-0 h-auto overflow-y-scroll text-14 lg:justify-center lg:justify-start flex flex-col lg:py-8 border-b lg:border-b-0 lg:border-r border-alt sticky lg:relative w-full lg:w-auto"
    :class="{ 'show-menu': showMenu }"
  >
    <div
      class="flex h-8 px-6 lg:px-8 lg:mb-6 items-center h-14 lg:h-auto bg-body"
    >
      <svg width="27" height="32" viewBox="0 0 27 32" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.816117 9.64871C3.06395 2.53476 10.6051 -1.54079 17.6608 0.546414C24.715 2.63317 28.6115 10.0922 26.3636 17.2061C23.2599 27.0288 12.2017 31.3349 12.2017 31.3349C9.46194 32.8096 5.95568 31.7356 4.46159 29.0652C4.46159 29.0652 -2.28762 19.4714 0.816117 9.64871ZM17.106 6.86328H12.1157C11.7312 6.86328 11.2863 7.14905 11.1379 7.50156L7.43049 16.3084C7.13781 17.0037 7.53244 17.5798 8.31843 17.5798H10.9319L9.31209 23.2909C8.89524 24.7606 9.45293 25.0712 10.5574 23.9857L19.1889 15.5026C19.7419 14.9592 19.5564 14.518 18.7739 14.518H14.4587L17.8763 8.09314C18.2376 7.41379 17.8927 6.86328 17.106 6.86328Z"
          class="fill-current text-font-primary"
        />
      </svg>
      <div class="ml-auto lg:hidden">
        <span
          class="icon-dark-mode cursor-pointer"
          @click="$emit('changeDarkMode', !darkMode)"
        />
        <slot />
        <span
          class="icon-menu cursor-pointer ml-4"
          @click="showMenu = !showMenu"
          v-if="showToggleMenu"
        />
      </div>
    </div>
    <div class="nav-container relative z-10 bg-body hidden lg:block">
      <nav
        class="flex flex-col mb-8 px-8 text-alt3 last:mb-0"
        v-for="(nav, i) in navs"
        :key="i"
      >
        <MenuItemGroup
          v-for="(navItem, n) in nav"
          :class="`mb-${spacing} last:mb-0`"
          :key="n"
          v-bind="navItem"
          @closeMenu="showMenu = false"
          :show-next-level="true"
        />
      </nav>
    </div>
    <CSwitch
      class="px-8 hidden lg:flex pt-8 flex justify-between border-t border-alt mt-auto"
      label="Dark mode"
      :value="darkMode"
      @input="$emit('changeDarkMode', $event)"
    />
  </aside>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import Base from "@/mixins/base";
import MenuItem from "@/components/menu-item/MenuItem.vue";
import MenuItemGroup from "@/components/menu-item-group/MenuItemGroup.vue";
import { default as CSwitch } from "@/components/switch/Switch.vue";

@Component({
  components: { MenuItemGroup, MenuItem, CSwitch }
})
export default class CSideNav extends Mixins(Base) {
  @Prop() darkMode;
  @Prop() navs;
  @Prop() spacing;
  @Prop() showToggleMenu;
  @Prop({ default: "Home" }) currentPage;
  showMenu = false;
}
</script>
<style lang="scss">
.c-side-nav {
  @screen lg-max {
    &.show-menu {
      @apply h-screen;

      &:after {
        content: "";
        z-index: -1;
        @apply block w-screen h-screen absolute top-0 left-0 bg-body opacity-50 pointer-events-none;
      }

      .nav-container {
        @apply block;
      }
    }

    .nav-container {
      @apply border-t border-alt py-4;
      max-height: calc(100vh - 96px - 34px);
    }
  }
}
</style>
