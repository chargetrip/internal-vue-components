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

    tr {
      &.has-href:hover {
        td,
        th {
          @apply bg-base;
        }
      }
    }
  }
  tr {
    &.has-url {
      td,
      th {
        &:last-child {
          @apply relative;

          &:after {
            content: "\e90b";
            font-family: "icomoon";

            @apply hidden absolute right-0 mr-6 top-1/2 transform -translate-y-1/2 font-normal;
          }
        }
      }
    }
    &.has-href:hover {
      td,
      th {
        &:last-child::after {
          @apply block;
        }
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
    @apply h-10 text-font-alt2;
  }

  td,
  th {
    @apply text-left pr-3;
  }
}
</style>
