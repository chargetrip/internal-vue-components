<template>
  <div class="modal-top-content flex-1 flex-col flex">
    <h3 class="title" v-if="title" v-html="sanitizeHtml(title)" />
    <div
      class="text-font-alt3 description mt-1 mb-6"
      v-if="description"
      v-html="sanitizeHtml($options.filters.markdown(description))"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import markdown from "@/filters/markdown";
import sanitizeHtml from "sanitize-html";

@Component({ methods: { sanitizeHtml }, filters: { markdown } })
export default class extends Vue {
  @Prop() title;
  @Prop() description;
}
</script>
