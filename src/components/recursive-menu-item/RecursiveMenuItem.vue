<template>
  <MenuItem
    v-bind="{ ...$props, title: null }"
    class="c-recursive-menu-item"
    :class="{ active: $route.path === to }"
  >
    <div class="flex items-center lg:justify-start" ref="containerEl">
      <div ref="titleEl" class="truncate">
        <template v-if="depth">#</template>
        {{ title }}
      </div>
      <component :is="component" v-if="component" />
    </div>
    <div
      class="absolute inset-0 z-10"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    />
  </MenuItem>
</template>

<script lang="ts">
import { Prop, Component, Ref, Vue } from "vue-property-decorator";
import MenuItem from "@/components/menu-item/MenuItem.vue";
import Tooltip from "@/components/tooltip/Tooltip.vue";

@Component({ components: { MenuItem, Tooltip } })
export default class CMenuItem extends Vue {
  @Ref("titleEl") titleEl;
  @Ref("containerEl") containerEl;
  @Prop() to;
  @Prop({ default: 0 }) depth;
  @Prop() href;
  @Prop() target;
  @Prop() hash;
  @Prop() soon;
  @Prop() component;
  @Prop() arrow;
  @Prop() title;
  @Prop() icon;
  @Prop() callback;

  onMouseEnter() {
    if (!this.depth) return;

    const titleElRect = this.titleEl.getBoundingClientRect();
    const containerElRect = this.containerEl.getBoundingClientRect();

    if (
      titleElRect.left + titleElRect.width >=
      containerElRect.left + containerElRect.width
    ) {
      this.$root.$emit("setSideNavTooltip", {
        text: this.title,
        elRect: titleElRect
      });
    }
  }

  onMouseLeave() {
    this.$root.$emit("setSideNavTooltip", null);
  }
}
</script>
<style lang="scss">
.c-recursive-menu-item {
  .title {
    @apply w-full;
  }
  &.has-icon {
    @apply h-10;
  }
}
</style>
