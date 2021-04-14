<template>
  <FormControl
    v-bind="$props"
    class="flex items-center cursor-pointer"
    @click.native="$emit('input', id)"
  >
    <div
      class="c-radio w-4 h-4 relative rounded-full bg-alt border border-alt3 hover:border-alt4 cursor-pointer"
      :class="{ active: id === value }"
    >
      <input
        type="radio"
        :id="id"
        :value="value"
        :checked="id === value"
        class="absolute opacity-0 inset-0"
        @change="$emit('input', id)"
      />
    </div>
    <label class="ml-3 cursor-pointer" :for="id"> {{ label || id }} </label>
  </FormControl>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { FormControlProps } from "@/utilities/utilities";
import FormControl from "@/components/form-control/FormControl.vue";

@Component({
  components: { FormControl }
})
export default class CRadio extends FormControlProps {
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
