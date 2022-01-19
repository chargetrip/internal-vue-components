import DateInput from "./DateInput.vue";

// @ts-ignore
DateInput.install = Vue => {
  Vue.component(DateInput.name, DateInput);
};

export default DateInput;
