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
    <strong class="label text-font-primary" v-html="label" />
    <span
      class="font-normal sub-label text-font-alt3"
      :class="subLabelClass"
      v-if="subLabel"
      v-html="subLabel"
    />
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CLabel extends Vue {
  @Prop() forLabel!: string;
  @Prop() label!: string;
  @Prop() subLabel!: string;
  @Prop() subLabelClass!: string;
  @Prop({ default: "col" }) direction!: string;
}
</script>
