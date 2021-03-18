import WebsiteHeader from "./WebsiteHeader.vue";
// @ts-ignore
WebsiteHeader.install = Vue => {
  Vue.component(WebsiteHeader.name, WebsiteHeader);
};

export default WebsiteHeader;
