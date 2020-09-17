<template>
  <ModalComponent class="c-alert max-w-md">
    <h5 class="mb-4">
      {{ title }}
    </h5>
    <div v-html="$options.filters.markdown(content)" />
    <div class="flex mt-6 justify-end">
      <Button class="mr-auto last:mr-0" color="alt" size="sm" @click="close"
        >Cancel</Button
      >
      <Button
        class="mr-2 last:mr-0"
        v-bind="cta"
        :key="key"
        v-for="(cta, key) in ctas"
        v-on="cta.listeners"
      />
    </div>
  </ModalComponent>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";
import ModalComponent from "@/components/modal-component/ModalComponent.vue";

@Component({
  components: { Button, ModalComponent }
})
export default class CAlert extends Vue {
  @Prop({ default: "Oops something went wrong" }) public title!: string;
  @Prop() public content!: string;
  @Prop() public ctas!: string;

  @Emit("close") public close(): boolean {
    return true;
  }
}
</script>
<style lang="scss">
.c-alert {
  ul {
    @apply list-disc pl-5 font-semibold;
  }
}
</style>
