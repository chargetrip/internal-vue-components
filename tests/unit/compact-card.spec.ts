import { mount } from "@vue/test-utils";
import CompactCard from "@/components/compact-card/CompactCard.vue";
import Button from "@/components/button/Button.vue";
import CheckboxTree from "@/components/checkbox-tree/CheckboxTree.vue";

describe("CompactCard.vue", () => {
  const propsData = {
    title: "Title",
    description: "description",
    image: { icon: "icon" },
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

  it("renders icon", async () => {
    expect(wrapper.find(".icon").exists()).toBe(false);
    await wrapper.setProps({ image: propsData.image });
    expect(wrapper.find(".icon").exists()).toBe(true);
    expect(wrapper.find(".icon").classes(`icon-${propsData.image.icon}`)).toBe(
      true
    );
  });

  it("renders cta", async () => {
    expect(wrapper.find(".cta").exists()).toBe(false);
    await wrapper.setProps({ cta: propsData.cta });
    expect(wrapper.find(".cta").exists()).toBe(true);
  });

  it("renders detail button", async () => {
    expect(wrapper.find(".detail-button").exists()).toBe(false);
    await wrapper.setProps({ detail: propsData.detail });
    expect(wrapper.find(".detail-button").exists()).toBe(true);
  });

  it("renders toggles detail component", async () => {
    expect(wrapper.find(".component-detail").exists()).toBe(false);
    await wrapper.find(".detail-button").trigger("click");
    expect(wrapper.vm.$props.detail.active).toBe(true);
    expect(wrapper.find(".component-detail").exists()).toBe(true);
  });
});
