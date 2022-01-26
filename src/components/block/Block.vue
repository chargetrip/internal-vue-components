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
.theme-light .c-block {
  @apply bg-subdued;

  .c-form-control {
    .box {
      @apply bg-subdued;
    }
  }
}
.c-block {
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
  }
}
</style>
