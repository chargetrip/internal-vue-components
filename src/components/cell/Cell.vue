<template>
  <component
    class="c-cell relative"
    :class="[
      `font-${fontWeight || 'normal'}`,
      `font-${fontFamily || 'inter'}`,
      `text-${color || 'font-primary'}`
    ]"
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
