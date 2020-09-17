<template>
  <div
    class="c-snackbar font-semibold max-w-full flex transition duration-700 ease-in-out rounded-md items-center h-10 border"
    :class="type"
  >
    <div
      class="flex icon flex-shrink-0 transition duration-700 ease-in-out prefix items-center justify-center text-24 h-full w-12 border-r"
      :class="`icon-${icon}`"
    ></div>
    <div class="px-3 truncate">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class CSnackbar extends Vue {
  @Prop() private icon!: string | null;
  @Prop() private title!: string | null;
  @Prop() private type!: string | null;
}
</script>

<style lang="scss">
.c-snackbar {
  &.success {
    @apply bg-accent border-accent-alt;

    .prefix {
      @apply border-accent-alt;
    }
  }
  &.note {
    @apply bg-note border-note-alt;

    .prefix {
      @apply border-note-alt;
    }
  }
  &.error {
    @apply bg-error border-error-alt;

    .prefix {
      @apply border-error-alt;
    }
  }
  &.alt {
    @apply bg-alt2 border-alt;

    .prefix {
      @apply border-alt;
    }
  }

  &.warning {
    @apply bg-warning border-warning-alt;

    .prefix {
      @apply border-warning-alt;
    }
  }
}
</style>
