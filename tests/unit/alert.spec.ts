import { shallowMount } from "@vue/test-utils";
import Alert from "@/components/alert/Alert.vue";
import markdown from "@/filters/markdown";
import Button from "@/components/button/Button.vue";

describe("Alert.vue", () => {
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
  const wrapper = shallowMount(Alert);

  it("renders title", async () => {
    expect(wrapper.find("h5").text()).toMatch("Oops something went wrong");
    await wrapper.setProps({ title: propsData.title });
    expect(wrapper.find("h5").text()).toMatch(propsData.title);
  });

  it("renders markdown content", async () => {
    expect(wrapper.find(".content").exists()).toBe(false);
    await wrapper.setProps({ content: propsData.content });
    expect(
      wrapper
        .find(".content")
        .html()
        .replace(/\s+/g, "")
    ).toMatch(
      `<div class="content">${markdown(propsData.content)}</div>`.replace(
        /\s+/g,
        ""
      )
    );
  });

  it("renders buttons", async () => {
    expect(wrapper.findAllComponents(Button)).toHaveLength(1);
    await wrapper.setProps({ ctas: propsData.ctas });
    expect(wrapper.findAllComponents(Button)).toHaveLength(2);
  });
});
