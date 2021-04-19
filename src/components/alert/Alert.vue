<template>
  <Modal class="c-alert" size="sm">
    <h2 class="mb-4" v-if="title">
      {{ title }}
    </h2>
    <div
      class="content"
      v-if="content"
      v-html="$options.filters.markdown(content)"
    />
    <div class="flex mt-6">
      <Button
        class="mr-2 last:mr-0"
        color="alt"
        size="sm"
        @click.native="$emit('close')"
        >Close</Button
      >
      <Button
        class="mr-2 last:mr-0"
        :class="{ 'ml-auto': !key }"
        v-bind="cta"
        :key="key"
        v-for="(cta, key) in ctas"
        @click.native="cta.callback"
      />
    </div>
  </Modal>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";
import Modal from "@/components/modal/Modal.vue";
import markdown from "@/filters/markdown";

@Component({
  components: { Button, Modal },
  filters: { markdown }
})
export default class CAlert extends Vue {
  @Prop({ default: "Oops something went wrong" }) public title!: string;
  @Prop() public content!: string;
  @Prop() public ctas!: string;
}
</script>
<style lang="scss">
.c-alert {
  p {
    @apply my-4 text-font-alt3;
  }

  strong {
    @apply text-font-primary;
  }
  ul {
    @apply list-disc pl-5 font-semibold -mt-3;
  }
}
</style>
