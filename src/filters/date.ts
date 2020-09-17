import { format } from "date-fns";

export default (value: Date | string, formatStr: string) => {
  return format(value instanceof Date ? value : new Date(value), formatStr);
};
