<template>
  <div
    class="c-menu-item-group font-semibold"
    :class="[`depth-${depth}`, { overlay: isOverlay }]"
  >
    <div
      class="back mb-6 cursor-pointer text-font-alt3 flex items-center"
      v-if="isOverlay"
      @click="$emit('back')"
    >
      <span class="icon-chevron-left text-16 mr-3" /> Home /
      <span class="text-font-primary ml-1">{{ parent }}</span>
    </div>
    <MenuItem
      :class="{ 'font-semibold': !children }"
      v-if="to"
      @click.native="() => (callback ? callback($props) : null)"
      v-bind="$props"
    />
    <div
      v-else
      class="group h-8 flex items-center"
      :class="{
        'uppercase text-font-primary tracking-wide text-12': isEven,
        'text-font-alt3 cursor-pointer': !isEven
      }"
      @click="onClick"
    >
      {{ title }}
      <span class="icon-chevron-right ml-auto text-16" v-if="!isEven" />
    </div>
    <div class="children" :class="{ active: showNextLevel || forceNextLevel }">
      <c-menu-item-group
        :show-next-level="!isEven"
        :depth="depth + 1"
        :key="c"
        :parent="title"
        v-for="(child, c) in children"
        v-bind="child"
        @back="forceNextLevel = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch } from "vue-property-decorator";
import MenuItem from "../menu-item/MenuItem.vue";

@Component({ name: "c-menu-item-group", components: { MenuItem } })
export default class CMenuItemGroup extends Vue {
  @Prop() to;
  @Prop() href;
  @Prop() target;
  @Prop() hash;
  @Prop() soon;
  @Prop() arrow;
  @Prop() title;
  @Prop() icon;
  //
  @Prop() path;
  @Prop() callback;
  @Prop() children;
  @Prop() parent;
  @Prop({ default: 0 }) depth;
  @Prop() showNextLevel;
  forceNextLevel = false;

  beforeMount() {
    this.forceNextLevel = this.getForceNextLevel();
  }

  getForceNextLevel() {
    const p = this.$route.path.split("/");

    return p[2] ? this.path === p[2] : false;
  }

  get isEven() {
    return this.depth % 2 === 0;
  }

  get isOverlay() {
    return this.depth === 2;
  }

  onClick() {
    if (!this.isEven && !this.to) {
      this.forceNextLevel = true;
    }
  }
}
</script>
<style lang="scss">
.c-menu-item-group {
  .c-menu-item {
    &.router-link-active,
    &.nuxt-link-active {
      @apply text-font-primary;

      & + .children {
        @apply block;

        .c-menu-item {
          @apply font-normal pl-6;
        }
      }
    }
  }
  .children {
    @apply hidden;

    &.active {
      @apply block;
    }
  }
  &.overlay {
    @apply absolute top-0 left-0 w-full h-full bg-body px-6;

    > .children {
      > .c-menu-item-group {
        > .c-menu-item {
          @apply font-semibold;
        }
      }
    }
  }
}
</style>
