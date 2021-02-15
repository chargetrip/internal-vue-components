import CarList from "./CarList.vue";

// @ts-ignore
CarList.install = Vue => {
  Vue.component(CarList.name, CarList);
};

export default CarList;
