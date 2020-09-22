import { shallowMount } from "@vue/test-utils";
import Card from "@/components/card/Card.vue";

describe("Card.vue", () => {
  const propsData = {
    title: "Title",
    description: "description",
    img: "md"
  };

  const wrapper = shallowMount(Card);

  it("renders title", async () => {
    expect(wrapper.find(".title").exists()).toBe(false);
    await wrapper.setProps({ title: propsData.title });
    expect(wrapper.find(".title").text()).toMatch(propsData.title);
  });

  it("renders description", async () => {
    expect(wrapper.find("p").exists()).toBe(false);
    await wrapper.setProps({ description: propsData.description });
    expect(wrapper.find("p").text()).toMatch(propsData.description);
  });

  it("renders image", async () => {
    expect(wrapper.find("img").exists()).toBe(false);
    await wrapper.setProps({ img: propsData.img });
    expect(wrapper.find("img").attributes("src")).toMatch(propsData.img);
    expect(wrapper.find("img").attributes("alt")).toMatch(propsData.title);
  });
});
