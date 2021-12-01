<template>
  <div class="modal-top-content flex-1 flex-col flex">
    <h3 class="title" v-if="title" v-html="title" />
    <div
      class="text-font-alt3 description mt-1 mb-6"
      v-if="description"
      v-html="$options.filters.markdown(description)"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import markdown from "@/filters/markdown";

@Component({ filters: { markdown } })
export default class extends Vue {
  @Prop() title;
  @Prop() description;
}
</script>
