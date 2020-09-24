import Alert from "./components/alert";
import Banner from "./components/banner";
import Button from "./components/button";
import Card from "./components/card";
import CompactCard from "./components/compact-card";
import Calendar from "./components/calendar";
import Checkbox from "./components/checkbox";
import CheckboxTree from "./components/checkbox-tree";
import Input from "./components/input";
import Select from "./components/select";
import Switch from "./components/switch";
import Upload from "./components/upload";
import Duo from "./components/duo";
import FormControl from "./components/form-control";
import MenuItem from "./components/menu-item";
import Modal from "./components/modal";
import MonthInput from "./components/month-input";
import Range from "./components/range";
import Readonly from "./components/readonly";
import Snackbar from "./components/snackbar";
import Tab from "./components/tab";
import Tag from "./components/tag";
import TitleWithSubTitle from "./components/title-with-sub-title";
import Tooltip from "./components/tooltip";

const components = {
  Alert,
  Banner,
  Button,
  Card,
  CompactCard,
  Calendar,
  Checkbox,
  CheckboxTree,
  Input,
  Select,
  Switch,
  Upload,
  Duo,
  FormControl,
  MenuItem,
  Modal,
  MonthInput,
  Range,
  Readonly,
  Snackbar,
  Tab,
  Tag,
  TitleWithSubTitle,
  Tooltip
};

function install(Vue) {
  for (const component in components) {
    // tslint:disable-next-line: forin
    Vue.component(components[component].name, components[component]);
  }
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install };

export { default as Alert } from "./components/alert";
export { default as Banner } from "./components/banner";
export { default as Button } from "./components/button";
export { default as Card } from "./components/card";
export { default as CompactCard } from "./components/compact-card";
export { default as Calendar } from "./components/calendar";
export { default as Checkbox } from "./components/checkbox";
export { default as CheckboxTree } from "./components/checkbox-tree";
export { default as Input } from "./components/input";
export { default as Select } from "./components/select";
export { default as Switch } from "./components/switch";
export { default as Upload } from "./components/upload";
export { default as Duo } from "./components/duo";
export { default as FormControl } from "./components/form-control";
export { default as MenuItem } from "./components/menu-item";
export { default as Modal } from "./components/modal";
export { default as MonthInput } from "./components/month-input";
export { default as Range } from "./components/range";
export { default as Readonly } from "./components/readonly";
export { default as Snackbar } from "./components/snackbar";
export { default as Tab } from "./components/tab";
export { default as Tag } from "./components/tag";
export { default as TitleWithSubTitle } from "./components/title-with-sub-title";
export { default as Tooltip } from "./components/tooltip";
