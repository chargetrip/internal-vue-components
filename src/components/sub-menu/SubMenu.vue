<template>
  <nav
    class="c-sub-menu absolute top-full left-1/2 transform -translate-x-1/2 whitespace-no-wrap bg-body rounded p-4 -translate-y-2"
    :class="{ 'is-alternative': isAlternative }"
  >
    <div
      class="w-4 h-4 top-0 transform rotate-45 absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-body rounded-sm"
    />
    <div
      v-for="(menu, key) in menus"
      :key="key"
      class="mr-8 last:mr-0 menu rounded-md"
    >
      <strong class="block mb-3" v-if="menu.title">
        {{ menu.title }}
      </strong>
      <MenuItem
        v-for="(item, key) in menu.items"
        :key="key"
        class="mb-2 last:mb-0"
      >
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full bg-alt mr-3" v-if="!menu.title" />
          <span class="mr-6">
            {{ item.title }}
          </span>
        </div>
      </MenuItem>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import MenuItem from "../menu-item/MenuItem.vue";

@Component({ components: { MenuItem } })
export default class SubMenu extends Vue {
  @Prop() menus;

  get isAlternative() {
    return this.menus.some(menu => menu.title);
  }
}
</script>
<style lang="scss">
.c-sub-menu {
  box-shadow: 0 2px 4px rgba(86, 106, 117, 0.08),
    0px -10px 40px -4px rgba(86, 106, 117, 0.1),
    0px 48px 70px -12px rgba(86, 106, 117, 0.1),
    0px 40px 40px -36px rgba(86, 106, 117, 0.24);

  &.is-alternative {
    @apply p-2;

    .menu {
      @apply px-4 py-3;
      &:last-child {
        @apply bg-subdued;
      }
    }
  }
}
</style>
