<template>
  <div
    class="c-radio w-4 h-4 relative rounded-full bg-alt border border-alt3 hover:border-alt4 cursor-pointer"
    :class="{ active: value }"
    @click="$emit('input', !value)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class CRadio extends Vue {
  @Prop() value;
}
</script>
<style lang="scss">
.c-radio {
  &.active {
    @apply bg-accent border-accent-alt;

    &:after {
      content: "";
      width: 6px;
      height: 6px;
      @apply bg-white rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 block;
    }
  }
}
</style>
