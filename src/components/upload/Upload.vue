<template>
  <div
    class="c-upload relative group bg-base hover:bg-alt hover:border-alt2 transition duration-300 border-dashed border-alt2"
  >
    <div
      class="icon icon-add absolute right-0 opacity-0 group-hover:opacity-100 transition duration-300 top-0 transform translate-x-1/2 -translate-y-1/2 icon-circle"
    />
    <div class="absolute w-full h-full flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <p class="text-font-primary font-semibold">
          {{ label }}
        </p>
      </div>
      <input
        class="opacity-0 absolute w-full h-full cursor-pointer"
        :accept="accept"
        type="file"
        @input="$emit('input', $event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Ref } from "vue-property-decorator";
import { FormControlProps } from "@/utilities/utilities";

@Component
export default class CUpload extends FormControlProps {
  @Prop({ default: "Drag images here" }) public label!: string;
  @Ref("input") public input!: HTMLInputElement;
  @Prop() accept;
}
</script>

<style lang="scss">
.upload {
  .icon-add {
    --tw-translate-y: -25%;
  }
}
</style>
