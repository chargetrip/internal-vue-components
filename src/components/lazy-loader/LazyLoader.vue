<template>
  <div
    class="lazy-loader scrollbar overflow-y-scroll h-full"
    :class="{
      'skeleton-active': skeleton && !value && !page,
      'skeleton-container': skeleton
    }"
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
  @Prop() items;
  stopLoadingMore = false;
  debouncedLoadMore = debounce(this.loadMore.bind(this), 250);

  onScroll() {
    const elm =
      this.items?.[this.page * this.size]?.$el ||
      this.items?.[this.page * this.size] ||
      this.$slots.default?.[this.page * this.size]?.elm;

    if (!elm) return;

    const { top: containerTop } = this.$el.getBoundingClientRect();
    const { top, height } = elm.getBoundingClientRect();

    if (
      !this.stopLoadingMore &&
      this.value &&
      top + height - containerTop <= 0
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
