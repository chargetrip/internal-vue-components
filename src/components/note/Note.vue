<template>
  <div
    class="c-note border border-warning rounded flex items-start gap-3 p-4"
    :class="{
      'flex-col': display === 'block'
    }"
  >
    <Tag color="warning" type="secondary" size="xs">{{ tag }}</Tag>
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
  @Prop({ tag: "Note" }) tag;
}
</script>
<style lang="scss">
.theme-dark {
  .c-note {
    background: rgba(51, 22, 0, 0.2);
  }
}
.c-note {
  background: rgba(252, 215, 186, 0.2);
  padding-bottom: 1.5rem !important;
}
</style>
