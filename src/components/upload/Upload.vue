<template>
  <div
    class="c-upload relative group bg-base hover:bg-alt hover:border-alt2 transition duration-300 border-dashed border-alt2"
  >
    <div
      class="icon icon-add absolute right-0 opacity-0 group-hover:opacity-100 transition duration-300 top-0 transform translate-x-1/2 -translate-y-1/2 icon-circle"
    />
    <img
      class="absolute z-10 max-w-full max-h-full m-auto object-cover"
      :src="src"
      alt=""
      v-if="src"
    />
    <div class="absolute w-full h-full flex items-center justify-center">
      <div class="flex flex-col items-center justify-center" v-if="!src">
        <p class="text-font-primary font-semibold">
          {{ label }}
        </p>
      </div>
      <input
        class="opacity-0 absolute w-full h-full cursor-pointer"
        accept="image/gif, image/jpeg, image/png"
        type="file"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop, Ref } from "vue-property-decorator";
import Base from "@/mixins/base";

@Component
export default class CUpload extends Mixins(Base) {
  @Prop() public value!: string | number | null;
  @Prop({ default: "Drag images here" }) public label!: string;
  @Ref("input") public input!: HTMLInputElement;
  public src: string | ArrayBuffer | null | undefined = null;

  @Emit("input") public onInput(e) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = e => {
        this.src = e.target?.result;
      };

      reader.readAsDataURL(e.target.files[0]);
    }

    return e;
  }
}
</script>

<style lang="scss">
.upload {
  .icon-add {
    --transform-translate-y: -25%;
  }
}
</style>
