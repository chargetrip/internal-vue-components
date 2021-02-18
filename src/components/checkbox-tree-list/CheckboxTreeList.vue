<template>
  <CheckboxTree
    class="checkbox-tree-list"
    v-bind="$props"
    :class="{ readonly: readonly }"
    @input="$emit('input', $event)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CheckboxTree from "../checkbox-tree/CheckboxTree.vue";

@Component({ components: { CheckboxTree } })
export default class extends Vue {
  @Prop() value;
  @Prop() labelFn;
  @Prop() readonly;
  @Prop() nestedLabelFn;
  @Prop() all;
  @Prop() options;
}
</script>
<style lang="scss">
.checkbox-tree-list {
  &.readonly {
    .c-checkbox {
      @apply pointer-events-none;
    }

    .icon-chevron-down {
      @apply pointer-events-auto;
    }

    .input-wrapper,
    > .c-checkbox {
      @apply hidden;
    }

    li ul {
      .c-checkbox:not(.active) {
        @apply opacity-20;
      }
    }

    label {
      @apply ml-0;
    }
  }
}
</style>
