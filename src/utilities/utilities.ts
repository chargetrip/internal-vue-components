export function normalizeHref(href) {
  if (!href) return null;

  const _href = href?.[0] === "/" ? `https://chargetrip.com${href}` : href;

  return _href[_href.length - 1] === "/" ? _href : `${_href}/`;
}

export function normalizeLinkItem(item, origin, currentUrl) {
  if (!(item.href || item.to)) return { ...item, target: "self" };

  const href = item.href?.[0] === "/" ? `${origin}${item.href}` : item.href;
  const normalizedHref = href?.[href?.length - 1] === "/" ? href : `${href}/`;
  const normalizedTo =
    item.to?.[item.to?.length - 1] === "/" ? item.to : `${item.to}/`;
  const normalizedCurrentUrl =
    currentUrl?.[currentUrl?.length - 1] === "/"
      ? currentUrl
      : `${currentUrl}/`;

  return {
    ...item,
    href: normalizedHref,
    target: "_self",
    isLinkActive:
      normalizedHref === normalizedCurrentUrl ||
      `${origin}${normalizedTo}` === normalizedCurrentUrl
  };
}

export const openSmallchat = () => {
  window?.Smallchat?.("open");
};
