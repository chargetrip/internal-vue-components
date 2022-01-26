<template>
  <FormControl
    v-bind="$props"
    :class="{ 'is-warning': isWarning, active: id === value }"
    class="c-radio flex items-center cursor-pointer"
    @click.native="$emit('input', id)"
  >
    <div class="input-wrapper w-4 h-4 relative rounded-full cursor-pointer">
      <input
        type="radio"
        :id="id"
        :value="value"
        :checked="id === value"
        class="absolute opacity-0 inset-0"
        @change="$emit('input', id)"
      />
    </div>
    <Label
      :for-label="id"
      :sub-label="subLabel"
      :direction="labelDirection"
      :label="label"
      v-if="label"
      @click.native.stop
      class="pointer-events-none ml-3"
    />
  </FormControl>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { FormControlProps } from "@/utilities/utilities";
import FormControl from "@/components/form-control/FormControl.vue";
import Label from "@/components/label/Label.vue";

@Component({
  components: { FormControl, Label }
})
export default class CRadio extends FormControlProps {
  @Prop() value!: string;
  @Prop() subLabel!: string;
  @Prop() labelDirection;
  @Prop() isWarning!: boolean;
}
</script>
<style lang="scss">
.c-radio {
  &.is-warning {
    &.active {
      .input-wrapper {
        @apply bg-warning #{!important};
      }
    }
    .input-wrapper {
      @apply border-warning bg-warning-alt2 #{!important};
    }
    .sub-label {
      @apply text-warning;
    }
  }
  &.active {
    .input-wrapper {
      &:after {
        content: "";
        width: 6px;
        height: 6px;
        @apply bg-white rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 block;
      }
    }
  }
}
</style>
