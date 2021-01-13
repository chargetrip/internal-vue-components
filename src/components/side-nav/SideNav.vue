<template>
  <aside
    class="c-side-nav lg:bg-off-body top-0 lg:pt-8 h-auto text-14 lg:justify-start flex flex-col lg:border-r border-alt sticky lg:relative w-full lg:w-auto text-font-alt3"
    @click="hideMenu"
    :class="{
      'show-menu': showMenu && showToggleMenu,
      'show-logo': showLogo
    }"
  >
    <div
      class="flex logo-container logo lg-max:h-14 px-6 lg:pb-8 border-b border-alt relative"
      @click.stop
    >
      <div
        class="mobile-bg lg:hidden absolute bg-body inset-0 rounded-t-xl overflow-hidden"
      />
      <router-link class="lg-max:w-14 w-20 flex items-center" to="/">
        <svg class="w-full" viewBox="0 0 80 38" fill="none">
          <path
            d="M20.4351 31H67.9998C74.6272 31 79.9998 25.6274 79.9998 19C79.9998 12.3726 74.6272 7 67.9998 7H24.9824C27.7313 10.7988 28.6949 15.8909 27.2065 20.783C25.8582 25.2145 23.1315 28.5832 20.4351 31Z"
            fill="url(#paint0_radial)"
          />
          <path
            d="M37.7031 24C39.8154 24 41.1211 22.9199 41.1211 21.1904C41.1211 19.9121 40.1846 18.9209 38.8721 18.8252V18.709C39.8975 18.5518 40.6494 17.6562 40.6494 16.5898C40.6494 15.0518 39.5078 14.1357 37.6143 14.1357H33.9844V24H37.7031ZM35.8848 15.6328H37.0879C38.127 15.6328 38.6943 16.0908 38.6943 16.9385C38.6943 17.7314 38.0791 18.1963 37.0059 18.1963H35.8848V15.6328ZM35.8848 22.4756V19.6182H37.0879C38.4209 19.6182 39.0977 20.083 39.0977 21.0195C39.0977 22.0176 38.4551 22.4756 37.1016 22.4756H35.8848Z"
            fill="white"
          />
          <path
            d="M49.2285 22.3252H44.9561V19.7891H48.9756V18.2373H44.9561V15.8105H49.2285V14.1357H43.0078V24H49.2285V22.3252Z"
            fill="white"
          />
          <path
            d="M55.6064 24V15.8105H58.4297V14.1357H50.8418V15.8105H53.665V24H55.6064Z"
            fill="white"
          />
          <path
            d="M62.1416 20.0693L63.1807 16.0703H63.2695L64.2949 20.0693H62.1416ZM65.2998 24H67.3984L64.4385 14.1357H62.1416L59.1816 24H61.123L61.752 21.5869H64.6846L65.2998 24Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.78589 12.5556C2.95047 5.44118 10.2123 1.36535 17.0067 3.4527C23.7996 5.5396 27.5518 12.9991 25.3872 20.1136C22.3984 29.9369 11.7609 34.2367 11.7609 34.2367C9.1115 35.7181 5.73509 34.644 4.29634 31.9734C4.29634 31.9734 -2.20289 22.379 0.78589 12.5556ZM16.4724 9.77H11.6669C11.2967 9.77 10.8682 10.0558 10.7253 10.4083L7.15528 19.2158C6.87345 19.9111 7.25836 20.4873 8.02129 20.4873H10.527L8.96406 26.2103C8.56822 27.6597 9.10283 27.9792 10.1664 26.8936L18.4879 18.4001C19.0175 17.8595 18.8321 17.4252 18.0785 17.4252H13.9232L17.2142 10.9999C17.5622 10.3205 17.23 9.77 16.4724 9.77Z"
            class="fill-current text-font-primary"
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(16.5 19) rotate(-0.447613) scale(64.0019 55.495)"
            >
              <stop offset="0.126837" stop-color="#1A1A20" />
              <stop offset="0.510417" stop-color="#34343D" />
              <stop offset="1" stop-color="#34343D" />
            </radialGradient>
          </defs>
        </svg>
      </router-link>
      <div class="ml-auto flex items-center">
        <slot name="icons" />
        <span
          class="icon-menu lg:hidden cursor-pointer ml-4"
          @click="showMenu = !showMenu"
          v-if="showToggleMenu"
        />
      </div>
    </div>
    <div
      class="nav-container pt-6 flex-1 overflow-y-scroll relative z-10 lg-max:hidden lg-max:border-b border-alt"
      ref="navContainer"
      :class="{ 'mt-3': $slots.default }"
      @click.stop
    >
      <nav
        class="flex flex-col py-3"
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
      <CSwitch
        class="px-6 py-6 flex justify-between text-font-alt3"
        icon="dark-mode"
        size="sm"
        label="Dark mode"
        :value="darkMode"
        @input="$emit('setDarkMode', $event)"
      />
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
  @Prop() navs;
  @Prop() showLogo;
  @Prop() showToggleMenu;
  @Prop() darkMode;
  childrenIndex = this.getChildrenIndex();
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

  @Watch("showMenu") onMenuOpenChange() {
    this.$emit("toggleMenu", this.showMenu);
  }
}
</script>
<style lang="scss">
.c-side-nav {
  &:not(.show-logo) {
    @screen lg {
      @apply pt-0;
    }

    .logo-container {
      @apply hidden;
    }
  }
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
