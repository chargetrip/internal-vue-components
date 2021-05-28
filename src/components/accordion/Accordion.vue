<template>
  <div class="accordion">
    <h2 :id="id" v-if="title">
      {{ title }}
    </h2>
    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { slugify } from "@/utilities/utilities";

@Component
export default class Accordion extends Vue {
  @Prop() title;
  @Prop() description;

  get id() {
    return slugify(this.title || "");
  }
}
</script>
