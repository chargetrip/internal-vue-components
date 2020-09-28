import { shallowMount } from "@vue/test-utils";
import Snackbar from "@/components/snackbar/Snackbar.vue";

describe("Snackbar.vue", () => {
  const propsData = {
    icon: "warning-triangle",
    title: "title",
    type: "warning"
  };

  const wrapper = shallowMount(Snackbar);

  it("renders title", async () => {
    expect(wrapper.find(".title").exists()).toBe(false);
    await wrapper.setProps({ title: propsData.title });
    expect(wrapper.find(".title").text()).toMatch(propsData.title);
  });

  it("adds type class", async () => {
    expect(wrapper.classes(propsData.type)).toBe(false);
    await wrapper.setProps({ type: propsData.type });
    expect(wrapper.classes(propsData.type)).toBe(true);
  });

  it("renders icon", async () => {
    expect(wrapper.find(".icon").exists()).toBe(false);
    await wrapper.setProps({ icon: propsData.icon });
    expect(wrapper.find(".icon").exists()).toBe(true);
    expect(wrapper.find(".icon").classes(`icon-${propsData.icon}`)).toBe(true);
  });
});
