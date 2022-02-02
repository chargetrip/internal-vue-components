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

  .c-duo-input.c-form-control,
  .c-form-control {
    &.has-hover {
      .box {
        @apply border-alt;
      }
    }
    &.has-focus {
      .box {
        @apply border-accent;
      }
    }

    &.error {
      .box {
        @apply border-warning;
      }
    }
    .box {
      @apply bg-subdued;
    }
  }
}
</style>
