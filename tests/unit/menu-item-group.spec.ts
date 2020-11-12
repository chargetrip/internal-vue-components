import { createLocalVue, mount } from "@vue/test-utils";
import VueRouter from "vue-router";
import MenuItemGroup from "@/components/menu-item-group/MenuItemGroup.vue";
import { MenuItem } from "../../src";
const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe("MenuItemGroup.vue", () => {
  const propsData = {
    to: "test1",
    href: "test2",
    target: "test3",
    hash: "test4",
    soon: "test5",
    arrow: "test6",
    title: "test7",
    icon: "checkmark",
    showBack: true,
    path: "test10",
    callback: "test11",
    children: [
      {
        to: "tltet",
        title: "sdfsdf"
      }
    ],
    parent: "test13"
  };

  const wrapper = mount(MenuItemGroup, { localVue, router });

  // TODO: Children click logic

  it("renders group", async () => {
    expect(wrapper.find(".group").exists()).toBe(true);
  });

  it("renders group title", async () => {
    expect(wrapper.find(".group").text()).toBe("");
    await wrapper.setProps({ title: propsData.title });
    expect(wrapper.find(".group").text()).toBe(propsData.title);
  });

  it("renders children", async () => {
    expect(wrapper.find(".children").exists()).toBe(false);
    await wrapper.setProps({
      children: propsData.children,
      showNextLevel: true
    });
    expect(wrapper.find(".children").isVisible()).toBe(true);
  });

  it("renders MenuItem", async () => {
    expect(wrapper.findComponent({ ref: "MenuItem" }).exists()).toBe(false);
    await wrapper.setProps({ to: propsData.to });
    expect(wrapper.findComponent({ ref: "MenuItem" }).exists()).toBe(true);
  });

  it("renders back", async () => {
    expect(wrapper.find(".back").exists()).toBe(false);
    await wrapper.setProps({
      showBack: propsData.showBack,
      parent: propsData.parent
    });
    expect(wrapper.find(".back").exists()).toBe(propsData.showBack);
    expect(wrapper.find(".back").text()).toBe(`Home / ${propsData.parent}`);
  });

  // it("emits back", async () => {
  //   expect(wrapper.emitted().back).toBeFalsy();
  //   await wrapper.find(".back").trigger("click");
  //   expect(wrapper.emitted().back).toBeTruthy();
  // });
});
