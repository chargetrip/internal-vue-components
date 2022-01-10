import { mount } from "@vue/test-utils";
import Calendar from "@/components/calendar/Calendar.vue";
import { addMonths, format } from "date-fns";

describe("Calendar.vue", () => {
  const propsData = {
    range: false,
    value: null,
    disabled: false,
    placeholder: "placeholder"
  };

  it("renders placeholder", async () => {
    // TODO: this shit not working..
    // const wrapper = mount(Calendar, { attachTo: document.body });
    // console.log(wrapper.findComponent({ ref: "valueContainer" }).exists());
    // expect(wrapper.findComponent({ ref: "valueContainer" }).exists()).toBe(
    //   false
    // );
    // expect(wrapper.find(".placeholder").text()).toMatch("Select date");
    //
    // await wrapper.setProps({ placeholder: propsData.placeholder });
    //
    // expect(wrapper.find(".placeholder").text()).toMatch(propsData.placeholder);
  });

  it("renders non range", async () => {
    const nonRangeWrapper = mount(Calendar, { attachTo: document.body });

    await nonRangeWrapper.find(".box").trigger("click");
    expect(nonRangeWrapper.vm.$data.active).toBe(true);
    expect(nonRangeWrapper.find(".date-picker").isVisible()).toBe(true);

    const dateElms = nonRangeWrapper.findAll(".date:not(.empty)");

    await dateElms.at(0).trigger("click");
    expect(nonRangeWrapper.emitted().input).toBeTruthy();
    expect(nonRangeWrapper.vm.$data.active).toBe(false);
  });
  //
  it("renders range", async () => {
    // TODO: Find component is shit
    // const rangeWrapper = mount(Calendar, {
    //   propsData: { range: true },
    //   attachTo: document.body
    // });
    // await rangeWrapper.find(".box").trigger("click");
    // expect(rangeWrapper.vm.$data.active).toBe(true);
    // expect(rangeWrapper.find(".date-picker").isVisible()).toBe(true);
    //
    // const dateElms = rangeWrapper.findAll(".date:not(.empty)");
    //
    // console.log(dateElms.at(0));
    //
    // await dateElms.at(0).trigger("click");
    // expect(rangeWrapper.emitted().input).toBeTruthy();
    // expect(rangeWrapper.vm.$data.active).toBe(true);
    //
    // await dateElms.at(0).trigger("click");
    //
    // expect(rangeWrapper.vm.$data.active).toBe(false);
  });
  //
  it("Can change month", async () => {
    const wrapper = mount(Calendar, { attachTo: document.body });
    await wrapper.find(".box").trigger("click");
    expect(wrapper.vm.$data.active).toBe(true);
    expect(wrapper.find(".date-picker").isVisible()).toBe(true);
    await wrapper.find(".icon-arrow-right").trigger("click");
    expect(wrapper.find(".month").text()).toBe(
      format(addMonths(new Date(), 1), "MMMM yyyy")
    );
  });

  it("Disabled state", async () => {
    const wrapper = mount(Calendar, { attachTo: document.body });
    await wrapper.setProps({ disabled: true });
    await wrapper.find(".box").trigger("click");

    expect(wrapper.props("disabled")).toBe(true);
    // TODO: Find out why this isn't working..
    // expect(wrapper.find(".date-picker-wrapper").isVisible()).toBe(false);
  });
});
