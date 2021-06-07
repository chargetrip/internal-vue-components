import Theme from "../components/theme/Theme.vue";
import CImage from "../components/image/Image.vue";

export default {
  title: "components/Image",
  component: CImage,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { CImage, Theme },
    data: () => ({
      index: 0,
      interval: null
    }),
    mounted() {
      this.interval = setInterval(() => {
        this.index++;
      }, 5000);
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
    computed: {
      src() {
        return `https://picsum.photos/id/${this.index}/200/300`;
      }
    },
    template: `<Theme :dark-mode="darkMode">
      <CImage :style="{marginTop: '3000px'}" class="w-1/3" :src="src"/>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
