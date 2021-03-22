<template>
  <MenuItem v-bind="{ ...$props, title: null }" class="recursive-menu-item">
    <div class="flex lg:justify-start" ref="containerEl">
      <div ref="titleEl" class="truncate">
        <template v-if="depth">#</template>
        {{ title }}
      </div>
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
  &.has-icon {
    @apply h-10;
  }
}
</style>
