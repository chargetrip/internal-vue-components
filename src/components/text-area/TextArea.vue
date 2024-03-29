<template>
  <FormControl
    class="c-textarea"
    v-bind="$props"
    :label-inside="true"
    :focus="focus"
    :label-always-visible="true"
    @click.native="() => (disabled ? null : textarea.focus())"
    @hover="$emit('hover', $event)"
    :class="{
      'has-prefix': prefix,
      'has-value': hasValue,
      'has-focus': focus,
      'has-label': label
    }"
  >
    <div class="flex box">
      <div class="prefix" v-if="prefix" v-html="sanitizeHtml(prefix)" />
      <div
        class="icon h-auto flex items-center text-font-alt3 pl-2"
        v-if="icon"
        :class="`icon-${icon}`"
      />
      <div class="flex flex-col relative flex-1">
        <label
          class="pointer-events-none"
          :for="id"
          v-if="label"
          v-html="sanitizeHtml(label)"
        />
        <textarea
          ref="textarea"
          :rows="rows"
          :value="value"
          :id="id"
          :name="name"
          :maxlength="maxlength"
          :autocomplete="autocomplete"
          :readonly="readonly || disabled"
          :placeholder="placeholder"
          @keyup.stop
          @mouseenter="setHover(true)"
          @mouseleave="setHover(false)"
          @focus="setFocus(true)"
          @paste="$emit('paste', $event)"
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
import { Component, Prop, Ref, Emit } from "vue-property-decorator";
import { Listen } from "@/utilities/decorators";
import FormControl from "@/components/form-control/FormControl.vue";
import { FormControlProps } from "@/utilities/utilities";
import sanitizeHtml from "sanitize-html";

@Component({
  methods: { sanitizeHtml },
  components: { FormControl }
})
export default class CTextArea extends FormControlProps {
  @Prop() public maxlength!: number;
  @Prop() public autoresize!: boolean;
  @Prop({ default: 1 }) public rows!: number;

  @Ref("textarea") public textarea!: HTMLTextAreaElement;
  public focus = false;
  public hover = false;

  @Listen("keyup") public onKeyDown(e) {
    e.preventDefault();
  }

  @Listen("keypress") public onKeypress(e) {
    if (!this.hotkey) return;

    if (e.key === this.hotkey.key) {
      e.preventDefault();
      this.hotkey.fn(this.textarea);
    }
  }

  public onInput(event: InputEvent): void {
    const elem = event.currentTarget as HTMLTextAreaElement;
    const value = elem.value;

    if (this.autoresize) {
      // If the inner height is greater than the content height
      elem.style.height = "auto";
      // If the content height is greater than the inner height
      elem.style.height = elem.scrollHeight + "px";
    }

    this.$emit(
      "input",
      this.maxlength ? value.slice(0, this.maxlength) : value,
      event
    );
  }

  @Emit("focus") public setFocus(val) {
    this.focus = val;
    return val;
  }

  @Emit("blur")
  @Emit("input")
  public onBlur(event) {
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
      this.focus ||
      this.placeholder
    );
  }
}
</script>

<style lang="scss">
.c-textarea {
  @apply bg-none;

  &[disabled] {
    textarea {
      @apply text-font-alt3 opacity-50 pointer-events-none;
    }
  }

  &.has-label {
    &.label-always-visible {
      .hotkey {
        @apply mr-3;
      }
      textarea {
        @apply mt-3;
      }
      label {
        @apply top-7;
      }
      label + textarea {
        @apply mt-6;
      }
      .box {
        @apply h-auto min-h-14;
      }
    }
  }

  .box {
    @apply h-auto min-h-14;
  }

  textarea {
    @apply outline-none w-full h-full bg-transparent px-3 font-semibold shadow-none mt-3 mb-2;
    resize: none;
    &::placeholder {
      @apply text-font-alt3;
    }
  }

  label + textarea {
    @apply mt-7;
  }
}
</style>
