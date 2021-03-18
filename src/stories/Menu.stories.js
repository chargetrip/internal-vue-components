import Menu from "../components/menu/Menu.vue";
import "../assets/styles/index.scss";
import router from "../router";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    title: { control: { type: "text" } },
    gap: { control: { type: "select", options: [3, 6, 10] } },
    direction: { control: { type: "select", options: ["row", "column"] } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router: router,
    props: Object.keys(argTypes),
    components: { Menu },
    template: `<div class="theme-dark flex items-start">
      <Menu v-bind="$props"/>
    </div>`
  };
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  direction: "column",
  items: [
    { title: "About us" },
    { title: "Presskit" },
    { title: "Careers" },
    { title: "Contact us" }
  ]
};
