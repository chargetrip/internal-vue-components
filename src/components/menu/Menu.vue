<template>
  <div class="c-menu">
    <strong v-if="title" class="mb-4 block text-16">
      {{ title }}
    </strong>
    <nav
      class="text-font-alt3 flex text-14"
      :class="{
        'flex-row': direction === 'row',
        'flex-col': direction === 'column',
        'gap-3': gap === 3,
        'gap-6': gap === 6,
        'gap-8': gap === 8,
        'gap-10': gap === 10
      }"
    >
      <div
        class="item flex items-center relative group"
        v-for="(item, key) in items"
        :key="key"
      >
        <MenuItem v-bind="item" />
        <div class="icon icon-chevron-down ml-2" v-if="item.subMenus" />
        <SubMenu
          class="hidden group-hover:flex"
          v-if="item.subMenus"
          :menus="item.subMenus"
        />
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
}
</script>
