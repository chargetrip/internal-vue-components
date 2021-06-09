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
      index2: 5,
      interval: null
    }),
    mounted() {
      let flip = 0;
      this.interval = setInterval(() => {
        flip = flip ? 0 : 1;

        if (flip) {
          this.index++;
        } else {
          this.index2++;
        }
      }, 5000);
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
    computed: {
      src() {
        return `https://picsum.photos/id/${this.index}/200/300`;
      },
      src2() {
        return `https://picsum.photos/id/${this.index2}/200/300`;
      }
    },
    template: `<Theme :dark-mode="darkMode">
    <div class="flex" :style="{marginTop: '3000px'}">
      <CImage class="w-1/3" :src="src"/>
      <CImage class="w-1/3" :src="src2"/>
      
    </div>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
