import { shallowMount } from "@vue/test-utils";
import Upload from "@/components/upload/Upload.vue";

describe("Upload.vue", () => {
  const propsData = { label: "Upload" };

  const wrapper = shallowMount(Upload, { propsData });

  it("Renders label", async () => {
    expect(wrapper.text()).toMatch(propsData.label);
  });

  it("Emits input", async () => {
    expect(wrapper.emitted().input).toBeFalsy();
    await wrapper.find("input").setValue("");
    expect(wrapper.emitted().input).toBeTruthy();
  });
});
