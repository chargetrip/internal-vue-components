<template>
  <div class="onboarding-content-container h-full px-6 flex text-center !mb-0">
    <div class="content py-12 w-full m-auto flex flex-col justify-between">
      <span class="icon text-48 mb-7" v-if="icon" :class="`icon-${icon}`" />
      <h2>
        {{ title }}
      </h2>
      <p class="mb-8 text-font-alt3 mt-2" v-html="sanitizeHtml(description)" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import sanitizeHtml from "sanitize-html";

@Component({ methods: { sanitizeHtml } })
export default class extends Vue {
  @Prop() title;
  @Prop() description;
  @Prop() icon;
}
</script>
<style lang="scss">
.theme-light .onboarding-content-container {
  @apply bg-subdued;
}
.onboarding-content-container {
  > .content {
    max-width: 448px;
  }
}
</style>
