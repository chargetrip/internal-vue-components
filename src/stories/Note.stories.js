import Theme from "../components/theme/Theme.vue";
import Note from "../components/note/Note.vue";
import "../assets/styles/index.scss";

export default {
  title: "components/Note",
  component: Note,
  argTypes: {
    display: { control: { type: "select", options: ["block", "inline"] } },
    label: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Note, Theme },
    template: `<Theme :dark-mode="darkMode">
      <div class="grid grid-cols-1 gap-4">
        <Note v-bind="$props">
          Some note text
        </Note>
      </div>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {
  display: "inline"
};
