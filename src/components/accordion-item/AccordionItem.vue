<template>
  <div
    class="accordion-item border-b border-alt overflow-hidden"
    :class="{ active: isActive }"
  >
    <div
      class="flex items-center py-4 justify-between cursor-pointer"
      @click="isActive = !isActive"
      ref="toggleEl"
    >
      <p class="pr-4">
        <strong>
          {{ title }}
        </strong>
      </p>
      <span
        class="text-accent"
        :class="{
          'icon-circle-plus': !isActive,
          'icon-circle-minus': isActive
        }"
      />
    </div>
    <div class="text-font-alt3 mt-1 pb-4 children" ref="childrenEl">
      <p v-if="description">
        {{ description }}
      </p>
      <slot />
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
  @Ref("toggleEl") toggleEl;
  @Ref("childrenEl") childrenEl;
  @Prop() title;
  @Prop() description;
  isActive = false;

  mounted() {
    this.onIsActiveChange();
  }
  @Watch("isActive")
  @Listen("resize")
  onIsActiveChange() {
    if (!this.toggleEl || !this.childrenEl) return;

    if (this.isActive) {
      this.animate(
        { height: this.childrenEl.offsetHeight + this.toggleEl.offsetHeight },
        { opacity: 1, translateY: 0 }
      );
    } else {
      this.animate(
        { height: this.toggleEl.offsetHeight },
        { opacity: 0, translateY: -24 }
      );
    }
  }

  animate(elValue, childrenValue) {
    anime({
      targets: this.$el,
      easing: "easeOutCubic",
      duration: 300,
      ...elValue
    });
    anime({
      targets: this.childrenEl,
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
