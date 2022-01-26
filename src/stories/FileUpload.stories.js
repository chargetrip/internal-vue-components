import Theme from "../components/theme/Theme.vue";
import FileUpload from "../components/file-upload/FileUpload.vue";
import Button from "../components/button/Button.vue";
import "../assets/styles/index.scss";
import { icons } from "./utils";
import "./storybook.css";
import { validationMixin } from "vuelidate";

export default {
  title: "Form/FileUpload",
  component: FileUpload,
  argTypes: {
    icon: { options: icons, control: { type: "select" } },
    filetypes: { control: { type: "object" } },
    hotkey: { control: { type: "object" } },
    multiple: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { FileUpload, Button, Theme },
    mixins: [validationMixin],
    data() {
      return {
        errorMessages: {
          requireOneJPEG: "At least one jpeg file should be attached",
          maxBytes: "Attached files should be less than 20 MB"
        },
        form: {
          fileupload1: null,
          fileupload2: null
        }
      };
    },
    validations: {
      form: {
        fileupload1: {
          maxBytes: files => {
            console.log(files);
            // Whether the selected files are less than 20 MiB (20971520 bytes).
            return (
              (files ?? []).reduce((sum, file) => sum + file.size, 0) < 20971520
            );
          }
        },
        fileupload2: {
          requireOneJPEG: files => {
            // Whether there is at least one `jpeg` file selected
            return (files ?? []).some(file => file.type === "image/jpeg");
          }
        }
      }
    },
    methods: {
      submit() {
        this.$v.$touch();
      }
    },
    template: `<Theme :dark-mode="darkMode">
      <div class="grid grid-cols-1 gap-4 content-start max-w-lg">
        <p>Require the file(s) to be less than 20 MiB.</p>
        <FileUpload
          v-model="$v.form.fileupload1.$model"
          :rules="errorMessages"
          :error-message="null"
          :form="$v"
          :validation="$v.form.fileupload1"
          v-bind="$props"
          rules-title="File requirements"
        />
        <p>Require at least one <code>jpeg</code> file(s) to be added.</p>
        <FileUpload
          v-model="$v.form.fileupload2.$model"
          :rules="errorMessages"
          :error-message="null"
          :form="$v"
          :validation="$v.form.fileupload2"
          v-bind="$props"
          rules-title="File requirements"
        />
        <Button @click.native="submit" type="primary" size="md">
          Submit
        </Button>
      </div>
    </Theme>`
  };
};

export const Single = Template.bind({});
Single.args = {
  multiple: false
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true
};
