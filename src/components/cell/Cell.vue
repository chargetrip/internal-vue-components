<template>
  <td :class="[`font-${fontWeight}`, `font-${fontFamily}`, `text-${color}`]">
    <slot />
  </td>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CCell extends Vue {
  @Prop({ default: "normal" }) fontWeight;
  @Prop({ default: "font-primary" }) color;
  @Prop({ default: "body" }) fontFamily;
}
</script>
