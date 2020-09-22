<template>
  <div class="c-range rounded bg-base">
    <div class="px-3 py-6">
      <div class="h-2 w-full bg-alt rounded-sm relative" ref="bar">
        <div
          class="knob-l"
          :style="{ left: `${leftPercentage}%` }"
          @mousedown="onMouseDown($event, 'left')"
        />
        <div
          class="knob-r"
          :style="{ left: `${rightPercentage}%` }"
          @mousedown="onMouseDown($event, 'right')"
        />
        <div
          class="bg absolute w-full bg-accent h-full w-full"
          :style="{
            left: `${leftPercentage}%`,
            width: `${rightPercentage - leftPercentage}%`
          }"
        ></div>
      </div>
    </div>
    <Duo
      :left="normalizedLeft"
      :value="shadowValue"
      v-if="labelLeft && labelRight"
      @blur="onBlur"
      :right="normalizedRight"
    />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Mixins,
  Prop,
  Ref,
  Watch
} from "vue-property-decorator";
import Input from "@/components/input/Input.vue";
import Duo from "@/components/duo/Duo.vue";
import { Listen } from "@/utilities/decorators";
import Base from "@/mixins/base";

@Component({
  components: { Duo }
})
export default class CRange extends Mixins(Base) {
  @Ref("bar") public bar;
  @Prop() public value!: number[];
  @Prop() public labelLeft!: string;
  @Prop() public labelRight!: string;
  @Prop({ default: 0 }) public min!: number;
  @Prop() public max!: number;
  public grabbing = false;
  public property: string | null = null;
  public shadowValue = this.value;

  @Watch("value", { immediate: true }) public onValueChange() {
    this.shadowValue = this.value;
  }

  get normalizedLeft() {
    return {
      label: this.labelLeft,
      is: Input,
      type: "number",
      max: this.max
    };
  }

  get leftPercentage() {
    if (!this.value) return 0;
    return (this.shadowValue[0] / this.max) * 100;
  }

  get rightPercentage() {
    if (!this.value) return 0;
    return (this.shadowValue[1] / this.max) * 100;
  }

  @Emit("input") public onBlur() {
    return [
      Math.max(this.shadowValue[0], 0),
      Math.max(this.shadowValue[0], Math.min(this.max, this.shadowValue[1]))
    ];
  }

  get normalizedRight() {
    return {
      label: this.labelRight,
      is: Input,
      type: "number",
      max: this.max
    };
  }

  public onMouseDown(e, property) {
    this.property = property;
    this.grabbing = true;
  }

  @Listen("mousemove") public onMouseMove(e) {
    if (this.grabbing) {
      const barRect = this.bar.getBoundingClientRect();
      const decimal = Math.min(
        Math.max(0, (e.clientX - barRect.left) / barRect.width),
        1
      );

      if (this.property === "left") {
        this.shadowValue = [
          Math.min(this.shadowValue[1], Math.round(this.max * decimal)),
          this.shadowValue[1]
        ];
      } else {
        this.shadowValue = [
          this.shadowValue[0],
          Math.max(this.shadowValue[0], Math.round(this.max * decimal))
        ];
      }
    }
  }

  @Listen("mouseup") @Emit("input") public onMouseUp() {
    this.grabbing = false;

    return this.shadowValue;
  }
}
</script>

<style lang="scss">
.c-range {
  .knob {
    &-l,
    &-r {
      @apply w-6 h-6 z-10 rounded-full bg-white absolute transform -translate-y-1/2 top-1/2 -translate-x-1/2;
      cursor: grab;

      &:after,
      &:before {
        content: "";
        @apply block absolute transform -translate-y-1/2 left-1/2 -translate-x-1/2 top-1/2 h-2 bg-alt3 w-px rounded py-1;
      }
      &:before {
        @apply -ml-px;
      }
      &:after {
        @apply ml-px;
      }
    }
  }
}
</style>