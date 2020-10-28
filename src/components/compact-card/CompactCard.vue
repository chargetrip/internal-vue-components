<template>
  <div
    class="c-compact-card border border-alt border-solid flex-col py-5 px-4 bg-base rounded transition duration-300"
  >
    <div class="flex w-full items-center">
      <div
        class="icon mr-8 flex-shrink-0 w-10 h-10 text-20 text-white rounded-full flex items-center justify-center"
        v-if="image"
        :style="{ background: image.bg }"
        :class="`icon-${image.icon}`"
      />
      <div>
        <div class="title font-semibold" v-if="title">
          {{ title }}
        </div>
        <p class="text-font-alt3" v-if="description">
          {{ description }}
        </p>
      </div>
      <Button
        color="accent"
        size="sm"
        class="detail-button ml-auto"
        v-if="detail"
        @click="onToggle"
      >
        {{ detail.active ? "Save selection" : "Edit" }}
      </Button>
      <Component
        class="dynamic-cta ml-auto"
        v-bind="cta"
        :is="cta"
        v-on="cta.listeners || null"
        v-else-if="cta"
        v-model="cta.value"
      />
    </div>
    <Component
      class="component-detail relative pt-4 pl-18 flex-col w-full border-t border-alt mt-8"
      @input="detail.onInput"
      v-bind="detail.bind"
      v-model="detail.value"
      :is="detail.component"
      v-if="detail && detail.active"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";

@Component({
  components: { Button }
})
export default class CCompactCard extends Vue {
  @Prop() public title;
  @Prop() public description;
  @Prop() public image;
  @Prop() public button;
  @Prop() public detail;
  @Prop() public active;
  @Prop() public included;
  @Prop() public cta;

  @Emit("toggleActive") onToggle() {
    this.detail.active = !this.detail.active;

    return this.detail.active;
  }
}
</script>
