import Theme from "../components/theme/Theme.vue";
import Card from "../components/card/Card.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    img: { control: { type: "text" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: null
    }),
    components: { Card, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Card class="w-1/2" v-bind="$props" />
    </Theme>`
  };
};

export const Normal = Template.bind({});
Normal.args = {
  img: "https://i.imgur.com/Ba92TFZ.png",
  title: "Title",
  description: "Description"
};

export const LargeText = Template.bind({});
LargeText.args = {
  img: "https://i.imgur.com/Ba92TFZ.png",
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
};
