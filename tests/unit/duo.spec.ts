import { mount } from "@vue/test-utils";
import Duo from "@/components/duo/Duo.vue";
import Input from "@/components/input/Input.vue";

describe("Duo.vue", () => {
  const propsData = {
    value: [0, 0],
    left: {
      is: Input
    },
    right: {
      is: Input
    }
  };

  const wrapper = mount(Duo);

  it("renders", async () => {
    expect(wrapper.findComponent({ ref: "left" }).exists()).toBe(false);
    expect(wrapper.findComponent({ ref: "right" }).exists()).toBe(false);

    await wrapper.setProps(propsData);

    expect(wrapper.findComponent({ ref: "left" }).exists()).toBe(true);
    expect(wrapper.findComponent({ ref: "right" }).exists()).toBe(true);
  });
});
