<template>
  <a class="c-card group block" target="_blank" rel="noopener" :href="href">
    <div class="image-wrapper w-full relative" v-if="img">
      <img
        class="w-full pt-4 absolute transform -translate-x-1/2 left-1/2 bottom-0"
        :src="img"
        :alt="title"
      />
    </div>
    <div
      class="title text-16 mb-1 mt-4 flex items-center font-semibold"
      v-if="title"
    >
      {{ title
      }}<span
        class="icon ml-2 icon-arrow-up-right opacity-0 group-hover:opacity-100 transition duration-300"
      ></span>
    </div>
    <p class="text-font-alt3" v-if="description">
      {{ description }}
    </p>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class CCard extends Vue {
  @Prop() public href!: string;
  @Prop() public img!: string;
  @Prop() public description!: string;
  @Prop() public title!: string;
}
</script>

<style lang="scss">
.c-card {
  .image-wrapper {
    &:after {
      content: "";
      padding: 0 0 45%;
      @apply block;
    }
  }
}
</style>
