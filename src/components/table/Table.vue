<template functional>
  <table
    class="table w-full"
    :class="[data.class, data.staticClass, { 'side-offset': props.sideOffset }]"
  >
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<style lang="scss">
.table {
  @apply -ml-6;
  width: calc(100% + 48px);

  &.side-offset {
    td,
    th {
      &:nth-child(2) {
        @apply pl-6;
      }
      &:nth-last-child(2) {
        @apply pr-6;
      }
    }
  }

  .spacer {
    @apply w-6 border-transparent;
  }

  tr {
    &:last-child {
      td,
      th {
        @apply border-b;
      }
    }
    &.has-url {
      td,
      th {
        &:last-child {
          &:before {
            content: "\e902";
            font-family: "icomoon";
            @apply hidden absolute right-0 mr-6 top-1/2 transform -translate-y-1/2 font-normal text-font-primary z-10;
          }
        }
      }
    }
    &.has-href:hover {
      @apply bg-subdued;

      .spacer {
        @apply border-t border-alt z-10 relative;
      }

      td,
      th {
        &:last-child::before {
          @apply block;
        }
      }

      + tr {
        .spacer {
          @apply border-b-0;
        }
        td,
        td {
          @apply border-alt;
        }
      }
    }
  }

  th {
    @apply text-font-alt3 font-semibold text-14 py-2;
  }

  td {
    @apply py-4;
  }

  tr {
    &:not(:first-child) {
      td,
      th {
        @apply border-t;

        &:not(.spacer) {
          @apply border-alt;
        }
      }
    }
  }
  td,
  th {
    @apply text-left pr-3 align-middle;
  }
}
</style>
