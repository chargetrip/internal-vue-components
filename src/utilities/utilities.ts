import { Vue } from "vue-property-decorator";
import Base from "@/mixins/base";
import { clamp } from "lodash";
import BezierEasing from "bezier-easing";
import { removeItem } from "./single-frame";

export function normalizeHref(href) {
  if (!href) return null;

  const _href = href?.[0] === "/" ? `https://chargetrip.com${href}` : href;

  return _href[_href.length - 1] === "/" ? _href : `${_href}/`;
}

export const openSmallchat = () => {
  window?.Smallchat?.("open");
};

export const FormControlProps = Vue.extend({
  mixins: [Base],
  props: {
    icon: {
      type: [String, Boolean],
      default: false
    },
    hotkey: {
      type: Object
    },
    id: {
      type: String
    },
    placeholder: {
      type: String
    },
    validation: {
      type: [Object, Boolean]
    },
    errorMessage: {
      type: String,
      default: "This field is required"
    },
    showError: {
      type: Boolean
    },
    isSkeleton: {
      type: Boolean,
      default: true
    },
    name: {
      type: String
    },
    autocomplete: {
      type: String
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showCheckmark: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    suffix: {
      type: String
    },
    prefix: {
      type: String
    },
    value: {
      type: [String, Array, Boolean, Date, Number]
    },
    labelInside: {
      type: Boolean
    },
    labelAlwaysVisible: {
      type: Boolean
    }
  }
});

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

export const threshold = getThresholds({ steps: 50 });

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

export const slugify = str =>
  str
    .trim()
    .replace(new RegExp("-", "g"), "")
    .replace(/\./g, "-")
    .replace(new RegExp("\\s+", "g"), "-")
    .toLowerCase();

export const callbackExtender = (query, min): Promise<any> => {
  let timeout;
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    let exceededMinimum = false;
    let response = null;
    let didResolve = false;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      exceededMinimum = true;

      if (didResolve) {
        resolve(response);
      }
    }, min);

    response = await query().catch(reject);
    didResolve = true;

    if (exceededMinimum) {
      resolve(response);
    }
  });
};
