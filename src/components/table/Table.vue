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
  &:not(.side-offset) {
    tr {
      @apply relative;

      td {
        &:first-child,
        &:last-child {
          &:after {
            content: "";
            height: calc(100% + 0.9px);
            top: -1px;
            @apply block opacity-0 absolute w-12 transform bg-subdued border-t border-b border-alt;
          }
        }

        &:first-child {
          &:after {
            @apply left-0 -translate-x-full;
          }
        }
        &:last-child {
          &:after {
            @apply right-0 translate-x-full;
          }
        }
      }
      &.has-href {
        &:hover {
          td {
            &:after {
              @apply opacity-100;
            }
          }
        }
      }
    }
  }
  tr {
    &.has-url {
      td,
      th {
        &:last-child {
          &:before {
            content: "\e916";
            font-family: "icomoon";
            @apply hidden absolute right-0 mr-6 top-1/2 transform -translate-y-1/2 font-normal;
          }
        }
      }
    }
    &.has-href:hover {
      td,
      th {
        &:last-child::before {
          @apply block;
        }
      }

      td {
        .bg {
          @apply bg-base;
        }
      }
    }
  }

  th {
    @apply text-font-alt3;
  }

  td,
  th {
    @apply text-left pr-3 py-4 align-middle;
  }
}
</style>
