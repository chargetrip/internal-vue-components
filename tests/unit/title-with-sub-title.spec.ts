import { shallowMount } from "@vue/test-utils";
import TitleWithSubTitle from "@/components/title-with-sub-title/TitleWithSubTitle.vue";

describe("TitleWithSubTitle.vue", () => {
  const propsData = {
    title: "Title",
    subTitle: "subtitle"
  };

  const wrapper = shallowMount(TitleWithSubTitle, { propsData });

  it("renders title", async () => {
    expect(wrapper.find(".title").text()).toMatch(propsData.title);
  });

  it("renders sub-title", async () => {
    expect(wrapper.find(".sub-title").text()).toMatch(propsData.subTitle);
  });
});
