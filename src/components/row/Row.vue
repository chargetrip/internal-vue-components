<template>
  <tr
    @click="onClick"
    class="c-row"
    :class="[
      `font-${fontWeight || 'normal'}`,
      `font-${fontFamily || 'inter'}`,
      `text-${color || 'font-primary'}`,
      { 'cursor-pointer has-href': url || to, 'has-url': url }
    ]"
  >
    <component class="spacer" :is="tag" />
    <slot />
    <component class="spacer" :is="tag" />
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CRow extends Vue {
  @Prop() url;
  @Prop() to;
  @Prop({ default: "td" }) tag;
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
