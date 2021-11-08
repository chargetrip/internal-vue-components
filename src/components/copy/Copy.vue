<template>
  <div class="copy">
    <Icon
      class="cursor-pointer"
      name="clipboard"
      @click.native.stop="$emit('copied', true)"
      v-if="!isCopied"
    />
    <strong v-else class="flex items-center"
      >Copied <span class="icon-circle-checkmark ml-1"
    /></strong>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Icon from "@/components/icon/Icon.vue";
import { copy } from "@/utilities/utilities";

@Component({ components: { Icon } })
export default class Copy extends Vue {
  @Prop({ required: true }) value!: string;
  @Prop() isCopied!: boolean;

  @Watch("isCopied") onIsCopiedChange(): void {
    if (!this.isCopied) return;

    copy(this.value);

    setTimeout(() => {
      this.$emit("copied", false);
    }, 3000);
  }
}
</script>
