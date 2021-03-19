<template>
  <nav
    class="c-sub-menu absolute top-full left-1/2 transform flex -translate-x-1/2 whitespace-no-wrap bg-body rounded p-4 transition duration-300 ease-out translate-y-5 opacity-0 invisible"
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
        v-bind="{
          ...item,
          title: null,
          icon: isAlternative ? item.icon : null
        }"
        :key="key"
        class="mb-2 last:mb-0"
      >
        <div class="flex items-center">
          <div
            class="w-8 h-8 rounded-full bg-alt mr-3 icon flex items-center justify-center text-16"
            v-if="!menu.title"
            :class="`icon-${item.icon}`"
          />
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
.group {
  &:hover {
    .c-sub-menu {
      @apply translate-y-3 opacity-100 visible;
    }
  }
}
.theme-light {
  .c-sub-menu {
    box-shadow: 0 2px 4px rgba(86, 106, 117, 0.08),
      0px -10px 40px -4px rgba(86, 106, 117, 0.1),
      0px 48px 70px -12px rgba(86, 106, 117, 0.1),
      0px 40px 40px -36px rgba(86, 106, 117, 0.24);
  }
}

.theme-dark {
  .c-sub-menu {
    box-shadow: 0px 2px 4px rgba(32, 32, 36, 0.08),
      0px -10px 40px -4px rgba(32, 32, 36, 0.1),
      0px 48px 70px -12px rgba(32, 32, 36, 0.1),
      0px 40px 40px -36px rgba(32, 32, 36, 0.24);
  }
}
.c-sub-menu {
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
