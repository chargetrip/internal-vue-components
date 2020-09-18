import { shallowMount } from "@vue/test-utils";
import Button from "@/components/button/Button.vue";

describe("Button.vue", () => {
  const props = {
    title: "Title",
    type: "accent",
    size: "md"
  };

  it("renders title", () => {
    const wrapper = shallowMount(Button, {
      propsData: props
    });
    expect(wrapper.text()).toMatch(props.title);
  });
});
