<template>
  <div class="not-available-blur relative flex">
    <div
      class="wrapper w-full flex-1"
      :class="{ 'is-not-available': isNotAvailable }"
    >
      <slot />
    </div>
    <div class="w-full w-full absolute center flex flex-col items-center">
      <NotAvailableCopy
        class="mb-6 last:mb-0"
        v-bind="notAvailableCopy"
        v-if="isNotAvailable"
      />
      <slot name="cta" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NotAvailableCopy from "../not-available-copy/NotAvailableCopy.vue";

@Component({
  components: { NotAvailableCopy }
})
export default class extends Vue {
  @Prop() notAvailableCopy;
  @Prop() isLoading;
  @Prop() isNotAvailable;
}
</script>
<style lang="scss">
.not-available-blur {
  .wrapper {
    &.is-not-available {
      @apply pointer-events-none select-none overflow-hidden;
      filter: blur(16px);

      &:after {
        content: "";
        @apply bg-body inset-0 absolute opacity-60;
      }
    }
  }
}
</style>
