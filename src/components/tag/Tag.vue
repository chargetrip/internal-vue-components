<template functional>
  <div
    class="c-tag flex max-w-full items-center justify-center rounded-2xs h-6 px-2 text-font-primary text-14 font-semibold"
    :class="[data.class, data.staticClass, props.color, props.type]"
  >
    <div class="truncate relative z-10">
      {{ props.title }}
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.c-tag {
  &.secondary {
    @apply rounded-xl text-12 h-auto h-5;
  }

  &.premium {
    border-color: #e2cb80;
    @apply border bg-body;

    .truncate {
      background: transparent;
      background: linear-gradient(
          205.57deg,
          #e2cb80 13.64%,
          #8c6e3f 44.85%,
          #c7a250 67.49%,
          #96702f 91.91%
        ),
        linear-gradient(0deg, #c4c4c4, #c4c4c4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &.accent {
    @apply bg-accent text-white;
  }

  &.error {
    @apply bg-error text-white;
  }

  &.warning {
    @apply bg-warning text-white;
  }

  &.note {
    @apply bg-note text-white;
  }
  &.alt {
    @apply bg-alt;
  }
  &.font-primary {
    @apply bg-font-primary text-body;
  }
  &.alt2 {
    @apply bg-alt2;
  }
  &.alt3 {
    @apply bg-alt3 text-white;
  }
  &.alt4 {
    @apply bg-alt4 text-white;
  }
  &.font-alt3 {
    @apply bg-font-alt3 text-white;
  }
}
</style>
