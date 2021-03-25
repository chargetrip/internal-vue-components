<template>
  <component
    class="c-menu-item group text-font-alt3 hover:text-font-primary transition duration-300 cursor-pointer relative flex items-center"
    :class="{ soon: soon, 'has-icon': icon, 'link-active': isLinkActive }"
    ref="link"
    v-bind="bind"
    @click="onClick"
    :is="bind.is"
  >
    <span
      :class="`icon-${icon}`"
      class="icon mr-3 last:mr-0 text-18"
      v-if="icon"
    />
    <span class="title truncate w-full" v-if="title || $slots.default">
      {{ title }}
      <slot />
      <span v-if="subTitle">
        {{ subTitle }}
      </span>
    </span>
    <Tag class="ml-3" type="secondary" v-if="soon" size="xs" color="font-alt3">
      Soon
    </Tag>
    <span
      class="icon-arrow-up-right pl-4 icon-external ml-auto text-18 transition duration-300"
      v-if="arrow"
    />
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
  @Prop() isLinkActive;
  @Prop() href;
  @Prop() target;
  @Prop() hash;
  @Prop() soon;
  @Prop() arrow;
  @Prop() title;
  @Prop() icon;
  @Prop() callback;
  @Prop() subTitle;

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

  //&.link-active,
  &.router-link-exact-active,
  &.nuxt-link-exact-active {
    @apply text-font-primary;

    .dynamic-icon {
      @apply border-font-primary;
    }
  }
}
</style>
