// 1. Make sure to import 'vue' before declaring augmented types
import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    listeners: string[];
  }
}
