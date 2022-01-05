import { mount } from "@vue/test-utils";
import Button from "@/components/button/Button.vue";
import Icon from "@/components/icon/Icon.vue";

describe("Button.vue", () => {
  const propsData = {
    title: "Title",
    type: "accent",
    size: "md",
    icon: "checkmark"
  };

  const wrapper = mount(Button, { propsData });
  it("renders title", async () => {
    expect(wrapper.text()).toMatch(propsData.title);
  });

  it("renders icon", async () => {
    expect(wrapper.findComponent(Icon).exists()).toBe(true);
    expect(wrapper.findComponent(Icon).classes(`icon-${propsData.icon}`)).toBe(
      true
    );
  });
});
