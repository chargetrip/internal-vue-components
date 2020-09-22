import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/modal/Modal.vue";

describe("Modal.vue", () => {
  const slots = { default: "Slot works" };
  const wrapper = shallowMount(Modal, { slots: slots });

  it("renders slot", async () => {
    expect(wrapper.text()).toMatch(slots.default);
  });
});
