import { Vue } from "vue-property-decorator";
import Base from "@/mixins/base";

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
      type: String
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
