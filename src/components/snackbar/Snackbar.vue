<template>
  <div
    class="c-snackbar overflow-hidden bg-alt px-4 text-font-primary font-semibold max-w-full flex transition duration-700 ease-in-out rounded-md items-center h-10 border border-alt2"
    :class="type"
  >
    <div class="dot rounded-full relative" :class="`bg-${type}`">
      <div class="w-3 h-3 rounded-full absolute center opacity-20"></div>
    </div>
    <div class="title pl-2 pr-6 truncate" v-if="title">
      {{ title }}
    </div>
    <span
      class="icon absolute right-0 bottom-0 text-40 text-white opacity-20 transform translate-y-1/4 translate-x-1/4"
      :class="`icon-${icon}`"
      v-if="icon"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class CSnackbar extends Vue {
  @Prop() private icon!: string | null;
  @Prop() private title!: string | null;
  @Prop() private type!: string | null;
}
</script>

<style lang="scss">
.c-snackbar {
  .dot {
    width: 6px;
    height: 6px;

    > div {
      background: inherit;
    }
  }
}
</style>
