import { shallowMount } from "@vue/test-utils";
import Select from "@/components/select/Select.vue";
import Tag from "@/components/tag/Tag.vue";

describe("Select.vue", () => {
  const propsData = {
    id: "id",
    name: "name",
    readonly: true,
    disabled: true,
    multi: false,
    options: [
      { label: "option 1", value: "option-1" },
      { label: "option 2", value: "option-2" }
    ],
    placeholder: "placeholder",
    tags: "tags",
    label: "label",
    value: "value"
  };

  const wrapper = shallowMount(Select, {
    propsData: { options: propsData.options }
  });

  it("emits input", async () => {
    expect(wrapper.emitted().input).toBeFalsy();
    expect(wrapper.classes("active")).toBe(false);
    expect(wrapper.find(".options").isVisible()).toBe(false);

    await wrapper.find("select").trigger("focus");

    expect(wrapper.find(".options").isVisible()).toBe(true);
    expect(wrapper.classes("active")).toBe(true);

    await wrapper.findComponent({ ref: "optionEl" }).trigger("mousedown");

    expect(wrapper.emitted()?.input?.length).toBe(1);
    expect(wrapper.emitted().input![0][0]).toEqual("option-1");
    expect(wrapper.classes("active")).toBe(false);
  });

  it("emits input multi", async () => {
    await wrapper.setProps({ multi: true, value: [] });

    expect(wrapper.classes("active")).toBe(false);
    expect(wrapper.find(".options").isVisible()).toBe(false);

    await wrapper.find("select").trigger("focus");

    // expect(wrapper.find(".options").isVisible()).toBe(true);
    /*expect(wrapper.classes("active")).toBe(true);

    await wrapper.findComponent({ ref: "optionEl" }).trigger("mousedown");

    expect(wrapper.emitted()?.input?.length).toBe(2);
    expect(wrapper.emitted().input?.[1]?.[0]).toEqual(["option-1"]);
    expect(wrapper.classes("active")).toBe(true);

    await wrapper
      .findAllComponents({ ref: "optionEl" })
      .at(1)
      .trigger("mousedown");

    expect(wrapper.emitted()?.input?.length).toBe(3);
    expect(wrapper.emitted().input?.[2]?.[0]).toEqual(["option-2"]);*/
  });

  it("renders label", async () => {
    expect(wrapper.find("label").exists()).toBe(false);
    await wrapper.setProps({ label: propsData.label });
    expect(wrapper.find("label").exists()).toBe(true);
    expect(wrapper.find("label").text()).toMatch(propsData.label);
  });

  it("can be disabled", async () => {
    expect(wrapper.attributes("disabled")).toBe(undefined);
    expect(wrapper.classes("disabled")).toBe(false);

    await wrapper.setProps({ disabled: propsData.disabled });

    expect(wrapper.attributes("disabled")).toBe("true");
    await wrapper.setProps({ disabled: false });
  });

  it("renders placeholder", async () => {
    expect(wrapper.find(".placeholder").exists()).toBe(false);
    await wrapper.setProps({ placeholder: propsData.placeholder, value: [] });
    expect(wrapper.find(".placeholder").exists()).toBe(true);
  });
});
