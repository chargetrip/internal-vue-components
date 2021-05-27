import { mount } from "@vue/test-utils";
import Cell from "@/components/cell/Cell.vue";

describe("Cell.vue", () => {
  const propsData = {
    title: "Title",
    description: "description",
    img: "md"
  };

  const wrapper = mount(Cell, {
    slots: {
      default: "<div>test</div>"
    }
  });

  it("renders slot", async () => {
    expect(wrapper.text()).toBe("test");
  });

  it("sets font-weight", async () => {
    expect(wrapper.classes("font-normal")).toBe(true);
    await wrapper.setProps({ fontWeight: "bold" });
    expect(wrapper.classes("font-bold")).toBe(true);
  });

  it("sets color", async () => {
    expect(wrapper.classes("text-font-primary")).toBe(true);
    await wrapper.setProps({ color: "body" });
    expect(wrapper.classes("text-body")).toBe(true);
  });

  it("sets font-family", async () => {
    expect(wrapper.classes("font-inter")).toBe(true);
    await wrapper.setProps({ fontFamily: "mono" });
    expect(wrapper.classes("font-mono")).toBe(true);
  });
});
