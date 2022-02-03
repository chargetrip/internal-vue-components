<template>
  <div class="c-block rounded bg-base">
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
<style lang="scss">
.c-block {
  @apply bg-subdued;

  .c-radio-tree li,
  .border-alt {
    @apply border-base;
  }
  .c-duo-input.has-hover,
  .c-form-control.has-hover .box {
    @apply border-alt bg-subdued;
  }
  .c-duo-input.has-focus,
  .c-form-control.has-focus .box {
    @apply border-accent;
  }

  .c-duo-input.has-error,
  .c-form-control.error .box {
    @apply border-warning;
  }

  .c-duo-input,
  .c-form-control .box {
    @apply bg-subdued;
  }
}
</style>
