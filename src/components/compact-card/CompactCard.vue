<template>
  <div
    class="c-compact-card border border-alt border-solid flex-col py-5 px-4 bg-base rounded transition duration-300 text-14"
    :class="{ 'cursor-pointer': fullyClickable }"
    @click="onClick"
  >
    <div class="flex w-full items-center">
      <div
        class="icon mr-8 flex-shrink-0 w-10 h-10 text-20 text-white rounded-full flex items-center justify-center"
        v-if="image"
        :style="{ background: image.bg }"
        :class="`icon-${image.icon}`"
      />
      <div class="mr-3">
        <div class="title font-semibold" v-if="title">
          {{ title }}
        </div>
        <p class="text-font-alt3" v-if="description">
          {{ description }}
        </p>
      </div>
      <Component
        class="dynamic-cta ml-auto"
        v-bind="cta"
        ref="ctaEl"
        :is="cta"
        @click.native="onCtaClick"
        v-if="cta"
        v-model="cta.value"
      />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";

@Component({
  components: { Button }
})
export default class CCompactCard extends Vue {
  @Prop() public title;
  @Prop() public description;
  @Prop() public image;
  @Prop() public button;
  @Prop() public active;
  @Prop() public fullyClickable;
  @Prop() public included;
  @Prop() public cta;

  onCtaClick(e) {
    this.cta.callback?.(e, this);
  }

  onClick() {
    if (this.fullyClickable) {
      this.cta.value = !this.cta.value;
    }
  }
}
</script>
