<template>
  <nav
    class="c-sub-menu absolute top-full left-1/2 transform flex -translate-x-1/2 whitespace-nowrap bg-body rounded p-6 transition duration-300 ease-out translate-y-2 opacity-0 invisible"
    :class="{ 'is-alternative': isAlternative }"
  >
    <div
      class="w-4 h-4 top-0 transform rotate-45 absolute left-1/2 transform -translate-y-1/4 -translate-x-1/2 bg-body rounded-sm"
    />
    <div
      v-for="(menu, key) in menus"
      :key="key"
      class="lg:mb-0 lg:mr-8 last:mr-0 last:mb-0 mb-6 menu rounded-md"
    >
      <strong class="flex items-center mb-6" v-if="menu.title">
        {{ menu.title }}
      </strong>
      <MenuItem
        v-for="(item, key) in menu.items"
        v-bind="{
          ...item,
          title: null,
          subTitle: null,
          icon: isAlternative ? item.icon : null
        }"
        :key="key"
        :class="{ 'has-icon': item.icon }"
        class="lg:mb-6 last:mb-0 pl-7 lg:pl-0"
      >
        <div class="flex items-center">
          <div
            class="lg:w-10 lg:h-10 rounded-full lg:bg-accent mr-3 icon flex items-center justify-center text-white"
            v-if="item.icon || item.image"
            :style="{ backgroundColor: item.iconBgColor }"
            :class="`icon-${item.icon}`"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full"
              v-if="item.image"
            />
          </div>
          <div class="mr-6">
            <strong class="text-font-primary block">
              {{ item.title }}
            </strong>
            <span class="text-font-alt3">
              {{ item.subTitle }}
            </span>
          </div>
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
  @Prop() iconBgColor;

  get isAlternative() {
    return this.menus.some(menu => menu.title);
  }
}
</script>
<style lang="scss">
.group.is-in-index {
  .c-sub-menu {
    @apply -translate-y-1 opacity-100 visible;
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
      @apply p-4;

      &:last-child {
        @apply bg-subdued;
      }
    }
  }
}
</style>
