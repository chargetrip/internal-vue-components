import { shallowMount } from "@vue/test-utils";
import Tooltip from "@/components/tooltip/Tooltip.vue";

describe("Tooltip.vue", () => {
  const text = "tooltip slot text";

  const wrapper = shallowMount(Tooltip, { slots: { default: text } });

  it("Renders slot", async () => {
    expect(wrapper.text()).toMatch(text);
  });
});
