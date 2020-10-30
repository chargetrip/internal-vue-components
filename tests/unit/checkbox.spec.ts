import { shallowMount } from "@vue/test-utils";
import Checkbox from "@/components/checkbox/Checkbox.vue";

describe("Checkbox.vue", () => {
  const propsData: any = {
    label: "Label",
    subLabel: "sub-label",
    name: "checkbox",
    value: false,
    checkboxId: "123213",
    disabled: true,
    icon: "error"
  };

  const wrapper = shallowMount(Checkbox);

  it("renders label", async () => {
    expect(wrapper.find("label").exists()).toBe(false);
    expect(wrapper.find(".label").exists()).toBe(false);
    await wrapper.setProps({ label: propsData.label });
    expect(wrapper.find(".label").text()).toMatch(propsData.label);
  });

  it("renders sub label", async () => {
    expect(wrapper.find(".sub-label").exists()).toBe(false);
    await wrapper.setProps({ subLabel: propsData.subLabel });
    expect(wrapper.find(".sub-label").text()).toMatch(propsData.subLabel);
  });

  it("toggles value", async () => {
    await wrapper.find("label").trigger("click");
    expect(wrapper.emitted().input).toBeTruthy();
  });

  it("disabled state", async () => {
    expect(wrapper.props("disabled")).toBe(undefined);
    await wrapper.setProps({ disabled: propsData.disabled });
    expect(wrapper.props("disabled")).toBe(propsData.disabled);
    expect(wrapper.attributes("disabled")).toBe(`${propsData.disabled}`);
  });

  it("renders icon", async () => {
    expect(wrapper.find(".icon").classes(`icon-checkmark`)).toBe(true);
    await wrapper.setProps({ icon: propsData.icon });
    expect(wrapper.find(".icon").classes(`icon-${propsData.icon}`)).toBe(true);
  });
});
