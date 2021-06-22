import { mount } from "@vue/test-utils";
import Input from "@/components/input/Input.vue";

describe("Input.vue", () => {
  const propsData = {
    type: "text",
    icon: "checkmark",
    hotkey: { key: "Enter", icon: "enter", fn: () => null },
    id: "id",
    placeholder: "placeholder",
    name: "name",
    autocomplete: "autocomplete",
    maxlength: "maxlength",
    max: "max",
    readonly: true,
    disabled: true,
    showCheckmark: true,
    label: "label",
    suffix: "suffix",
    prefix: "prefix",
    value: "value"
  };
  const wrapper = mount(Input);

  it("Sets type attribute", async () => {
    expect(wrapper.find("input").attributes("type")).toBe(undefined);
    await wrapper.setProps({ type: propsData.type });
    expect(wrapper.find("input").attributes("type")).toBe(propsData.type);
  });

  it("renders prefix", async () => {
    expect(wrapper.find(".prefix").exists()).toBe(false);
    await wrapper.setProps({ prefix: propsData.prefix });
    expect(wrapper.find(".prefix").exists()).toBe(true);
    expect(wrapper.find(".prefix").text()).toMatch(propsData.prefix);
  });

  it("renders suffix", async () => {
    expect(wrapper.find(".suffix").exists()).toBe(false);
    await wrapper.setProps({ suffix: propsData.suffix });
    expect(wrapper.find(".suffix").exists()).toBe(true);
    expect(wrapper.find(".suffix").text()).toMatch(propsData.suffix);
  });

  it("emits input", async () => {
    expect(wrapper.emitted().input).toBeFalsy();
    await wrapper.find("input").setValue("123");
    expect(wrapper.emitted().input).toBeTruthy();
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
    expect(wrapper.find("input").attributes("readonly")).toBe(undefined);

    await wrapper.setProps({ disabled: propsData.disabled });

    expect(wrapper.attributes("disabled")).toBe("disabled");
    expect(wrapper.classes("disabled")).toBe(true);
    expect(wrapper.find("input").attributes("readonly")).toBe("readonly");
    await wrapper.setProps({ disabled: false });
  });

  it("can be readonly", async () => {
    expect(wrapper.find("input").attributes("readonly")).toBe(undefined);
    await wrapper.setProps({ readonly: propsData.readonly });
    expect(wrapper.find("input").attributes("readonly")).toBe("readonly");
    await wrapper.setProps({ readonly: false });
  });
  //
  // it("honors max", async () => {
  //   const value = 500;
  //   const max = 300;
  //   await wrapper.setProps({ type: "number" });
  //   await wrapper.find("input").setValue(value);
  //   expect(wrapper.emitted().input![2][0]).toBe(value);
  //
  //   await wrapper.setProps({ max: max });
  //
  //   expect(wrapper.find("input").attributes("max")).toBe(max.toString());
  //   await wrapper.find("input").setValue(value);
  //
  //   expect(wrapper.emitted().input![4][0]).toBe(max);
  // });
  //
  // it("honors maxlength", async () => {
  //   const value = "123456789";
  //   const maxlength = 4;
  //   await wrapper.setProps({ type: "text", max: null });
  //   await wrapper.find("input").setValue(value);
  //   console.log(wrapper.emitted().input);
  //   expect(wrapper.emitted().input![2][0]).toBe(value);
  //
  //   await wrapper.setProps({ maxlength: maxlength });
  //
  //   expect(wrapper.find("input").attributes("maxlength")).toBe(
  //     maxlength.toString()
  //   );
  //   await wrapper.find("input").setValue(value);
  //   expect(wrapper.emitted().input![0][0]).toBe(value.slice(0, maxlength));
  // });

  it("Sets autocomplete attribute", async () => {
    expect(wrapper.find("input").attributes("autocomplete")).toBe(undefined);
    await wrapper.setProps({ autocomplete: propsData.autocomplete });
    expect(wrapper.find("input").attributes("autocomplete")).toBe(
      propsData.autocomplete
    );
  });

  it("Sets name attribute", async () => {
    expect(wrapper.find("input").attributes("name")).toBe(undefined);
    await wrapper.setProps({ name: propsData.name });
    expect(wrapper.find("input").attributes("name")).toBe(propsData.name);
  });

  it("Sets placeholder attribute", async () => {
    expect(wrapper.find("input").attributes("placeholder")).toBe(undefined);
    await wrapper.setProps({ placeholder: propsData.placeholder });
    expect(wrapper.find("input").attributes("placeholder")).toBe(
      propsData.placeholder
    );
  });

  it("Sets id attribute", async () => {
    expect(wrapper.find("input").attributes("id")).toBe(undefined);
    expect(wrapper.find("label").attributes("for")).toBe(undefined);
    await wrapper.setProps({ id: propsData.id });
    expect(wrapper.find("input").attributes("id")).toBe(propsData.id);
    expect(wrapper.find("label").attributes("for")).toBe(propsData.id);
  });

  it("renders icon", async () => {
    expect(wrapper.find(".icon").exists()).toBe(false);
    await wrapper.setProps({ icon: propsData.icon });
    expect(wrapper.find(".icon").exists()).toBe(true);
    expect(wrapper.find(".icon").classes(`icon-${propsData.icon}`)).toBe(true);
  });

  it("renders hotkey", async () => {
    expect(wrapper.find(".hotkey").exists()).toBe(false);
    await wrapper.setProps({ hotkey: propsData.hotkey });
    expect(wrapper.find(".hotkey").exists()).toBe(true);
    expect(
      wrapper.find(".hotkey").classes(`icon-${propsData.hotkey.icon}`)
    ).toBe(true);
  });
});
