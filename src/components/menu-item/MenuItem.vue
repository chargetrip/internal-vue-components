<template>
  <component
    class="c-menu-item group block text-font-alt3 hover:text-font-primary transition duration-300 cursor-pointer h-8 px-6 relative"
    :class="{ soon: soon, 'has-icon': icon }"
    ref="link"
    v-bind="bind"
    @click="onClick"
    :is="bind.is"
  >
    <div
      class="absolute inset-0 z-10"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    />
    <span class="flex items-center max-w-full relative" ref="containerEl">
      <span :class="`icon-${icon}`" class="icon mr-3 text-18" v-if="icon" />
      <span class="title truncate" v-if="title || $slots.default" ref="titleEl">
        <template v-if="depth">#</template>
        {{ title }}
        <slot />
      </span>
      <Tag
        class="ml-3"
        type="secondary"
        v-if="soon"
        size="xs"
        color="font-alt3"
      >
        Soon
      </Tag>
      <span
        class="icon-arrow-up-right pl-4 icon-external ml-auto text-18 transition duration-300"
        v-if="arrow"
      />
    </span>
  </component>
</template>

<script lang="ts">
import { Prop, Component, Ref, Vue } from "vue-property-decorator";
import Tag from "@/components/tag/Tag.vue";
import Tooltip from "@/components/tooltip/Tooltip.vue";

@Component({ components: { Tag, Tooltip } })
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
  showTooltip = false;

  onMouseEnter() {
    if (!this.depth) return;

    const titleElRect = this.titleEl.getBoundingClientRect();
    const containerElRect = this.containerEl.getBoundingClientRect();

    if (
      titleElRect.left + titleElRect.width >=
      containerElRect.left + containerElRect.width
    ) {
      this.showTooltip = true;

      this.$root.$emit("setSideNavTooltip", {
        text: this.title,
        elRect: titleElRect
      });
    }
  }

  onMouseLeave() {
    this.showTooltip = false;
    this.$root.$emit("setSideNavTooltip", null);
  }

  get bind() {
    if (this.to) {
      return {
        to: this.hash ? `${this.to}#${this.hash}` : this.to,
        target: this.target || "_self",
        hash: this.hash,
        is: "router-link"
      };
    } else if (this.href) {
      return {
        href: this.href,
        rel: "noopener",
        target: this.target || "_blank",
        is: "a"
      };
    }

    return {
      is: "div"
    };
  }

  onClick(e) {
    this.callback?.(e, this.$props);
  }
}
</script>
<style lang="scss">
.c-menu-item {
  &.has-icon {
    @apply h-10;
  }

  &:not(:hover) {
    @screen lg {
      .icon-external {
        @apply opacity-0;
      }
    }
  }

  &.soon {
    @apply pointer-events-none;

    .icon,
    .title {
      @apply opacity-60;
    }
  }

  &.router-link-exact-active,
  &.nuxt-link-exact-active {
    @apply text-font-primary;

    .dynamic-icon {
      @apply border-font-primary;
    }
  }
}
</style>
