<template functional>
  <div
    class="c-modal leading-relaxed flex fixed inset-0 z-50"
    :class="[
      data.class,
      data.staticClass,
      { sm: props.size === 'sm', lg: props.size === 'lg' }
    ]"
  >
    <transition name="fade" :duration="100" appear>
      <div
        class="bg absolute cursor-pointer inset-0 bg-body opacity-80"
        @click="listeners.close()"
      />
    </transition>
    <transition name="slide-up" appear>
      <div
        class="content bg-base border rounded relative z-10 p-6 shadow-down-sm m-auto border-alt2 w-full"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
<style lang="scss">
.theme-light {
  .c-modal {
    > .content {
      @apply bg-body;
    }
  }
}
.c-modal {
  &.sm {
    > .content {
      max-width: 528px;
    }
  }

  &.lg {
    > .content {
      @apply p-0;
      height: 100%;
      max-height: 480px;
      max-width: 912px;
    }
  }
}

.slide-up-enter-active {
  @apply transition duration-200 delay-75 ease-in;
}
.slide-up-enter {
  @apply opacity-0 transform translate-y-4;
}
</style>
