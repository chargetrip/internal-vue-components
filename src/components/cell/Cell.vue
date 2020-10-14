<template>
  <component
    :class="[`font-${fontWeight}`, `font-${fontFamily}`, `text-${color}`]"
    :is="tag"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import markdown from "@/filters/markdown";

@Component({
  filters: { markdown }
})
export default class CCell extends Vue {
  @Prop({ default: "td" }) tag;
  @Prop() fontWeight;
  @Prop() color;
  @Prop() fontFamily;
}
</script>
