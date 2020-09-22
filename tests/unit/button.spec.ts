import { shallowMount } from "@vue/test-utils";
import Button from "@/components/button/Button.vue";

describe("Button.vue", () => {
  const propsData = {
    title: "Title",
    type: "accent",
    size: "md",
    icon: "checkmark"
  };

  const wrapper = shallowMount(Button, { propsData });
  it("renders title", async () => {
    expect(wrapper.text()).toMatch(propsData.title);
  });

  it("renders icon", async () => {
    expect(wrapper.find(".icon").exists()).toBe(true);
    expect(wrapper.find(".icon").classes(`icon-${propsData.icon}`)).toBe(true);
  });
});
