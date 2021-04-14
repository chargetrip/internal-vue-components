<template>
  <div class="c-radio-tree">
    <Radio
      class="h-14 border-b last:border-0 border-alt"
      v-for="(option, key) in options"
      :key="key"
      v-bind="option"
      :value="value"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import Radio from "@/components/radio/Radio.vue";
import Base from "@/mixins/base";

@Component({
  components: { Radio }
})
export default class CRadioTree extends Mixins(Base) {
  @Prop() options;
  @Prop() value;
}
</script>
