import { mount } from "@vue/test-utils";
import Range from "@/components/range/Range.vue";

describe("Range.vue", () => {
  const propsData = {
    labelLeft: "Left label",
    labelRight: "Right label",
    max: 500
  };

  const wrapper = mount(Range, { propsData: { value: [0, 100] } });

  it("renders inputs", async () => {
    expect(wrapper.find(".left").exists()).toBe(false);
    expect(wrapper.find(".right").exists()).toBe(false);

    await wrapper.setProps({
      labelLeft: propsData.labelLeft,
      labelRight: propsData.labelRight
    });

    expect(wrapper.find(".left").exists()).toBe(true);
    expect(wrapper.find(".right").exists()).toBe(true);
  });
});
