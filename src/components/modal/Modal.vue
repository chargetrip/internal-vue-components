<template functional>
  <div
    class="c-modal leading-relaxed flex fixed inset-0 z-50"
    :class="[data.class, data.staticClass]"
  >
    <transition name="fade" :duration="100" appear>
      <div
        class="bg absolute cursor-pointer inset-0 bg-body opacity-80"
        @click="listeners.close()"
      />
    </transition>
    <transition name="slide-up" appear>
      <div
        class="modal-content bg-base border rounded relative z-10 p-6 shadow-down-sm m-auto border-alt2"
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
  @apply transition duration-200 delay-75 ease-in;
}
.slide-up-enter {
  @apply opacity-0 transform translate-y-4;
}
</style>
