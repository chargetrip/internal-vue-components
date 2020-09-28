import Snackbar from "../components/snackbar/Snackbar.vue";
import "../assets/styles/index.scss";
import { icons } from "./utils";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
  argTypes: {
    title: { control: { type: "text" } },
    icon: { control: { type: "select", options: icons } },
    type: {
      control: {
        type: "select",
        options: ["error", "warning", "success", "note", "alt"]
      }
    }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Snackbar },
    template: `<div class="theme-dark flex items-start">
      <Snackbar v-bind="$props"/>
    </div>`
  };
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  icon: "checkmark",
  title: "Update passed"
};

export const Alt = Template.bind({});
Alt.args = {
  type: "alt",
  icon: "filter",
  title: "Check your settings"
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  icon: "log-out",
  title: "Something went wrong.."
};

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  type: "success",
  icon: "checkmark",
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
};
