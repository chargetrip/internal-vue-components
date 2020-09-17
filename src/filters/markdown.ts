import * as showdown from "showdown";
const converter = new showdown.Converter();

export default (value: string) => {
  return converter.makeHtml(value);
};
