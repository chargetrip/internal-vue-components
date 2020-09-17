import AlertComp from "../components/alert/Alert.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/Alert",
  component: AlertComp,
  argTypes: {
    title: { control: { type: "text" } },
    content: { control: { type: "text" } },
    ctas: { control: { type: "object" } }
  }
};

const AlertTemplate = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { AlertComp },
    template: `<div class="theme-dark">
      <AlertComp v-bind="$props" />
    </div>`
  };
};

export const Alert = AlertTemplate.bind({});
Alert.args = {
  title: "Error message",
  content: `Are you sure you want to delete this project? This action can not be undone.
<br/>   
You will permanently lose:
<br/><br/>
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
