import Table from "../components/table/Table.vue";
import Row from "../components/row/Row.vue";
import Cell from "../components/cell/Cell.vue";
import "../assets/styles/index.scss";
import router from "../router";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    sideOffset: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router,
    props: Object.keys(argTypes),
    components: { Table, Row, Cell },
    template: `<div class="theme-dark">
      <Table v-bind="$props">
        <Row url="http://google.com">
          <Cell :is="'th'">Hey</Cell>
          <Cell :is="'th'">There</Cell>
          <Cell :is="'th'">Hola</Cell>
        </Row>
        <Row>
          <Cell>Hey</Cell>
          <Cell>There</Cell>
          <Cell>Hola</Cell>
        </Row>
      </Table>
    </div>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  sideOffset: true
};
