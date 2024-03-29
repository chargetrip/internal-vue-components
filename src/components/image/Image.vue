<template>
  <div class="c-image relative">
    <template v-if="debug">
      {{ normalizedSrc }}
    </template>
    <div
      v-if="normalizedShowPlaceholder"
      class="placeholder transition-ease-out w-full"
      :style="{
        'padding-bottom': `${(dataObject.height / dataObject.width) * 100}%`
      }"
    />
    <img
      v-if="normalizedSrc"
      v-lazy-load="{ src: normalizedSrc, isImage: true }"
      :alt="alt"
      class="max-w-none transition-opacity duration-500 top-0"
      :class="{
        'w-full h-full absolute object-cover': params.h && params.w,
        'h-full mx-auto w-auto': params.h && !params.w,
        'w-full absolute': !params.h && params.w && normalizedShowPlaceholder
      }"
      @load="$emit('load')"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import lazyLoad from "../../directives/lazy-load";

@Component({ name: "c-image", directives: { "lazy-load": lazyLoad } })
export default class CImage extends Vue {
  @Prop({ default: () => ({ w: "auto" }) }) params;
  @Prop() src;
  @Prop() alt;
  @Prop() debug;
  @Prop({ default: true }) showPlaceholder;
  normalizedSrc: null | string = null;
  dpr = 1;

  beforeMount() {
    this.dpr = window.devicePixelRatio || 1;
  }

  mounted() {
    this.normalizedSrc = this.getSrc();
  }

  get dataObject() {
    return this.$fileMap?.[this.src] || {};
  }

  get normalizedShowPlaceholder() {
    return (
      this.showPlaceholder && this.dataObject.height && this.dataObject.width
    );
  }

  @Watch("data") @Watch("src") onSrcChange() {
    this.normalizedSrc = this.getSrc();
  }

  canUseWebP() {
    if (window.canUseWebP) {
      return window.canUseWebP;
    }

    const elem: HTMLCanvasElement = document.createElement("canvas");

    if (elem.getContext && elem.getContext("2d")) {
      const val = elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;

      window.canUseWebP = val;
      return val;
    }

    window.canUseWebP = false;
    return false;
  }

  replaceAuto(params, prop, elementProp) {
    if (params[prop] === "auto") {
      const size = Math.ceil((this.$el[elementProp] * this.dpr) / 25) * 25;

      if (size === 0) {
        delete params[prop];
      } else {
        params[prop] = size;
      }
    }

    return params;
  }

  getSrc() {
    if (this.src.includes("svg")) {
      return this.src;
    }
    let params = { ...this.params };

    params = this.replaceAuto(params, "h", "offsetHeight");
    params = this.replaceAuto(params, "w", "offsetWidth");

    params.width = params.w;
    params.height = params.h;

    delete params.w;
    delete params.h;

    if (this.canUseWebP()) {
      params.format = "webp";
    }

    return (
      this.$img?.(this.pathWithFolder, params, {
        provider: "cloudinary"
      }) || this.src
    );
  }

  get pathWithFolder() {
    return [
      this.$cloudinaryFolder?.replaceAll("/", "") || "",
      this.src.slice(0, 1) === "/" ? this.src.slice(1) : this.src
    ].join("/");
  }
}
</script>

<style lang="scss">
.c-image {
  img {
    &:not(.loaded) {
      @apply opacity-0;
    }
  }
}
</style>
