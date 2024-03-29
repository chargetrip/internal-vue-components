<template>
  <nav
    class="c-tab-group bg-base flex h-8 p-0.5 rounded-sm items-center relative"
    :disabled="isDisabled"
  >
    <div
      class="absolute my-0.5 inset-0 bg-alt rounded-sm origin-left transition"
      :style="{
        transform: `translateX(${translateX}px)`,
        width: `${width}px`
      }"
    />
    <template v-for="({ icon, label }, key) in items">
      <div
        ref="item"
        :key="key"
        :class="{ 'is-icon': icon, 'is-text': label }"
        class="relative z-10 h-full flex items-center justify-center rounded-sm cursor-pointer item"
        @click="$emit('input', key)"
      >
        <Icon :has-paths="true" :name="icon" v-if="icon" />
        <strong v-if="label">
          {{ label }}
        </strong>
      </div>
      <div
        :class="{ 'opacity-0': value - 1 === key || value === key }"
        class="h-5 mx-0.5 w-px bg-subdued transition"
        :key="`divider-${key}`"
        v-if="key < items.length - 1"
      />
    </template>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import Icon from "@/components/icon/Icon.vue";
@Component({
  components: { Icon }
})
export default class TabGroup extends Vue {
  @Ref("item") itemElList!: HTMLElement[];
  @Prop() items!: { label: string; icon: string }[];
  @Prop() value!: number;
  @Prop() isDisabled!: boolean;
  width = 1;
  translateX = 0;

  mounted() {
    this.onValueChange();
  }
  @Watch("value") onValueChange(): void {
    const { left: containerLeft } = this.$el.getBoundingClientRect();
    const { width, left } = this.itemElList[this.value].getBoundingClientRect();

    this.width = width;
    this.translateX = left - containerLeft;
  }
}
</script>
<style lang="scss">
.c-tab-group {
  &[disabled] {
    @apply cursor-not-allowed opacity-50;

    .item {
      @apply pointer-events-none;
    }
  }

  .item {
    &.is-text {
      @apply px-3;
    }
    &.is-icon {
      @apply w-7;
    }
  }
}
</style>
