<template>
  <nav
    class="c-quick-nav flex sticky bottom-0 left-0 w-full py-3 justify-around font-semibold bg-body shadow-up-md"
  >
    <router-link
      class="flex flex-col items-center"
      v-bind="item"
      v-for="(item, c) in items"
      :key="c"
    >
      <span
        class="text-24 icon-documentation mb-2"
        :class="`icon-${item.icon}`"
      />
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CQuickNav extends Vue {
  @Prop() items;
}
</script>
