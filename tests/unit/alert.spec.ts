import { mount } from "@vue/test-utils";
import Alert from "@/components/alert/Alert.vue";
import Button from "@/components/button/Button.vue";

describe("Label.vue", () => {
  const propsData = {
    title: "Title",
    content: `#title
    description`,
    ctas: [
      {
        title: "Cta",
        color: "accent",
        size: "md"
      }
    ]
  };
  const wrapper = mount(Alert);

  it("renders title", async () => {
    expect(wrapper.find("h3").text()).toMatch("Oops something went wrong");
    await wrapper.setProps({ title: propsData.title });
    expect(wrapper.find("h3").text()).toMatch(propsData.title);
  });

  it("renders markdown content", async () => {
    expect(wrapper.find(".description").exists()).toBe(false);
    await wrapper.setProps({ content: propsData.content });
    expect(wrapper.find(".description").exists()).toBe(true);
  });

  it("renders buttons", async () => {
    expect(wrapper.findAllComponents(Button)).toHaveLength(1);
    await wrapper.setProps({ ctas: propsData.ctas });
    expect(wrapper.findAllComponents(Button)).toHaveLength(2);
  });
});
