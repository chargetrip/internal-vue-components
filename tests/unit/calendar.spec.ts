import { shallowMount } from "@vue/test-utils";
import Calendar from "@/components/calendar/Calendar.vue";
import { addMonths, format } from "date-fns";

describe("Calendar.vue", () => {
  const propsData = {
    range: false,
    value: null,
    disabled: false,
    placeholder: "placeholder"
  };

  const wrapper = shallowMount(Calendar);

  it("renders placeholder", async () => {
    expect(wrapper.find(".value").exists()).toBe(false);
    expect(wrapper.find(".placeholder").text()).toMatch("Select date");

    await wrapper.setProps({ placeholder: propsData.placeholder });

    expect(wrapper.find(".placeholder").text()).toMatch(propsData.placeholder);
  });

  it("renders non range", async () => {
    const nonRangeWrapper = shallowMount(Calendar, {
      propsData: { range: false }
    });
    await nonRangeWrapper.find(".box").trigger("click");
    expect(nonRangeWrapper.vm.$data.active).toBe(true);
    expect(nonRangeWrapper.find(".date-picker").isVisible()).toBe(true);

    const dateElms = nonRangeWrapper.findAll(".date:not(.empty)");

    await dateElms.at(0).trigger("click");
    expect(nonRangeWrapper.emitted().input).toBeTruthy();
    expect(nonRangeWrapper.vm.$data.active).toBe(false);
  });

  it("renders range", async () => {
    const rangeWrapper = shallowMount(Calendar, { propsData: { range: true } });
    await rangeWrapper.find(".box").trigger("click");
    expect(rangeWrapper.vm.$data.active).toBe(true);
    expect(rangeWrapper.find(".date-picker").isVisible()).toBe(true);

    const dateElms = rangeWrapper.findAll(".date:not(.empty)");

    await dateElms.at(0).trigger("click");
    expect(rangeWrapper.emitted().input).toBeFalsy();
    expect(rangeWrapper.vm.$data.active).toBe(true);

    await dateElms.at(0).trigger("click");

    expect(rangeWrapper.emitted().input).toBeTruthy();
    expect(rangeWrapper.vm.$data.active).toBe(false);
  });

  it("Can change month", async () => {
    await wrapper.find(".box").trigger("click");
    expect(wrapper.vm.$data.active).toBe(true);
    expect(wrapper.find(".date-picker").isVisible()).toBe(true);
    await wrapper.find(".icon-arrow-right").trigger("click");
    expect(wrapper.find(".month").text()).toBe(
      format(addMonths(new Date(), 1), "MMMM yyyy")
    );
  });

  it("Disabled state", async () => {
    await wrapper.setProps({ disabled: true });
    await wrapper.find(".box").trigger("click");

    expect(wrapper.props("disabled")).toBe(true);
    expect(wrapper.find(".date-picker").exists()).toBe(false);
  });
});
