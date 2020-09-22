import { shallowMount } from "@vue/test-utils";
import Tag from "@/components/tag/Tag.vue";

describe("Tag.vue", () => {
  const propsData = {
    title: "Title",
    color: "alt"
  };

  const wrapper = shallowMount(Tag, { propsData });

  it("renders title", async () => {
    expect(wrapper.text()).toMatch(propsData.title);
  });

  it("adds color class", async () => {
    expect(wrapper.classes(propsData.color)).toBe(true);
  });
});
