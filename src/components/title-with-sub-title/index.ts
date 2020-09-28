import TitleWithSubTitle from "./TitleWithSubTitle.vue";

// @ts-ignore
TitleWithSubTitle.install = Vue => {
  Vue.component(TitleWithSubTitle.name, TitleWithSubTitle);
};

export default TitleWithSubTitle;
