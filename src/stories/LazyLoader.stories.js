import Theme from "../components/theme/Theme.vue";
import LazyLoader from "@/components/lazy-loader/LazyLoader";
import Button from "@/components/button/Button.vue";

export default {
  title: "components/LazyLoader",
  component: { LazyLoader, Theme },
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Theme, LazyLoader, Button },
    data: () => ({ items: [], page: 0, isLoaded: true }),
    mounted() {
      this.references = this.$refs.screen;
    },
    methods: {
      addItems() {
        this.items = [...this.items, ...Array.from({ length: 20 })];

        return Promise.resolve(this.items);
      }
    },
    template: `<Theme :dark-mode="darkMode" class="relative">
    <div class="h-screen">
      <LazyLoader :query="addItems" :page="page" v-model="isLoaded" @pageChange="page = $event" :size="20">
          <Button v-for="(item, key) in items" :key="key" :style="{height: '25vh'}" color="accent">
            {{key + 1}}
          </Button>
      </LazyLoader>
      
    </div>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  sticky: true
};
