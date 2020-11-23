<template>
  <component
    class="c-cell relative"
    :class="[`font-${fontWeight}`, `font-${fontFamily}`, `text-${color}`]"
    :is="tag"
  >
    <div class="bg border-b border-alt w-full h-full absolute top-0 left-0" />
    <div class="relative z-10">
      <slot />
    </div>
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
