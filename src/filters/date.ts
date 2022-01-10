import { format } from "date-fns";

export default (value: Date | string, formatStr: string) => {
  try {
    return format(value instanceof Date ? value : new Date(value), formatStr);
  } catch {
    return value;
  }
};
