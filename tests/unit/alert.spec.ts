import { shallowMount } from "@vue/test-utils";
import Alert from "@/components/alert/Alert.vue";
import markdown from "@/filters/markdown";
import { Button } from "@/index";

describe("Alert.vue", () => {
  const props = {
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
  const wrapper = shallowMount(Alert, {
    propsData: props
  });

  it("renders title", () => {
    expect(wrapper.find("h5").text()).toMatch(props.title);
  });

  it("renders markdown content", () => {
    expect(
      wrapper
        .find(".content")
        .html()
        .replace(/\s+/g, "")
    ).toMatch(
      `<div class="content">${markdown(props.content)}</div>`.replace(
        /\s+/g,
        ""
      )
    );
  });

  it("renders buttons", () => {
    expect(wrapper.findAllComponents(Button)).toHaveLength(2);
  });
});
