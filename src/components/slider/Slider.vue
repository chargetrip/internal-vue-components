<template>
  <div class="slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// import Swiper JS
import Swiper from "swiper";

@Component
export default class Slider extends Vue {
  @Prop() options;
  slider;

  mounted() {
    this.slider = new Swiper(".swiper-container", this.options);
  }
}
</script>

<style scoped>
@import "../../../node_modules/swiper/swiper-bundle.min.css";
</style>
