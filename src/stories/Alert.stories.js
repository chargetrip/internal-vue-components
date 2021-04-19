import AlertComp from "../components/alert/Alert.vue";
import "../assets/styles/index.scss";
import Theme from "../components/theme/Theme.vue";

export default {
  title: "Components/Modal",
  component: AlertComp,
  argTypes: {
    title: { control: { type: "text" } },
    content: { control: { type: "text" } },
    size: { control: { type: "select", options: ["sm", "lg"] } },
    ctas: { control: { type: "object" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const AlertTemplate = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { AlertComp, Theme },
    methods: {
      getRandomColor() {
        return `rgba(${[
          Math.random() * 255,
          Math.random() * 255,
          Math.random() * 255,
          1
        ].join(",")})`;
      }
    },
    template: `<Theme :dark-mode="darkMode">
      <AlertComp v-bind="$props" />
    </Theme>`
  };
};

export const Alert = AlertTemplate.bind({});
Alert.args = {
  title: "Error message",
  size: "sm",
  content: `Are you sure you want to delete this project? This action can not be undone.
  
**You will permanently lose:**

- Project ID
- The settings of this project
- All your applications and their app IDs`,
  ctas: [
    {
      title: "Delete",
      color: "error",
      size: "sm"
    }
  ]
};

export const MinimalText = AlertTemplate.bind({});
MinimalText.args = {
  title: "Error",
  size: "sm",
  content: `Are y`,
  ctas: [
    {
      title: "Delete",
      color: "error",
      size: "sm"
    }
  ]
};
