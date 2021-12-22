import Theme from "../components/theme/Theme.vue";
import Accordion from "../components/accordion/Accordion.vue";
import AccordionItem from "../components/accordion-item/AccordionItem.vue";
import Button from "../components/button/Button.vue";

export default {
  title: "components/Accordion",
  component: Accordion,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Accordion, Theme, AccordionItem, Button },
    data: () => ({
      val: "test",
      forceActive: false
    }),
    template: `<Theme :dark-mode="darkMode">
    <Button size="sm" color="accent" @click="forceActive = true">
      
    </Button>
      <Accordion>
        <AccordionItem title="What are the free tier limits?" :force-active="forceActive" @toggle="forceActive = false">
          Each month you get a limited amount of free API requests to help you develop your application.

          - 1000 free station database requests
          - 1000 free routing requests
          - 1000 free car database requests
          - 100.000 free tile server requests

          If you need a reset on your limit during the month please contact us at info@chargetrip.com.
        </AccordionItem>
        <AccordionItem title="What are the free tier limits?">
          Each month you get a limited amount of free API requests to help you develop your application.

          - 1000 free station database requests
          - 1000 free routing requests
          - 1000 free car database requests
          - 100.000 free tile server requests

          If you need a reset on your limit during the month please contact us at info@chargetrip.com.
        </AccordionItem>
        <AccordionItem title="What are the free tier limits?">
          Each month you get a limited amount of free API requests to help you develop your application.

          - 1000 free station database requests
          - 1000 free routing requests
          - 1000 free car database requests
          - 100.000 free tile server requests

          If you need a reset on your limit during the month please contact us at info@chargetrip.com.
        </AccordionItem>
      </Accordion>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  sticky: true,
  color: "body",
  position: "top"
};
