import { mount } from "@vue/test-utils";
import TitleWithSubTitle from "@/components/title-with-sub-title/TitleWithSubTitle.vue";

describe("TitleWithSubTitle.vue", () => {
  const propsData = {
    title: "Title",
    subTitle: "subtitle"
  };

  const wrapper = mount(TitleWithSubTitle, { propsData });

  it("renders title", async () => {
    expect(wrapper.find(".label").text()).toMatch(propsData.title);
  });

  it("renders sub-title", async () => {
    expect(wrapper.find(".sub-label").text()).toMatch(propsData.subTitle);
  });
});
