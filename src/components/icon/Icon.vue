<template>
  <span
    class="icon"
    :class="[
      `icon-${name}`,
      { 'is-circle': isCircle, 'is-square': isSquare, 'is-warning': isWarning }
    ]"
  />
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
    @apply flex items-center justify-center border border-alt;

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
