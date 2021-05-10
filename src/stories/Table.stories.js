import Theme from "../components/theme/Theme.vue";
import Table from "../components/table/Table.vue";
import Row from "../components/row/Row.vue";
import Cell from "../components/cell/Cell.vue";
import "../assets/styles/index.scss";
import router from "../router";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    sideOffset: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router,
    props: Object.keys(argTypes),
    components: { Table, Row, Cell, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Table v-bind="$props">
        <Row>
          <Cell tag="th">Hey</Cell>
          <Cell tag="th">There</Cell>
          <Cell tag="th">[Hola](https://google.com)</Cell>
        </Row>
        <Row url="http://google.com">
          <Cell>Hey</Cell>
          <Cell>There There There There Therev There There There There Therev There There There There Therev There There There There Therev There There There There Therev There There There There Therev</Cell>
          <Cell>Hola</Cell>
        </Row>
        <Row to="/">
          <Cell>Hey</Cell>
          <Cell>There</Cell>
          <Cell>Hola</Cell>
        </Row>
      </Table>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  sideOffset: false
};
