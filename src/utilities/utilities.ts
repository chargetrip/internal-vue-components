export function normalizeHref(href) {
  if (!href) return null;

  const _href = href?.[0] === "/" ? `https://chargetrip.com${href}` : href;

  return _href[_href.length - 1] === "/" ? _href : `${_href}/`;
}
