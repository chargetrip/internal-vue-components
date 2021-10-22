import { mount } from "@vue/test-utils";
import CompactCard from "@/components/compact-card/CompactCard.vue";
import Button from "@/components/button/Button.vue";
import CheckboxTree from "@/components/checkbox-tree/CheckboxTree.vue";
import Icon from "@/components/icon/Icon.vue";
import Label from "@/components/label/Label.vue";

describe("CompactCard.vue", () => {
  const propsData = {
    title: "Title",
    description: "description",
    icon: { name: "icon" },
    cta: { is: Button, size: "md", color: "accent", title: "Hey" },
    detail: {
      active: false,
      component: CheckboxTree,
      bind: {
        all: true
      },
      value: []
    }
  };

  const wrapper = mount(CompactCard);

  it("renders label", async () => {
    const { title, description } = propsData;

    expect(wrapper.findComponent(Label).exists()).toBe(false);
    await wrapper.setProps({ title, description });
    expect(wrapper.findComponent(Label).exists()).toBe(true);
  });

  it("renders icon", async () => {
    expect(wrapper.findComponent(Icon).exists()).toBe(false);
    await wrapper.setProps({ icon: propsData.icon });
    expect(wrapper.findComponent(Icon).exists()).toBe(true);
    expect(
      wrapper.findComponent(Icon).classes(`icon-${propsData.icon.name}`)
    ).toBe(true);
  });

  it("renders cta", async () => {
    expect(wrapper.find(".dynamic-cta").exists()).toBe(false);
    await wrapper.setProps({ cta: propsData.cta });
    expect(wrapper.find(".dynamic-cta").exists()).toBe(true);
  });
});
