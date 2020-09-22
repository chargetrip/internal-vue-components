import { shallowMount } from "@vue/test-utils";
import Readonly from "@/components/readonly/Readonly.vue";
import TitleWithSubTitle from "@/components/title-with-sub-title/TitleWithSubTitle.vue";
import Input from "@/components/Input/Input.vue";
import Select from "@/components/select/Select.vue";

describe("Readonly.vue", () => {
  const propsData = {
    label: "Label",
    value: "value",
    options: [{ label: "option label", value: "option value" }]
  };

  const wrapper = shallowMount(Readonly);

  it("renders Input", async () => {
    await wrapper.setProps({ label: propsData.label, value: propsData.value });
    expect(wrapper.findComponent(Select).exists()).toBe(false);
    expect(wrapper.findComponent(Input).exists()).toBe(true);
    expect(wrapper.findComponent(TitleWithSubTitle).exists()).toBe(false);
  });

  it("renders Select", async () => {
    await wrapper.setProps({ options: propsData.options });
    expect(wrapper.findComponent(Select).exists()).toBe(true);
    expect(wrapper.findComponent(Input).exists()).toBe(false);
    expect(wrapper.findComponent(TitleWithSubTitle).exists()).toBe(false);
  });

  it("renders TitleWithSubTitle", async () => {
    await wrapper.setProps({ readonly: true });
    expect(wrapper.findComponent(Select).exists()).toBe(false);

    expect(wrapper.findComponent(Input).exists()).toBe(false);
    expect(wrapper.findComponent(TitleWithSubTitle).exists()).toBe(true);
  });
});
