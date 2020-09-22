import { shallowMount } from "@vue/test-utils";
import Switch from "@/components/switch/Switch.vue";

describe("Switch.vue", () => {
  const propsData: any = {
    value: false,
    label: "label",
    id: "id",
    offLabel: "offLabel",
    onLabel: "onLabel"
  };

  const wrapper = shallowMount(Switch);

  it("renders label", async () => {
    expect(wrapper.find("label").exists()).toBe(false);
    await wrapper.setProps({
      id: propsData.id,
      label: propsData.label,
      value: propsData.value
    });
    await wrapper.setProps({ label: propsData.label });
    expect(wrapper.find("label").text()).toMatch(propsData.label);
    expect(wrapper.find("label").attributes("for")).toMatch(propsData.id);
  });

  it("toggles value", async () => {
    await wrapper.find("label").trigger("click");
    expect(wrapper.emitted().input![0][0]).toBe(true);
  });

  it("renders custom on/off labels", async () => {
    await wrapper.setProps({
      onLabel: propsData.onLabel,
      offLabel: propsData.offLabel
    });
    expect(wrapper.find(".on").text()).toMatch(propsData.onLabel);
    expect(wrapper.find(".off").text()).toMatch(propsData.offLabel);
  });
});
