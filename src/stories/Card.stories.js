import Card from "../components/card/Card.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    img: { control: { type: "text" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: null
    }),
    components: { Card },
    template: `<div class="theme-dark">
      <Card class="w-1/2" v-bind="$props" />
    </div>`
  };
};

export const Normal = Template.bind({});
Normal.args = {
  img: "https://staging.account.chargetrip.com/resources/documentation.svg",
  title: "Title",
  description: "Description"
};

export const LargeText = Template.bind({});
LargeText.args = {
  img: "https://staging.account.chargetrip.com/resources/documentation.svg",
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
};
