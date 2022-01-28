<template>
  <div
    class="c-compact-card flex-col py-5 px-4 text-14"
    :class="{
      'cursor-pointer': fullyClickable,
      'bg-subdued rounded-md': !isTransparent
    }"
    @click="onClick"
  >
    <div class="flex w-full items-center">
      <Icon
        size="lg"
        v-if="icon"
        class="mr-4 flex-shrink-0 text-20"
        :name="icon.name"
        :is-circle="true"
        :style="[{ background: icon.bg }, icon.style]"
      />
      <Label
        v-if="title && description"
        class="mr-6"
        :label="title"
        :sub-label="description"
      />
      <div class="ml-auto" v-if="cta || $slots.cta">
        <Component
          class="dynamic-cta"
          v-bind="cta"
          ref="ctaEl"
          :is="cta"
          @click.native="onCtaClick"
          v-if="cta"
          v-model="cta.value"
        />
        <slot name="cta" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";
import Label from "@/components/label/Label.vue";
import Icon from "@/components/icon/Icon.vue";

@Component({
  components: { Icon, Button, Label }
})
export default class CCompactCard extends Vue {
  @Prop() public title;
  @Prop() public description;
  @Prop() public isTransparent!: boolean;
  @Prop() public icon!: { bg: string; name: string; style: unknown };
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
<style lang="scss">
.theme-light {
  .c-compact-card {
    @apply bg-subdued;
  }
}
</style>
