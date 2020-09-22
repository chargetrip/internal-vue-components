<template>
  <div class="c-duo flex items-stretch mt-2" v-if="left && right">
    <Component
      class="left flex-1"
      :class="{
        'has-focus': focusLeft || focusRight,
        'has-hover': hoverLeft || hoverRight
      }"
      ref="left"
      :is="left.is"
      v-bind="left"
      :value="value[0]"
      @hover="hoverLeft = $event"
      @focus="focusLeft = $event"
      @input="onInput(0, $event)"
      @blur="onBlur(0, $event)"
    />
    <div
      class="transition duration-300 w-px bg-alt2 border-t border-b"
      :class="{
        'border-alt2': !focusLeft || !focusRight,
        'border-accent': focusLeft || focusRight,
        'border-alt3': (hoverLeft || hoverRight) && !(focusLeft || focusRight)
      }"
    />
    <Component
      class="right flex-1"
      :is="right.is"
      v-bind="right"
      ref="right"
      :value="value[1]"
      @hover="hoverRight = $event"
      @focus="focusRight = $event"
      @input="onInput(1, $event)"
      @blur="onBlur(1, $event)"
      :class="{
        'has-focus': focusLeft || focusRight,
        'has-hover': hoverLeft || hoverRight
      }"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Input from "@/components/input/Input.vue";

@Component({
  components: { Input }
})
export default class CDuo extends Vue {
  @Prop() public left!: object;
  @Prop() public right!: object;
  @Prop() public value!: string[] | number[];
  public focusRight = false;
  public focusLeft = false;
  public hoverRight = false;
  public hoverLeft = false;

  @Emit("input") public onInput(index, event) {
    return this.onEvent(index, event);
  }

  @Emit("blur") public onBlur(index, event) {
    if (index) {
      this.focusLeft = false;
    } else {
      this.focusRight = false;
    }
    return this.onEvent(index, event);
  }

  public onEvent(index, event) {
    this.value[index] = event;

    return [this.value[0], this.value[1]];
  }
}
</script>

<style lang="scss">
.c-duo {
  box-shadow: 0px -10px 40px rgba(0, 0, 0, 0.5);

  .c-form-control {
    &:first-child .box {
      @apply rounded-r-none border-r-0;
    }
    &:last-child .box {
      @apply rounded-l-none border-l-0;
    }
  }
}
</style>
