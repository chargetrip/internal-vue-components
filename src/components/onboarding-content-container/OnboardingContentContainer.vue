<template>
  <div class="onboarding-content-container px-6 flex text-center !mb-0">
    <div class="content py-12 w-full m-auto flex flex-col justify-between">
      <span class="icon text-48 mb-7" v-if="icon" :class="`icon-${icon}`" />
      <h1>
        {{ title }}
      </h1>
      <p class="mb-8 text-font-alt3 mt-2" v-html="description" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() title;
  @Prop() description;
  @Prop() icon;
}
</script>
<style lang="scss">
.onboarding-content-container {
  > .content {
    max-width: 448px;
  }
}
</style>
