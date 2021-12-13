<template>
  <div
    class="lazy-loader scrollbar overflow-y-scroll h-full skeleton-container"
    :class="{ 'skeleton-active': skeleton && !value && !page }"
    @scroll="onScroll"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { callbackExtender } from "@/utilities/utilities";
import debounce from "lodash/debounce";

@Component
export default class extends Vue {
  @Prop({ default: () => ({}) }) params;
  @Prop({ default: 20 }) size;
  @Prop() value;
  @Prop() query;
  @Prop({ default: true }) skeleton;
  @Prop() minimum;
  @Prop() page;
  stopLoadingMore = false;
  debouncedLoadMore = debounce(this.loadMore.bind(this), 250);

  onScroll(e) {
    const { target } = e;
    if (
      !this.stopLoadingMore &&
      this.value &&
      target.scrollTop + target.offsetHeight > target.scrollHeight - 400
    ) {
      this.$emit("pageChange", this.page + 1);
    }
  }

  @Watch("params")
  @Watch("page", { immediate: true })
  async onPropChange() {
    this.$emit("input", false);
    this.debouncedLoadMore();
  }

  async loadMore() {
    const response = await callbackExtender(
      () =>
        this.query({
          ...this.params,
          size: this.size,
          page: this.page
        }),
      !this.page ? this.minimum ?? 1500 : 0
    );

    this.stopLoadingMore = !response.length;

    this.$emit("input", true);
    this.$emit("initLoaded");
  }
}
</script>
