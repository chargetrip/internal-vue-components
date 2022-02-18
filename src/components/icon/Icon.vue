<template>
  <span
    class="icon relative"
    :class="[
      size,
      `icon-${name}`,
      { 'is-circle': isCircle, 'is-square': isSquare, 'is-warning': isWarning }
    ]"
  >
    <span class="path1"></span>
    <span class="path2 absolute inset-0"></span>
    <span class="path3 absolute inset-0"></span>
  </span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop({ required: true }) name!: string;
  @Prop() isCircle!: boolean;
  @Prop({ default: "md" }) size!: boolean;
  @Prop() isSquare!: boolean;
  @Prop() isWarning!: boolean;
}
</script>
<style lang="scss">
.icon {
  &.is-square,
  &.is-circle {
    @apply flex items-center justify-center border border-transparent;

    &.sm {
      @apply w-6 h-6;
    }

    &.md {
      @apply w-8 h-8;
    }
    &.lg {
      @apply w-10 h-10;
    }
    &.is-warning {
      @apply border-warning bg-warning-alt2 text-warning;
    }
  }

  &.is-square {
    @apply rounded;
  }

  &.is-circle {
    @apply rounded-full;
  }
}
</style>
