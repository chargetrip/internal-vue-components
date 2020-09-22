import { mount, shallowMount } from "@vue/test-utils";
import CheckboxTree from "@/components/checkbox-tree/CheckboxTree.vue";

describe("CheckboxTree.vue", () => {
  const propsData: any = {
    value: [
      { label: "sf", value: false },
      { label: "er", value: false }
    ],
    all: false
  };

  const wrapper = mount(CheckboxTree, { propsData });

  it("renders toggle all", async () => {
    expect(wrapper.find(".toggle-all").exists()).toBe(false);
    await wrapper.setProps({ all: true });
    expect(wrapper.find(".toggle-all").exists()).toBe(true);
  });

  it("toggles", async () => {
    await wrapper.find(".toggle-all label").trigger("click");
    expect(wrapper.emitted().input).toBeTruthy();
  });
});
