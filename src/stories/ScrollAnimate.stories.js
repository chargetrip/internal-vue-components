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
      references: [],
      keyframes: [
        {
          name: "translateY",
          from: 120,
          to: 0,
          start: 0,
          end: 0.3
        },
        {
          name: "opacity",
          from: 0,
          to: 1,
          start: 0,
          end: 0.1
        },
        {
          name: "translateY",
          from: 0,
          to: -120,
          start: 0.3,
          end: 0.4
        },
        {
          name: "opacity",
          from: 1,
          to: 0,
          start: 0.3,
          end: 0.4
        }
      ],
      colors: ["red", "blue", "pink", "violet", "orange"]
    }),
    mounted() {
      this.references = this.$refs.screen;
    },
    template: `<Theme :dark-mode="darkMode" class="relative">
      <div class="absolute inset-0" v-for="(num, key1) in 3" :key="'sdsdsd' + key1">
        <div class="sticky top-0 h-screen flex items-center flex-col justify-center">
          <div v-scroll-animate="{
                    keyframes,
                    reference: references[key1]
                  }">
            <h1>
              Hey {{num}}
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
      <div class="h-screen"/>
      <div class="h-screen" ref="screen" v-for="(num, key2) in 5" :key="'sds' + key2" :style="{'background-color': colors[key2]}"></div>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  sticky: true,
  color: "body",
  position: "top"
};
