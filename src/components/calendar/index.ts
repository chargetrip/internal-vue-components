import Calendar from "./Calendar.vue";

// @ts-ignore
Calendar.install = Vue => {
  Vue.component(Calendar.name, Calendar);
};

export default Calendar;
