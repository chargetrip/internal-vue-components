<template>
  <div
    class="accordion-item border-b border-base overflow-hidden"
    :class="{ active: isActive }"
  >
    <div
      class="flex items-center py-4 justify-between cursor-pointer"
      @click="toggle"
      ref="toggleEl"
    >
      <slot name="prefix" />
      <p class="pr-4">
        <strong>
          {{ title }}
        </strong>
      </p>
      <span
        class="text-accent"
        v-if="showChevron"
        :class="{
          'icon-circle-plus': !isActive,
          'icon-circle-minus': isActive
        }"
      />
      <slot name="suffix" />
    </div>
    <div class="text-font-alt3 children h-0 opacity-0" ref="content">
      <div class="container pb-6" ref="container">
        <p v-if="description">
          {{ description }}
        </p>
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Watch, Ref } from "vue-property-decorator";
import anime from "animejs/lib/anime.es";
import { Listen } from "@/utilities/decorators";
import Base from "@/mixins/base";

@Component
export default class AccordionItem extends Mixins(Base) {
  @Ref("container") containerEl!: HTMLElement;
  @Ref("content") contentEl!: HTMLElement;
  @Ref("toggleEl") toggleEl;
  @Prop() title;
  @Prop({ default: true }) showChevron;
  @Prop() description;
  @Prop() forceActive!: boolean;
  isActive = false;

  mounted() {
    this.onIsActiveChange();
  }

  @Watch("forceActive")
  @Watch("isActive")
  @Listen("resize")
  onIsActiveChange() {
    if (this.isActive || this.forceActive) {
      this.animate(
        { height: this.containerEl.offsetHeight },
        { opacity: 1, translateY: 0 }
      );
    } else {
      this.animate({ height: 0 }, { opacity: 0, translateY: -24 });
    }
  }

  toggle() {
    if (this.forceActive) {
      this.isActive = false;
    } else {
      this.isActive = !this.isActive;
    }

    this.$emit("toggle", this.isActive);
  }
  animate(elValue, childrenValue) {
    anime({
      targets: this.contentEl,
      easing: "easeOutCubic",
      duration: 300,
      ...elValue
    });
    anime({
      targets: this.contentEl,
      easing: "easeOutCubic",
      duration: 300,
      ...childrenValue
    });
  }
}
</script>
<style lang="scss">
.accordion-item {
  &:not(.active) {
    .children {
      @apply pointer-events-none;
    }
  }
  @screen lg-max {
    width: calc(100% + 48px);

    @apply relative -ml-6 px-6;
  }
}
</style>
