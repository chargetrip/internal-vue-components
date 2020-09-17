<template functional>
  <div
    class="c-modal-component bg-base border rounded relative z-10 p-6 shadow m-auto border-alt2"
    :class="[data.class, data.staticClass]"
  >
    <slot />
  </div>
</template>
