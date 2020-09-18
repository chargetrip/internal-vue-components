<template>
  <div
    class="c-banner flex border py-2 flex items-center rounded-md px-3"
    :class="type"
    v-if="!hidden && (description || $slots.default)"
  >
    <span class="mr-3" v-if="icon" :class="`icon-${icon}`" />
    <div class="description mr-3">
      {{ description }}
      <slot />
    </div>
    <div class="icon-close ml-auto cursor-pointer" @click="hidden = true" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class CBanner extends Vue {
  @Prop() public icon;
  @Prop({ default: "warning" }) public type;
  @Prop() public description;
  public hidden = false;

  @Watch("hidden") @Emit("hidden") public onHide() {
    return this.hidden;
  }
}
</script>

<style lang="scss">
.c-banner {
  &.warning {
    @apply border-warning text-warning bg-warning-alt2;
  }
  &.error {
    @apply border-error text-error bg-error-alt2;
  }
  &.note {
    @apply border-note text-note bg-note-alt2;
  }
  &.success {
    @apply border-success text-success bg-success-alt2;
  }
}
</style>
