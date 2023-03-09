<template>
  <section
    class="app-section first:mt-0"
    :class="{ 'mt-12': titleTag === 'h3', 'mt-18': titleTag === 'h2' }"
  >
    <div class="pb-1 flex items-start" v-if="title">
      <Component class="skeleton" :is="titleTag" v-html="sanitizeHtml(title)" />
      <slot name="title" />
      <div class="flex ml-auto skeleton">
        <slot name="aside-title" />
      </div>
    </div>
    <slot />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ActionBar from "@/components/action-bar/ActionBar.vue";
import sanitizeHtml from "sanitize-html";
@Component({
  methods: { sanitizeHtml },
  components: { ActionBar }
})
export default class extends Vue {
  @Prop() title!: string;
  @Prop({ default: "h3" }) titleTag!: string;
}
</script>
<style lang="scss">
.app-section {
  h2,
  h3 {
    span {
      @apply text-font-alt3;
    }
  }
}
</style>
