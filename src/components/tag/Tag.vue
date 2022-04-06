<template functional>
  <div
    class="c-tag skeleton flex max-w-full items-center justify-center rounded-2xs h-6 px-2 text-font-primary text-14 font-semibold"
    v-on="listeners"
    :class="[
      data.class,
      data.staticClass,
      props.size,
      props.color,
      props.type,
      { transparent: props.transparent }
    ]"
  >
    <div class="truncate relative z-10">
      {{ props.title }}
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.theme-dark {
  .c-tag {
    &.premium {
      @apply bg-body border-alt;
    }
    &.alt4 {
      @apply bg-alt2;

      &:hover {
        @apply bg-alt;
      }
    }
  }
}
.theme-light.is-web {
  .c-tag {
    &.alt-2 {
      @apply bg-font-primary;
    }
  }
}
.c-tag {
  &.secondary {
    @apply text-12 h-6;
    @apply rounded-xl #{!important};

    &.xs {
      @apply h-5;
    }
  }

  &.premium {
    border-color: #e2cb80;
    @apply border bg-font-primary border-transparent;

    .truncate {
      background: transparent;
      background: linear-gradient(274.67deg, #eea145 -0.16%, #ffdaa8 99.84%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &.accent {
    @apply bg-accent text-white;

    &.transparent {
      @apply border-accent;
    }
  }

  &.error {
    @apply bg-error text-white;

    &.transparent {
      @apply border-error;
    }
  }

  &.warning {
    @apply bg-warning text-white;

    &.transparent {
      @apply border-warning;
    }
  }

  &.note {
    @apply bg-note text-white;

    &.transparent {
      @apply border-note;
    }
  }

  &.alt {
    @apply bg-alt;

    &.transparent {
      @apply border-alt;
    }
  }
  &.font-primary {
    @apply bg-font-primary text-body;

    &.transparent {
      @apply border-font-primary;
    }
  }
  &.alt2 {
    @apply bg-alt2;

    &.transparent {
      @apply border-alt2;
    }
  }
  &.alt3 {
    @apply bg-alt3 text-white;

    &.transparent {
      @apply border-alt3;
    }
  }
  &.alt4 {
    @apply bg-alt4 text-white;

    &.transparent {
      @apply border-alt4;
    }
  }
  &.font-alt3 {
    @apply bg-font-alt3 text-white;

    &.transparent {
      @apply border-font-alt3;
    }
  }

  &.transparent {
    @apply bg-transparent border;
  }

  p {
    @apply text-inherit;
  }
}
</style>
