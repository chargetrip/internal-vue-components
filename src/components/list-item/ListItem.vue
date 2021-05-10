<template>
  <li
    class="c-list-item py-2 px-4 border border-alt rounded"
    :class="{ 'border-dashed': isDashed }"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() isDashed;
}
</script>
