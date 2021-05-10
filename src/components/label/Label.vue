<template>
  <label
    :is="forLabel ? 'label' : 'div'"
    :for="forLabel"
    v-if="label"
    class="c-label flex"
    :class="{
      'flex-col': direction === 'col',
      'flex-col-reverse': direction === 'col-reverse'
    }"
  >
    <strong class="label text-font-primary" v-html="label" />
    <span
      class="sub-label font-normal text-font-alt3"
      v-if="subLabel"
      v-html="subLabel"
    />
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CLabel extends Vue {
  @Prop() forLabel;
  @Prop() label;
  @Prop() subLabel;
  @Prop({ default: "col" }) direction;
}
</script>
