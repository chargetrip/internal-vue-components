import { shallowMount } from "@vue/test-utils";
import Banner from "@/components/banner/Banner.vue";

describe("Banner.vue", () => {
  const propsData = {
    description: "Description text"
  };

  const wrapper = shallowMount(Banner);

  it("renders description", async () => {
    expect(wrapper.find(".description").exists()).toBe(false);
    await wrapper.setProps({ description: propsData.description });
    expect(wrapper.find(".description").text()).toMatch(propsData.description);
  });

  it("renders slot", () => {
    const slotText = "Slot text";
    const slotWrapper = shallowMount(Banner, {
      slots: {
        default: slotText
      }
    });
    expect(slotWrapper.find(".description").text()).toMatch(slotText);
  });

  it("can close", async () => {
    const wrapper = shallowMount(Banner, {
      propsData: { description: "sfds" }
    });
    await wrapper.find(".icon-close").trigger("click");
    expect(wrapper.emitted().hidden).toBeTruthy();
    expect(wrapper.isVisible()).toBe(false);
    expect(wrapper.vm.$data.hidden).toBe(true);
  });

  it("doesn't render without slot or description", () => {
    const wrapper = shallowMount(Banner);
    expect(wrapper.isVisible()).toBe(false);
  });
});
