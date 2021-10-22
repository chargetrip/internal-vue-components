<template>
  <span class="icon" :class="[`icon-${name}`, { 'is-circle': isCircle }]" />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop({ required: true }) name!: string;
  @Prop() isCircle!: boolean;
}
</script>
<style lang="scss">
.icon {
  &.is-circle {
    @apply w-10 h-10 rounded-full flex items-center justify-center;
  }
}
</style>
