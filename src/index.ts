import ActionBar from "./components/action-bar";
import Alert from "./components/alert";
import Banner from "./components/banner";
import Button from "./components/button";
import Card from "./components/card";
import Cell from "./components/cell";
import CompactCard from "./components/compact-card";
import Calendar from "./components/calendar";
import Checkbox from "./components/checkbox";
import CheckboxTree from "./components/checkbox-tree";
import Input from "./components/input";
import Select from "./components/select";
import SideNav from "./components/side-nav";
import Switch from "./components/switch";
import Upload from "./components/upload";
import CombinedFormControl from "./components/combined-form-control";
import FormControl from "./components/form-control";
import MenuItem from "./components/menu-item";
import Modal from "./components/modal";
import MonthInput from "./components/month-input";
import QuickNav from "./components/quick-nav";
import Radio from "./components/radio";
import Range from "./components/range";
import Readonly from "./components/readonly";
import Row from "./components/row";
import Snackbar from "./components/snackbar";
import Tab from "./components/tab";
import Table from "./components/table";
import Tag from "./components/tag";
import TitleWithSubTitle from "./components/title-with-sub-title";
import Tooltip from "./components/tooltip";
import TopNav from "./components/top-nav";

const components = {
  ActionBar,
  Alert,
  Banner,
  Button,
  Card,
  Cell,
  CompactCard,
  Calendar,
  Checkbox,
  CheckboxTree,
  Input,
  Select,
  SideNav,
  Switch,
  Upload,
  CombinedFormControl,
  FormControl,
  MenuItem,
  Modal,
  MonthInput,
  QuickNav,
  Radio,
  Range,
  Readonly,
  Row,
  Snackbar,
  Tab,
  Table,
  Tag,
  TitleWithSubTitle,
  Tooltip,
  TopNav
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

export { default as ActionBar } from "./components/action-bar";
export { default as Alert } from "./components/alert";
export { default as Banner } from "./components/banner";
export { default as Button } from "./components/button";
export { default as Card } from "./components/card";
export { default as Cell } from "./components/cell";
export { default as CompactCard } from "./components/compact-card";
export { default as Calendar } from "./components/calendar";
export { default as Checkbox } from "./components/checkbox";
export { default as CheckboxTree } from "./components/checkbox-tree";
export { default as Input } from "./components/input";
export { default as Select } from "./components/select";
export { default as SideNav } from "./components/side-nav";
export { default as Switch } from "./components/switch";
export { default as Upload } from "./components/upload";
export { default as CombinedFormControl } from "./components/combined-form-control";
export { default as FormControl } from "./components/form-control";
export { default as MenuItem } from "./components/menu-item";
export { default as Modal } from "./components/modal";
export { default as MonthInput } from "./components/month-input";
export { default as QuickNav } from "./components/quick-nav";
export { default as Radio } from "./components/radio";
export { default as Range } from "./components/range";
export { default as Readonly } from "./components/readonly";
export { default as Row } from "./components/row";
export { default as Snackbar } from "./components/snackbar";
export { default as Tab } from "./components/tab";
export { default as Table } from "./components/table";
export { default as Tag } from "./components/tag";
export { default as TitleWithSubTitle } from "./components/title-with-sub-title";
export { default as Tooltip } from "./components/tooltip";
export { default as TopNav } from "./components/top-nav";
