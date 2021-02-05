import Note from "../components/note/Note.vue";
import "../assets/styles/index.scss";

export default {
  title: "components/Note",
  component: Note,
  argTypes: {
    display: { control: { type: "select", options: ["block", "inline"] } },
    label: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Note },
    template: `<div class="theme-dark">
      <div class="grid grid-cols-1 gap-4">
        <Note v-bind="$props">
          Some note text
        </Note>
      </div>
    </div>`
  };
};

export const Default = Template.bind({});
Default.args = {
  display: "inline"
};
