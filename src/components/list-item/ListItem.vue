<template>
  <li class="c-list-item py-2 px-4 rounded">
    <slot />
  </li>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>
