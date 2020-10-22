<template>
  <tr
    @click="onClick"
    class="c-row"
    :class="[
      `font-${fontWeight}`,
      `font-${fontFamily}`,
      `text-${color}`,
      { 'cursor-pointer has-href': url || to, 'has-url': url }
    ]"
  >
    <slot />
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CRow extends Vue {
  @Prop() url;
  @Prop() to;
  @Prop({ default: "normal" }) fontWeight;
  @Prop({ default: "font-primary" }) color;
  @Prop({ default: "body" }) fontFamily;

  onClick() {
    if (this.url) {
      window.open(this.url, "_blank");
    }

    if (this.to) {
      this.$router.push(this.to);
    }
  }
}
</script>
