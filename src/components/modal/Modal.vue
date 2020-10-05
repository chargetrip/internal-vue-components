<template functional>
  <div
    class="c-modal transition leading-relaxed duration-300 flex fixed inset-0 z-40"
    @click="$emit('close')"
    :class="[data.class, data.staticClass]"
  >
    <div class="bg absolute inset-0 bg-body opacity-80"></div>
    <div
      class="content bg-base border rounded relative z-10 p-6 shadow m-auto border-alt2"
      @click.stop
    >
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.theme-light {
  .content {
    @apply bg-body;
  }
}
.c-model {
  &:not(.active) {
    @apply invisible opacity-0 pointer-events-none;
  }
}
</style>
