import { threshold } from "./utilities";
import { clamp } from "lodash";
import BezierEasing from "bezier-easing";
import { removeItem } from "./single-frame";

export const intersector = ({ el, onEnter, onLeave, state = 0 }) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      // console.log(el, entry)
      if (entry.intersectionRatio && !state) {
        state = 1;
        onEnter(entry);
      }

      if (!entry.intersectionRatio && state) {
        state = 0;
        onLeave(entry);
      }
    },
    {
      threshold
    }
  );

  observer.observe(el);

  return observer;
};

export const directivesMap = new Map();

export function normalizeLinkItem(item, origin, currentUrl) {
  if (
    !(item.href || item.to) ||
    item?.href?.includes("http") ||
    item?.href?.includes("mail") ||
    item?.href?.includes("tel")
  ) {
    return { ...item, target: "self" };
  }

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
    href: item.href ? normalizedHref : null,
    target: "_self",
    to: item.to ? normalizedTo : null,
    isLinkActive:
      normalizedHref === normalizedCurrentUrl ||
      `${origin}${normalizedTo}` === normalizedCurrentUrl
  };
}

export const getThresholds = ({ steps = 0, min = 0, max = 1 }) => {
  const thresholds = [min];

  for (let i = 1; i <= steps; i++) {
    const range = max - min;
    const step = i / steps;

    thresholds.push(min + step * range);
  }

  return thresholds;
};

export function itemInit(el) {
  const id =
    el.getAttribute("data-id") || (Date.now() + Math.random()).toString();

  el.setAttribute("data-id", id);

  const item = directivesMap.get(id) || {};

  return { id, item };
}

export const unbind = el => {
  const {
    item: { reference, observer }
  } = itemInit(el);

  el.style = null;
  if (reference) {
    removeItem(reference);
  } else {
    removeItem(el);
  }

  observer?.disconnect?.();
};

export function directiveInit(el) {
  const { id, item } = itemInit(el);
  unbind(el);

  return { id, item };
}

export function isInKeyframe(decimal, { start, end }) {
  return start <= decimal && end >= decimal;
}

export default getThresholds({ steps: 50 });

export function normalizedDecimal(decimal, { start, end, multiplier }) {
  multiplier = multiplier || 1 / Math.abs(end - start);

  return (clamp(decimal, start, end) - start) * multiplier;
}

export function getOffset(height, origin) {
  if (origin === "top") {
    return height;
  }

  if (origin === "bottom") {
    return 0;
  }

  return height / 2;
}

export const easings = {
  ease: BezierEasing(0.25, 0.1, 0.25, 1.0),
  linear: BezierEasing(0.0, 0.0, 1.0, 1.0),
  easeIn: BezierEasing(0.42, 0.0, 1.0, 1.0),
  easeOut: BezierEasing(0.0, 0.0, 0.58, 1.0),
  easeInOut: BezierEasing(0.42, 0.0, 0.58, 1)
};

export function getEndKeyframes(keyframes) {
  return keyframes.reduce((obj, item) => {
    if (!obj[item.name] || item.end > obj[item.name].end) {
      obj[item.name] = item;
    }

    return obj;
  }, {});
}

export function getStartKeyframes(keyframes) {
  return keyframes.reduce((obj, item) => {
    if (!obj[item.name] || item.start < obj[item.name].start) {
      obj[item.name] = item;
    }

    return obj;
  }, {});
}

export const openSmallchat = () => {
  window?.Smallchat?.("open");
};
