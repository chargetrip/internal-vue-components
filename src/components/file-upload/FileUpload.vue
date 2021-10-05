<template>
  <FormControl
    class="c-fileupload"
    v-bind="$props"
    :label-inside="true"
    :focus="focus"
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
    <div
      class="bg-base box flex-1 border-alt border border-dashed rounded px-4 text-font-alt3"
    >
      <div class="py-4 flex items-center relative">
        <span :class="`icon-${icon} text-16 mr-3 pointer-events-none`" />
        <p class="pointer-events-none">
          <strong v-if="multiple">
            Drag files here&hellip;
          </strong>
          <strong v-else>
            Drag file here&hellip;
          </strong>
        </p>
        <Button color="alt" class="relative ml-auto" size="sm">
          Browse
        </Button>
        <input
          ref="input"
          class="absolute w-full h-full top-0 left-0 opacity-0"
          type="file"
          :files="files"
          :multiple="multiple"
          :accept="filetypes.length ? filetypes.join(',') : null"
          :disabled="disabled"
          @mouseenter="setHover(true)"
          @mouseleave="setHover(false)"
          @focus="setFocus(true)"
          @input="onInput"
          @blur="onBlur"
        />
      </div>
      <ul class="list" v-if="this.files.length">
        <li
          class="flex items-center justify-between"
          v-for="(file, index) in this.files"
          :key="`${file.name}-${file.lastModified}-${file.size}`"
        >
          {{ file.name }}
          <button class="icon-delete w-4 h-4" @click="removeFile(index)" />
        </li>
      </ul>
    </div>
  </FormControl>
</template>

<script lang="ts">
import { Component, Prop, Ref, Emit } from "vue-property-decorator";
import { Listen } from "@/utilities/decorators";
import FormControl from "@/components/form-control/FormControl.vue";
import Button from "@/components/button/Button.vue";
import { FormControlProps } from "@/utilities/utilities";

@Component({
  components: { FormControl, Button }
})
export default class CFileUpload extends FormControlProps {
  @Prop({ default: false }) public multiple!: boolean;
  @Prop({ default: () => [] }) public filetypes!: Array<string>;
  @Prop({ default: "circle-arrow-down" }) public icon!: string;
  @Ref("input") public input!: HTMLInputElement;

  public focus = false;
  public hover = false;
  private files: Array<File> = [];

  @Listen("keyup") public onKeyDown(event: KeyboardEvent) {
    event.preventDefault();
  }

  @Listen("keypress") public onKeypress(event: KeyboardEvent) {
    if (!this.hotkey) return;

    if (event.key === this.hotkey.key) {
      event.preventDefault();
      this.hotkey.fn(this.input);
    }
  }

  public removeFile(index: number): void {
    // Remove the selected file.
    this.files.splice(index, 1);
  }

  // Upload element
  private get upload(): HTMLInputElement {
    return this.$refs.input as HTMLInputElement;
  }

  public onInput(): void {
    const files: ReadonlyArray<File> = [...(this.upload.files ?? [])];

    // Clear the file buffer.
    this.files = [];

    // Push ReadonlyArray contents to an array to allow for mutation.
    for (const file of files) {
      this.files.push(file);
    }

    this.$emit("input", this.files.length ? this.files : []);
  }

  @Emit("focus")
  public setFocus(val: boolean): boolean {
    this.focus = val;

    return val;
  }

  @Emit("blur")
  @Emit("input")
  public onBlur(): Array<File> {
    this.setFocus(false);

    return this.files;
  }

  @Emit("hover")
  public setHover(val: boolean): boolean {
    this.hover = val;

    return val;
  }

  get hasValue(): boolean {
    return this.files.length > 0 || this.focus;
  }
}
</script>

<style lang="scss">
.c-fileupload {
  input[type="file"] {
    /* While the <input> element might be visually hidden, if the `font-size`
     * is not set to '0', hovering over the (hidden) "Browse files" text will 
     * change the cursor to 'auto' / 'default'.
     */
    @apply cursor-pointer text-0;
  }

  &.disabled {
    input[type="file"] {
      @apply cursor-not-allowed;
    }
  }

  &.has-label {
    &.label-always-visible .hotkey {
      @apply mr-3;
    }
    input {
      @apply pt-4;
    }
  }

  & .list {
    @apply flex flex-col gap-4 border-alt border-t py-4;
  }

  &:not(.error) {
    &.has-hover {
      .box {
        @apply bg-base;
      }
    }
  }
}
</style>
