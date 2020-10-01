<template>
  <div
    class="table grid rounded relative"
    :style="{
      'grid-template-columns': `repeat( ${columns.length +
        (selectable ? 1 : 0)}, auto )`
    }"
  >
    <div
      class="col th font-semibold text-14 text-font-alt2 tracking-wide"
      v-for="(col, c) in columns"
      :key="c"
      :class="{
        'last-col': c === columns.length - 1,
        'first-col': !c,
        'prev-hover': hoverRow === 0
      }"
    >
      {{ col }}
    </div>
    <div class="col th" v-if="selectable">
      <Checkbox v-model="allChecked" icon="minus" />
    </div>
    <template v-for="(row, r) in rows">
      <Component
        class="col td"
        :is="(row[c] && row[c].is) || div"
        v-for="(col, c) in columns"
        :key="`${c}-${r}`"
        v-bind="typeof row[c] === 'object' ? row[c] : null"
        @mouseenter.native="hoverRow = r"
        @mouseleave.native="hoverRow = null"
        :class="{
          'prev-hover': hoverRow === r + 1,
          hover: hoverRow === r,
          'last-row': r === rows.length - 1,
          'last-col': c === columns.length - 1,
          'first-col': !c
        }"
      >
        <Component
          :is="row[c].is || div"
          v-bind="row[c].is ? row[c] : null"
          v-html="row[c].title || row[c].title === 0 ? row[c].title : row[c]"
          v-if="!row[c].children"
        />
        <Component
          v-for="(child, childKey) in row[c].children"
          :is="child.is"
          :key="childKey"
          v-bind="child"
          v-else
        />
      </Component>
      <div
        class="col td"
        :key="`download-${r}`"
        :class="{ 'last-row': r === rows.length - 1 }"
        v-if="selectable"
      >
        <Checkbox v-model="downloads[r].value" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import Checkbox from "@/components/checkbox/Checkbox.vue";
import Div from "@/components/div/Div.vue";

@Component({
  components: { Checkbox }
})
export default class CTable extends Vue {
  @Prop() columns!: string[];
  @Prop() rows!: string[] | object[];
  @Prop() selectable!: boolean;
  allChecked = false;

  div = Div;
  downloads: { value: boolean }[] = [];
  hoverRow: number | null = null;

  beforeMount() {
    this.downloads = (this.rows as object[]).map(() => ({ value: false }));
  }

  @Watch("allChecked") onAllCheckedChange() {
    this.downloads = this.downloads.map(() => ({ value: this.allChecked }));
  }

  @Watch("downloads", { deep: true }) @Emit("input") onDownloadsChange() {
    return this.downloads.filter(download => download.value).map((x, i) => i);
  }
}
</script>

<style lang="scss">
.table {
  a {
    @apply outline-none;
  }

  &:not(.no-hover) {
    .col {
      &.first-col,
      &.last-col {
        @apply relative;

        &:after {
          content: "";
          @apply block w-8 mt-1 h-full absolute bg-body;
        }
      }
    }
  }

  .col {
    @apply h-14 flex items-center;

    &.th {
      @apply h-10;
    }

    &.first-col {
      @apply pl-8;
      &:after {
        @apply left-0;
      }
    }

    &.last-col {
      @apply pr-8;

      &:after {
        @apply right-0;
      }
    }

    &.hover {
      @apply bg-base;

      &.first-col,
      &.last-col {
        &:after {
          @apply hidden;
        }
      }
    }

    &:not(.last-row) {
      @apply border-b border-t border-alt;
      border-top-color: transparent;

      &.hover {
        border-top-color: var(--alt);
      }

      &.prev-hover {
        border-bottom-color: transparent;
      }
    }
  }
}
</style>
