<template>
  <div
    class="not-available-copy text-center flex flex-col items-center max-w-lg"
  >
    <div class="icon text-24 mb-2" :class="`icon-${icon}`" v-if="icon" />
    <div class="relative">
      <h3>
        {{ title }}
      </h3>
      <img
        class="absolute right-0 transform translate-x-full mb-2 -mr-4 bottom-0"
        src="/arrow-create-app.svg"
        alt="Create app indicator"
        v-if="arrow"
      />
    </div>
    <p class="text-font-alt3">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() description!: string;
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() arrow!: boolean;
}
</script>
