<template>
  <div
    class="note-comp border border-warning rounded p-6 flex items-start gap-3"
    :class="{ 'flex-col': display === 'block' }"
  >
    <Tag color="warning" type="secondary" size="xs">Note</Tag>
    <div class="text-font-alt">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Tag from "../tag/Tag.vue";

@Component({ components: { Tag } })
export default class extends Vue {
  @Prop({ default: "inline" }) display;
}
</script>
<style lang="scss">
.theme-dark {
  .note-comp {
    background: rgba(51, 22, 0, 0.2);
  }
}
.note-comp {
  background: rgba(252, 215, 186, 0.2);
  padding-bottom: 1.5rem !important;
}
</style>
