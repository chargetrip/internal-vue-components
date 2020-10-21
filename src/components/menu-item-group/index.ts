import MenuItemGroup from "./MenuItemGroup.vue";

// @ts-ignore
MenuItemGroup.install = Vue => {
  Vue.component(MenuItemGroup.name, MenuItemGroup);
};

export default MenuItemGroup;
