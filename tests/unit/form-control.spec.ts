import { mount } from "@vue/test-utils";
import FormControl from "@/components/form-control/FormControl.vue";

describe("FormControl.vue", () => {
  const wrapper = mount(FormControl);

  it("toggles hover", async () => {
    expect(wrapper.vm.$data.hover).toBe(false);
    await wrapper.trigger("mouseenter");
    expect(wrapper.vm.$data.hover).toBe(true);
    await wrapper.trigger("mouseleave");
    expect(wrapper.vm.$data.hover).toBe(false);
  });

  it("renders error", async () => {
    expect(wrapper.classes("error")).toBe(false);
    await wrapper.setProps({ validation: { $error: true } });
    expect(wrapper.classes("error")).toBe(true);
    expect(wrapper.find(".error-msg").isVisible()).toBe(true);
  });
});
