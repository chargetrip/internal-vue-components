import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare global {
  interface Window {
    Intercom: any;
    zE: any;
    canUseWebP: any;
  }
}

declare module "vue/types/vue" {
  // 3. Declare augmentation for Vue
  interface Vue {
    $fileMap: object;
    $cloudinaryFolder: string;
    $img: any;
  }
}
