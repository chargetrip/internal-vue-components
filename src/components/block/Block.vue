<template>
  <div class="block rounded bg-base">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class extends Vue {}
</script>
