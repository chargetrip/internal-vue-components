<template>
  <div
    class="loader w-full"
    :class="{
      resolved: isResolved,
      'h-full w-full flex items-center justify-center':
        !isResolved && !skeleton,
      'skeleton-container': skeleton,
      'skeleton-active': skeleton && !isResolved
    }"
  >
    <div
      class="placeholder flex flex-col items-center p-6 m-auto"
      v-if="!isResolved && !skeleton"
    >
      <div class="bars flex gap-1 h-8 mb-6">
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
      </div>
      <NotAvailableCopy v-bind="$props" />
    </div>
    <slot v-if="isResolved || skeleton" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import NotAvailableCopy from "../not-available-copy/NotAvailableCopy.vue";
import Button from "../button/Button.vue";
import { callbackExtender } from "@/utilities/utilities";

@Component({
  components: { NotAvailableCopy, Button }
})
export default class extends Vue {
  @Prop() description;
  @Prop() skeleton;
  @Prop() title;
  @Prop() queryList;
  @Prop() onCancel;
  @Prop() onResponse;
  @Prop() onError;
  @Prop() minimum;
  @Prop() forceSkeleton;
  index = 0;
  resolvedQuery = true;
  response = null;

  @Watch("query", { immediate: true })
  async onQueryChange() {
    if (!this.query) return;

    this.resolvedQuery = false;

    const response = await callbackExtender(this.query, this.minimum ?? 1500);

    this.index++;
    this.onResponse?.(response);
    this.$emit("onResponse", response);
    this.resolvedQuery = true;
  }

  get query() {
    return this.queryList[this.index];
  }

  get isResolved() {
    if (this.forceSkeleton) return false;

    return this.resolvedQuery;
  }

  cancel() {
    this.onCancel?.();
  }
}
</script>
<style lang="scss">
.loader {
  .loader-bar {
    animation-duration: 0.6s;
    animation-name: flow;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    @apply w-1 h-2 bg-font-primary top-1/2 relative transform translate-y-4;
  }

  .loader-bar {
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation-delay: 0.5s;
    }
    &:nth-child(6) {
      animation-delay: 0.6s;
    }
  }

  @keyframes flow {
    0% {
      transform: translateY(16px);
    }

    100% {
      transform: translateY(-16px);
    }
  }
}
</style>
