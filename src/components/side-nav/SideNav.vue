<template>
  <aside
    class="c-side-nav overflow-y-scroll text-14 flex flex-col py-8 border-r border-alt"
  >
    <div class="flex h-8 px-8 mb-6 items-center">
      <svg
        width="27"
        height="32"
        viewBox="0 0 27 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.816117 9.64871C3.06395 2.53476 10.6051 -1.54079 17.6608 0.546414C24.715 2.63317 28.6115 10.0922 26.3636 17.2061C23.2599 27.0288 12.2017 31.3349 12.2017 31.3349C9.46194 32.8096 5.95568 31.7356 4.46159 29.0652C4.46159 29.0652 -2.28762 19.4714 0.816117 9.64871ZM17.106 6.86328H12.1157C11.7312 6.86328 11.2863 7.14905 11.1379 7.50156L7.43049 16.3084C7.13781 17.0037 7.53244 17.5798 8.31843 17.5798H10.9319L9.31209 23.2909C8.89524 24.7606 9.45293 25.0712 10.5574 23.9857L19.1889 15.5026C19.7419 14.9592 19.5564 14.518 18.7739 14.518H14.4587L17.8763 8.09314C18.2376 7.41379 17.8927 6.86328 17.106 6.86328Z"
          class="fill-current text-font-primary"
        />
      </svg>
    </div>
    <div class="nav-container relative">
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
          :show-next-level="true"
        />
      </nav>
    </div>
    <CSwitch
      class="px-8 pt-8 flex justify-between border-t border-alt mt-auto"
      label="Dark mode"
      :value="darkMode"
      @input="$emit('changeDarkMode', $event)"
    />
  </aside>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
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
}
</script>
