<template>
  <div
    class="c-container mx-auto"
    :class="{
      'max-w-screen-xl': maxWidth === 'screen-xl',
      'max-w-screen-lg': maxWidth === 'screen-lg',
      'max-w-screen-md': maxWidth === 'screen-md',
      'max-w-screen-sm': maxWidth === 'screen-sm',
      'max-w-xl': maxWidth === 'xl',
      'max-w-lg': maxWidth === 'lg',
      'max-w-md': maxWidth === 'md',
      'max-w-sm': maxWidth === 'sm'
    }"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Container extends Vue {
  @Prop({ default: "screen-xl" }) maxWidth!: string;
}
</script>
