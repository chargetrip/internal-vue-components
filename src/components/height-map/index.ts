import HeightMap from "./HeightMap.vue";
// @ts-ignore
HeightMap.install = Vue => {
  Vue.component(HeightMap.name, HeightMap);
};

export default HeightMap;
