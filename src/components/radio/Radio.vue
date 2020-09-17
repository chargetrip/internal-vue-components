<template>
  <div class="c-radio">
    <div class="options -m-1">
      <div
        class="option p-1 flex items-center"
        :key="key"
        v-for="(option, key) in options"
        :class="{ active: option.value === value }"
      >
        <div class="input-wrapper relative w-5 h-5 bg-accent rounded-full">
          <div class="dot center w-2 h-2 rounded-full bg-white"></div>
          <input
            class="box absolute inset-0 opacity-0"
            :value="option.value"
            :id="option.value"
            type="radio"
            :checked="option.value === value"
            @input="onInput($event.target.value)"
          />
        </div>
        <label
          class="cursor-pointer ml-3"
          :for="option.value"
          v-html="option.label"
        ></label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class CRadio extends Vue {
  @Prop() public label!: string;
  @Prop() public options!: object[];
  @Prop() public value!: string;

  @Emit("input") public onInput(val: string): string {
    return val;
  }
}
</script>

<style lang="scss">
.c-radio {
  .option {
    &:not(.active) {
      .input-wrapper {
        @apply bg-alt;

        .dot {
          @apply hidden;
        }
      }
    }
  }
}
</style>
