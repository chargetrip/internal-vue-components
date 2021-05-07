<template>
  <Modal class="c-alert" size="sm">
    <ModalContent
      :title="title"
      :description="$options.filters.markdown(content)"
    >
      <div class="flex">
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
    </ModalContent>
  </Modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";
import Modal from "@/components/modal/Modal.vue";
import markdown from "@/filters/markdown";
import ModalContent from "@/components/modal-content/ModalContent.vue";

@Component({
  components: { Button, Modal, ModalContent },
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
