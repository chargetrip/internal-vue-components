<template>
  <label
    :is="forLabel ? 'label' : 'div'"
    :for="forLabel"
    v-if="label"
    class="flex c-label"
    :class="{
      'flex-col': direction === 'col',
      'flex-col-reverse': direction === 'col-reverse'
    }"
  >
    <strong class="label text-font-primary" v-html="sanitizeHtml(label)" />
    <span
      class="font-normal sub-label text-font-alt3"
      :class="subLabelClass"
      v-if="subLabel"
      v-html="sanitizeHtml(subLabel)"
    />
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import sanitizeHtml from "sanitize-html";

@Component({ methods: { sanitizeHtml } })
export default class CLabel extends Vue {
  @Prop({ required: false }) forLabel!: string;
  @Prop({ required: true }) label!: string;
  @Prop({ required: false }) subLabel!: string;
  @Prop({ required: false }) subLabelClass!: string;
  @Prop({ default: "col", required: false }) direction!: string;
}
</script>
