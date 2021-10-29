<template>
  <li
    class="c-list-item py-2 px-4 border rounded"
    :class="{
      'border-dashed': isDashed,
      'border-transparent': !hasBorder,
      'border-alt': hasBorder
    }"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() isDashed!: boolean;
  @Prop() hasBorder!: boolean;
}
</script>
