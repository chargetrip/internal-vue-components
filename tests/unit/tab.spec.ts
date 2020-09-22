import { shallowMount } from "@vue/test-utils";
import Tab from "@/components/tab/Tab.vue";

describe("Tab.vue", () => {
  const propsData = {
    size: "size",
    disabled: true,
    active: true,
    title: "title",
    subTitle: "subTitle",
    icon: "warning"
  };

  const wrapper = shallowMount(Tab, { propsData });

  it("renders title", async () => {
    expect(wrapper.find(".title").text()).toMatch(propsData.title);
  });

  it("renders sub-title", async () => {
    expect(wrapper.find(".sub-title").text()).toMatch(propsData.subTitle);
  });

  it("is active", async () => {
    expect(wrapper.classes("active")).toBe(true);
  });

  it("is disabled", async () => {
    expect(wrapper.attributes("disabled")).toBe("disabled");
  });

  it("renders icon", async () => {
    expect(wrapper.find(".icon").exists()).toBe(true);
    expect(wrapper.find(".icon").classes(`icon-${propsData.icon}`)).toBe(true);
  });
});
