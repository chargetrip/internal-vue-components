<template>
  <ul class="c-radio-tree">
    <li v-for="(option, key) in options" :key="key">
      <Radio
        v-if="!option.children"
        v-bind="option"
        :value="value"
        @input="$emit('input', $event)"
      />
      <template v-else>
        <div
          class="group-title cursor-pointer flex items-center"
          @click="index = key"
        >
          <Label
            class="cursor-pointer"
            :label="option.label || option.title || option.id"
            :sub-label="getLabel(option)"
          />
          <div
            class="icon-chevron-down text-16 cursor-pointer w-14 h-6 flex items-center justify-center ml-auto block"
            :class="{ 'transform rotate-180': index === key }"
          />
        </div>
        <ul class="children border-t border-base" v-if="index === key">
          <li v-for="(child, key) in option.children" :key="key" class="pl-4">
            <Radio
              v-bind="child"
              :value="value"
              @input="$emit('input', $event)"
            />
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import Radio from "@/components/radio/Radio.vue";
import Label from "@/components/label/Label.vue";
import Base from "@/mixins/base";

@Component({
  components: { Radio, Label }
})
export default class CRadioTree extends Mixins(Base) {
  @Prop() options;
  @Prop() value;
  @Prop() labelFn;
  index = null;

  getLabel(option) {
    return this.labelFn?.(option);
  }
}
</script>
<style lang="scss">
.c-radio-tree {
  .c-radio,
  .group-title {
    @apply py-4;
    //@apply h-14;
  }
  .group-title {
    .sub-label {
      @apply font-semibold;
    }
  }
  li {
    @apply border-b last:border-0 border-alt;
  }
}
</style>
