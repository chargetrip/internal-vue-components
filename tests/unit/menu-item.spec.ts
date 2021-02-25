import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import MenuItem from "@/components/menu-item/MenuItem.vue";

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe("MenuItemGroup.vue", () => {
  const propsData = {
    title: "Title",
    icon: "terminal",
    soon: true,
    to: "/contact"
  };

  const wrapper = shallowMount(MenuItem, { propsData, localVue, router });

  it("internal", async () => {
    expect(wrapper.findComponent({ ref: "link" }).attributes("to")).toMatch(
      propsData.to
    );
    expect(wrapper.findComponent({ ref: "link" }).attributes("target")).toMatch(
      "_self"
    );
  });

  it("external", async () => {
    await wrapper.setProps({ to: null, href: "http://google.com" });
    expect(wrapper.findComponent({ ref: "link" }).attributes("href")).toMatch(
      "http://google.com"
    );
    expect(wrapper.findComponent({ ref: "link" }).attributes("target")).toMatch(
      "_blank"
    );
  });

  it("renders title", async () => {
    expect(wrapper.find(".title").text()).toMatch(propsData.title);
  });

  it("renders soon", async () => {
    expect(wrapper.find(".soon").exists()).toBe(true);
  });

  it("renders icon", async () => {
    expect(wrapper.find(".icon").exists()).toBe(true);
    expect(wrapper.find(".icon").classes("icon-terminal")).toBe(true);
  });
});
