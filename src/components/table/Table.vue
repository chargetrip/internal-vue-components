<template functional>
  <table
    class="table w-full"
    :class="[data.class, data.staticClass, { 'side-offset': props.sideOffset }]"
  >
    <slot />
  </table>
</template>

<style lang="scss">
.table {
  &.side-offset {
    td,
    th {
      &:first-child {
        @apply pl-8;
      }
      &:last-child {
        @apply pr-8;
      }
    }
  }
  tr {
    &.has-url:hover {
      td,
      th {
        @apply bg-base;
      }
    }
    &:not(:last-child) {
      @apply border-b border-alt;
    }
  }

  td {
    @apply h-14;
  }

  th {
    @apply h-10;
  }

  td,
  th {
    @apply text-left;
  }
}
</style>
