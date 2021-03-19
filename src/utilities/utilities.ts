export function normalizeHref(href) {
  return href?.[0] === "/" ? `https://chargetrip.com${href}` : href;
}
