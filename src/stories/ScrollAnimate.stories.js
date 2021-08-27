import Theme from "../components/theme/Theme.vue";
import { ScrollAnimateDirective } from "@";

export default {
  title: "components/ScrollAnimate",
  component: Theme,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Theme },
    directives: { ScrollAnimate: ScrollAnimateDirective },
    data: () => ({
      reference: null,
      keyframes: [
        {
          name: "translateY",
          from: 120,
          to: 0,
          start: 0,
          end: 0.4
        },
        {
          name: "opacity",
          from: 0,
          to: 1,
          start: 0,
          end: 0.4
        },
        {
          name: "translateY",
          from: 0,
          to: -120,
          start: 0.6,
          end: 1
        },
        {
          name: "opacity",
          from: 1,
          to: 0,
          start: 0.6,
          end: 1
        }
      ],
      colors: ["red", "blue", "pink"]
    }),
    mounted() {
      this.reference = this.$refs.screen[1];

      console.log(this.$refs);
    },
    template: `<Theme :dark-mode="darkMode" class="relative">
      <div class="absolute inset-0">
        <div class="sticky top-0 h-screen flex items-center flex-col justify-center">
          <div v-if="reference" v-scroll-animate="{
                    keyframes,
                    reference
                  }">
            <h1>
              Hey
            </h1>
            <ul data-v-f58a9f50="">
              <li data-v-f58a9f50="">
                <p data-v-f58a9f50="">Custom range setting</p>
              </li>
              <li data-v-f58a9f50="">
                <p data-v-f58a9f50="">Car configuration data</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="h-screen" ref="screen" v-for="(num, key) in 3" :key="num" :style="{'background-color': colors[key]}"></div>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  sticky: true,
  color: "body",
  position: "top"
};
