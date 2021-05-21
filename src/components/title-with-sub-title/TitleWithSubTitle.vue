<template>
  <Label
    class="c-title-with-subtitle p-4"
    direction="col-reverse"
    :sub-label="subTitle"
    :label="normalizedTitle"
  />
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Label from "../label/Label.vue";

@Component({ components: { Label } })
export default class TitleWithSubTitle extends Vue {
  @Prop() subTitle;
  @Prop() title;
  @Prop() prefix;
  @Prop() suffix;

  get normalizedTitle() {
    return `${this.prefix || ""} ${
      typeof this.title === "undefined" || this.title === null
        ? "-"
        : this.title
    } ${this.suffix || ""}`;
  }
}
</script>
