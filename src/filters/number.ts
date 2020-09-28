export default (value: number, locale = "nl-NL") => {
  return value.toLocaleString(locale);
};
