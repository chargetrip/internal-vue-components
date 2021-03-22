<template>
  <aside
    class="c-side-nav bg-body lg:bg-subdued top-0 h-auto text-14 flex flex-col lg:border-r border-alt sticky lg:relative w-full lg:w-auto text-font-alt3"
    :class="{
      'show-menu': showMenu
    }"
    @click="$emit('setShowMenu', false)"
  >
    <div
      class="container flex-1 overflow-y-scroll pt-3 bg-body lg:bg-subdued"
      @scroll="onScroll"
    >
      <div>
        <nav
          class="flex flex-col py-3"
          @click.stop
          v-for="(nav, i) in navs"
          :key="i"
        >
          <RecursiveMenu
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
    <Tooltip
      v-if="tooltip"
      :is-dark="true"
      v-bind="tooltip"
      :no-animation="true"
      class="z-10 whitespace-no-wrap hidden lg:block"
    >
      {{ tooltip.text }}
    </Tooltip>
    <div
      class="mt-auto py-4 px-6 border-t font-semibold border-alt cursor-pointer flex items-center"
      @click="$emit('setDarkMode', !darkMode)"
    >
      <span
        class="icon mr-3 text-18"
        :class="{
          'icon-filled-dark-mode': !darkMode,
          'icon-filled-light-mode': darkMode
        }"
      />
      {{ darkMode ? "Light mode" : "Dark mode" }}
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Ref, Watch } from "vue-property-decorator";
import Base from "@/mixins/base";
import MenuItem from "@/components/menu-item/MenuItem.vue";
import RecursiveMenu from "@/components/menu-item-group/RecursiveMenu.vue";
import { default as CSwitch } from "@/components/switch/Switch.vue";
import Button from "@/components/button/Button.vue";
import Tooltip from "@/components/tooltip/Tooltip.vue";
import { Listen } from "@/utilities/decorators";

@Component({
  components: { RecursiveMenu, MenuItem, CSwitch, Button, Tooltip }
})
export default class CSideNav extends Mixins(Base) {
  @Ref("scrollContainer") scrollContainerEl;
  @Ref("navContainer") navContainerEl;
  @Prop() navs;
  @Prop() darkMode;
  childrenIndex = this.getChildrenIndex();
  @Prop() showMenu;
  tooltip: any = null;
  orientation: string | null = null;
  prevMousePosition: any = null;

  beforeMount() {
    this.setTooltip = this.setTooltip.bind(this);
    this.$root.$on("setSideNavTooltip", this.setTooltip);
  }

  onScroll() {
    this.tooltip = null;
  }

  setTooltip(tooltip) {
    if (!tooltip) return (this.tooltip = null);

    const { text, elRect } = tooltip;

    this.tooltip = {
      text,
      orientation: this.orientation,
      style: {
        top: `${elRect.top +
          (this.orientation === "top" ? 0 : elRect.height) -
          this.$el.getBoundingClientRect().top}px`,
        left: `${Math.max(elRect.width / 2 + elRect.left)}px`
      }
    };
  }

  getChildrenIndex() {
    return this.navs.reduce((index, arr, i) => {
      const indexOfItem = arr.findIndex(item => {
        return this.$route.fullPath.includes(item?.fullPath);
      });

      return indexOfItem >= 0 ? `${i}-${indexOfItem}` : index;
    }, null);
  }

  @Watch("$route.path") hideMenu() {
    this.childrenIndex = this.getChildrenIndex();
  }

  @Listen("mousemove") onMouseMove(e) {
    if (this.prevMousePosition?.screenY < e.screenY) {
      this.orientation = "top";
    } else if (this.prevMousePosition?.screenY > e.screenY) {
      this.orientation = "bottom";
    }
    this.prevMousePosition = e;
  }

  @Watch("childrenIndex") onChildrenIndexChange() {
    if (
      process.env.NODE_ENV === "production" &&
      this.childrenIndex &&
      window.innerWidth >= 1024
    ) {
      const [index1, index2] = this.childrenIndex
        .split("-")
        .map(x => parseInt(x));

      let item = this.navs[index1][index2];

      while (item.children?.[0]) {
        item = item.children[0];
      }

      this.$router.push(item.to);
    }
  }

  beforeDestroy() {
    this.$root.$off("setSideNavTooltip", this.setTooltip);
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
    @apply mt-16 fixed border-b h-full;

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
