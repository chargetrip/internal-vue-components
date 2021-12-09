<template>
  <div
    v-if="!hide"
    class="code-block text-font-primary rounded border border-alt text-14 group"
    :class="{
      'bg-base': query || title || isSingleLine,
      'has-type': codeType,
      'is-single-line': isSingleLine
    }"
  >
    <header
      v-if="title"
      class="flex h-10 px-6 font-semibold items-center border-b border-alt text-font-alt2 relative z-10"
    >
      <div class="title">
        <span v-if="prefix" class="text-font-alt3 mr-1">{{ prefix }} / </span>
        {{ title }}
      </div>
      <Copy
        v-if="!codeType"
        class="ml-auto"
        :value="trimmedSlot"
        :is-copied="isCopied"
        @copied="isCopied = $event"
      />
    </header>
    <div class="wrapper">
      <ActionBar
        v-if="type"
        class="px-6 items-center ctas -mt-12 mb-6"
        :sticky="true"
      >
        <Tag v-if="codeType" v-bind="codeType.tag" />

        <Copy
          v-if="type !== 'response'"
          class="ml-auto flex"
          :value="trimmedSlot"
          :is-copied="isCopied"
          @copied="isCopied = $event"
        />
      </ActionBar>
      <div class="relative flex">
        <div
          v-if="isSingleLine"
          class="absolute right-0 flex items-center top-0 h-full z-10 opacity-0 group-hover:opacity-100"
        >
          <div class="w-10 h-full bg-gradient-to-l from-base to-transparent" />
          <Copy
            class="bg-base rounded-r flex items-center h-full px-3"
            v-if="isSingleLine"
            :value="trimmedSlot"
            :is-copied="isCopied"
            @copied="isCopied = $event"
          />
        </div>
        <pre
          class="font-mono px-6 py-4 font-base overflow-x-scroll"
        ><code v-for="(line, key) in codeLines" :key="key" v-html="line"/></pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import highlightjs from "../../utilities/highlight";
import ActionBar from "../action-bar/ActionBar.vue";
import Tag from "../tag/Tag.vue";
import Icon from "@/components/icon/Icon.vue";
import Copy from "@/components/copy/Copy.vue";

@Component({ components: { Copy, Icon, ActionBar, Tag } })
export default class CodeBlock extends Vue {
  @Prop() title;
  @Prop({ default: "Query" }) queryType;
  @Prop() lang;
  @Prop() type;
  @Prop() query;
  @Prop() tag;
  @Prop() prefix;
  isCopied = false;
  hide = false;

  types = {
    mutation: {
      tag: {
        title: "Mutation",
        type: "secondary",
        color: "alt4"
      }
    },
    subscription: {
      tag: {
        title: "Subscription",
        type: "secondary",
        color: "alt4"
      }
    },
    query: {
      tag: {
        title: "Query",
        type: "secondary",
        color: "alt4"
      }
    },
    response: {
      tag: {
        title: "Response",
        type: "secondary",
        class: "border border-font-alt3 bg-body text-font-alt3"
      }
    }
  };

  get codeType() {
    return this.types[this.type];
  }

  get trimmedSlot(): string {
    return this.$slots?.default?.[0]?.text?.trim() || "";
  }
  get codeLines() {
    try {
      return highlightjs
        .highlight(this.trimmedSlot, {
          language: this.lang
        })
        ?.value.split("\n");
    } catch (e) {
      this.hide = true;

      return [];
    }
  }

  get isSingleLine() {
    return this.codeLines?.length === 1;
  }
}
</script>
<style lang="scss">
.code-block {
  &.is-single-line {
    code::before {
      @apply hidden;
    }
    pre {
      @apply px-3 py-2;
    }
  }
  &.is-single-line {
    pre {
      @apply pl-6;
    }
  }
  code {
    @apply block whitespace-nowrap;

    counter-increment: listing;

    &::before {
      @apply mr-4 text-font-alt3;

      content: counter(listing);
    }

    &::after {
      content: "";
      @apply pr-8 inline-block;
    }
  }
}
</style>
