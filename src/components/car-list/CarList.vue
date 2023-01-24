<template>
  <CheckboxTreeList
    :options="options"
    v-bind="$props"
    @input="$emit('input', $event)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CheckboxTreeList from "../checkbox-tree-list/CheckboxTreeList.vue";

@Component({ components: { CheckboxTreeList } })
export default class extends Vue {
  @Prop() value;
  @Prop() all;
  @Prop() readonly;
  @Prop() labelFn;
  @Prop() nestedLabelFn;
  @Prop() overflow!: boolean;
  @Prop() carList;

  getCarName({ model, version, chargetrip_version }) {
    return `${model} ${chargetrip_version || version}`;
  }

  get normalizedCarList() {
    return this.carList
      ?.slice(0)
      ?.sort((a, b) =>
        a.naming.make < b.naming.make
          ? -1
          : a.naming.make > b.naming.make
          ? 1
          : 0
      )
      .reduce((obj, item) => {
        if (!obj[item.naming.make]) obj[item.naming.make] = [];
        obj[item.naming.make].push({
          ...item,
          name: this.getCarName(item.naming)
        });
        return obj;
      }, {});
  }

  get options() {
    return Object.entries(this.normalizedCarList)
      .map(([key, value]) => ({
        label: key,
        checkboxId: key,
        children: (value as any[]).map(val => ({
          label: val.name,
          id: val.id,
          checkboxId: val.id
        }))
      }))
      .sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      });
  }
}
</script>
