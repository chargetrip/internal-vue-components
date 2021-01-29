<template functional>
  <div
    class="c-modal transition leading-relaxed duration-300 flex fixed inset-0 z-40"
    @click="$emit('close')"
    :class="[data.class, data.staticClass]"
  >
    <transition name="fade-in" appear>
      <div class="bg absolute inset-0 bg-body opacity-80" />
    </transition>
    <transition name="slide-up" appear>
      <div
        class="modal-content bg-base border rounded relative z-10 p-6 shadow-down-sm m-auto border-alt2"
        @click.stop
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
<style lang="scss">
.theme-light {
  .modal-content {
    @apply bg-body;
  }
}
.c-model {
  &:not(.active) {
    @apply invisible opacity-0 pointer-events-none;
  }
}

.slide-up-enter-active {
  @apply transition duration-300 ease-in;
}
.slide-up-enter {
  @apply opacity-0 transform translate-y-4;
}
</style>
