<template>
  <aside
    class="c-side-nav bg-body lg:bg-subdued top-0 pt-3 h-auto text-14 flex flex-col lg:border-r border-alt sticky lg:relative w-full lg:w-auto text-font-alt3"
    :class="{
      'show-menu': showMenu
    }"
    @click="$emit('setShowMenu', false)"
  >
    <div class="container overflow-y-scroll">
      <div>
        <nav
          class="flex flex-col py-3"
          @click.stop
          v-for="(nav, i) in normalizedNavs"
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
      <CSwitch
        class="px-6 py-8 flex justify-between items-center text-font-alt3"
        icon="dark-mode"
        size="sm"
        label="Dark mode"
        :value="darkMode"
        @click.native.stop
        @input="$emit('setDarkMode', $event)"
      />
      <div class="dashboard bg-subdued py-4 px-6 lg:hidden">
        <Button
          href="https://account.chargetrip.com"
          class="w-full"
          color="accent"
          title="Sign up"
        />
      </div>
    </div>
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

  get normalizedNavs() {
    return [
      ...this.navs,
      [
        {
          title: "Playground",
          icon: "playground",
          href: "https://playground.chargetrip.com/",
          arrow: true
        },
        {
          title: "Voyager",
          icon: "voyager-alt",
          href: "https://voyager.chargetrip.com/",
          arrow: true
        },
        {
          title: "Examples",
          icon: "code",
          href: "https://chargetrip.com/examples/",
          arrow: true
        },
        {
          title: "Github",
          icon: "github",
          href: "https://github.com/chargetrip",
          arrow: true
        }
      ],
      [
        {
          title: "Website",
          icon: "globe",
          href: "https://chargetrip.com/",
          arrow: true
        },
        {
          title: "Documentation",
          icon: "slashes-1",
          href: "https://developers.chargetrip.com/",
          arrow: true
        }
      ]
    ];
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

  @screen lg {
    nav:last-child,
    .dashboard {
      @apply hidden;
    }
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
        @apply block w-screen h-screen fixed top-0 left-0 bg-body opacity-50;
      }
    }
  }
}
</style>
