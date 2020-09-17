import Banner from "./Banner.vue";

// @ts-ignore
Banner.install = Vue => {
  Vue.component(Banner.name, Banner);
};

export default Banner;
