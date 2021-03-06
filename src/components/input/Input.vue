<template>
  <FormControl
    class="c-input"
    v-bind="$props"
    :label-inside="true"
    :label-always-visible="true"
    @click.native="() => (disabled ? null : input.focus())"
    @hover="$emit('hover', $event)"
    :class="{
      'has-prefix': prefix,
      'has-value': hasValue,
      'has-focus': focus,
      'has-label': label
    }"
  >
    <div class="flex box">
      <div class="prefix" v-if="prefix" v-html="prefix" />
      <div
        class="icon h-full flex items-center text-font-alt3 pl-2"
        v-if="icon"
        :class="`icon-${icon}`"
      />
      <div class="flex relative flex-1">
        <label
          class="pointer-events-none"
          :for="id"
          v-if="label"
          v-html="label"
        />
        <input
          ref="input"
          :value="value"
          :id="id"
          :name="name"
          :maxlength="maxlength"
          :max="max"
          :autocomplete="autocomplete"
          :type="type === 'number' ? 'text' : type"
          :readonly="readonly || disabled"
          :placeholder="placeholder"
          @keyup.stop
          @mouseenter="setHover(true)"
          @mouseleave="setHover(false)"
          @focus="setFocus(true)"
          @blur="onBlur"
          @input="onInput"
        />
        <span
          class="icon-checkmark absolute top-1/2 transform text-16 -translate-y-1/2 right-0 mr-3 text-accent"
          v-if="showCheckmark && validation && !validation.$invalid"
        />
      </div>
      <div
        class="icon hotkey bg-alt2 flex items-center justify-center w-5 h-5 rounded-sm my-auto mr-1"
        :class="`icon-${hotkey.icon}`"
        v-if="hotkey"
      />
      <div class="suffix" v-if="suffix">
        {{ suffix }}
      </div>
    </div>
  </FormControl>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Ref, Emit } from "vue-property-decorator";
import { Listen } from "@/utilities/decorators";
import Base from "@/mixins/base";
import FormControl from "@/components/form-control/FormControl.vue";

@Component({
  components: { FormControl }
})
export default class CInput extends Mixins(Base) {
  @Prop() public type!: string;
  @Prop() public icon!: string;
  @Prop() public hotkey!: { key: string; icon: string; fn: (input) => null };
  @Prop() public id!: string;
  @Prop() public placeholder!: string;
  @Prop() public validation!: object;
  @Prop() public errorMessage!: string;
  @Prop() public showError!: boolean;
  @Prop() public name!: string;
  @Prop() public autocomplete!: string;
  @Prop() public maxlength!: number;
  @Prop() public max!: number;
  @Prop() public readonly!: boolean;
  @Prop() public disabled!: boolean;
  @Prop() public showCheckmark!: boolean;
  @Prop() public label!: string;
  @Prop() public suffix!: string;
  @Prop() public prefix!: string;
  @Prop() public value!: string | number | null;
  @Ref("input") public input!: HTMLInputElement;
  public focus = false;
  public hover = false;

  @Listen("keyup") public onKeyDown(e) {
    e.preventDefault();
  }

  @Listen("keypress") public onKeypress(e) {
    if (!this.hotkey) return;

    if (e.key === this.hotkey.key) {
      e.preventDefault();
      this.hotkey.fn(this.input);
    }
  }

  public onInput(e) {
    const value = this.max
      ? Math.min(e.target.value, this.max).toString()
      : e.target.value;

    if (this.type === "number") {
      const parsed = parseFloat(value.replace(",", "."));

      e.target.value = value.replace(/[^0-9(.|,)]/g, "");

      return this.$emit("input", parsed || null, e);
    }

    this.$emit(
      "input",
      this.maxlength ? value.slice(0, this.maxlength) : value,
      e
    );
  }

  @Emit("focus") public setFocus(val) {
    this.focus = val;
    return val;
  }

  @Emit("blur") public onBlur(event) {
    this.setFocus(false);
    return event.target.value;
  }

  @Emit("hover") public setHover(val) {
    this.hover = val;

    return val;
  }

  get hasValue() {
    return (
      (this.value && this.value.toString().length) ||
      (this.type === "number" &&
        !isNaN(this.value as number) &&
        this.value !== null) ||
      this.focus ||
      this.placeholder
    );
  }
}
</script>

<style lang="scss">
.c-input {
  &[disabled] {
    input {
      @apply text-font-alt3 opacity-50 opacity-50 pointer-events-none;
    }
  }
  &.has-label {
    &.label-always-visible {
      .hotkey {
        @apply mr-3;
      }
      input {
        @apply pt-4;
      }
    }
  }
}
</style>
