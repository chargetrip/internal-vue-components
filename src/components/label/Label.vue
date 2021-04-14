<template>
  <label
    :for="forLabel"
    v-if="label"
    class="c-label cursor-pointer flex"
    :class="{
      'flex-col': direction === 'col',
      'flex-col-reverse': direction === 'col-reverse'
    }"
  >
    <span class="label text-font-primary" v-html="label"></span>
    <span
      class="sub-label block text-font-alt3 text-12"
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
