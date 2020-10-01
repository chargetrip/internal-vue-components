<template>
  <div
    class="c-banner flex flex items-center px-3"
    :class="type"
    v-if="!hidden && (description || $slots.default)"
  >
    <span class="mr-3" v-if="icon" :class="`icon-${icon}`" />
    <div class="description mr-3 flex-1">
      {{ description }}
      <slot />
    </div>
    <div
      class="icon-close ml-auto cursor-pointer"
      @click="hidden = true"
      v-if="type === 'warning'"
    />
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
  &.switcher {
    @apply bg-base pt-2 pb-5 -mb-3;
    box-shadow: inset 0px -10px 12px rgba(45, 45, 55, 0.32);
  }
  &.warning {
    @apply py-2 rounded-md border border-warning text-warning bg-warning-alt2;
  }
}
</style>
