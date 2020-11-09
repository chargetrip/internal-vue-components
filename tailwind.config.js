// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"]
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      screens: {
        "xl-max": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "lg-max": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "md-max": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "sm-max": { max: "639px" }
        // => @media (max-width: 639px) { ... }
      },
      maxHeight: (theme, { negative }) => {
        return {
          auto: "auto",
          ...theme("maxWidth"),
          ...theme("spacing"),
          ...negative(theme("spacing"))
        };
      },
      minWidth: (theme, { negative }) => {
        return {
          ...theme("spacing"),
          ...negative(theme("spacing"))
        };
      },
      flex: {
        1: 1,
        2: 2,
        3: 3
      },
      opacity: {
        "10": ".1",
        "20": ".2",
        "30": ".3",
        "40": ".4",
        "50": ".5",
        "60": ".6",
        "70": ".7",
        "80": ".8",
        "90": ".9"
      },
      colors: {
        body: "var(--body)",
        base: "var(--base)",
        alt: "var(--alt)",
        alt2: "var(--alt2)",
        alt3: "var(--alt3)",
        alt4: "var(--alt4)",
        accent: "var(--accent)",
        "accent-alt": "var(--accent-alt)",
        "accent-alt2": "var(--accent-alt2)",
        "font-primary": "var(--font-primary)",
        "font-alt": "var(--font-alt)",
        "font-alt2": "var(--font-alt2)",
        "font-alt3": "var(--font-alt3)",
        "font-accent": "var(--font-accent)",
        black: "var(--black)",
        white: "var(--white)",
        warning: "var(--warning)",
        "warning-alt": "var(--warning-alt)",
        "warning-alt2": "var(--warning-alt2)",
        error: "var(--error)",
        "error-alt": "var(--error-alt)",
        "error-alt2": "var(--error-alt2)",
        success: "var(--success)",
        "success-alt": "var(--success-alt)",
        "success-alt2": "var(--success-alt2)",
        note: "var(--note)",
        "note-alt": "var(--note-alt)",
        "note-alt2": "var(--note-alt2)"
      },
      borderRadius: {
        "2xs": "2px",
        xs: "3px",
        sm: "4px",
        md: "6px",
        default: "8px",
        lg: "10px",
        xl: "12px"
      },
      height: {
        "1/2": "50%"
      },
      inset: {
        "1/2": "50%",
        "1/3": `calc(100% / 3)`,
        full: "100%",
        "2/1": "200%"
      },
      transitionDuration: {
        "1500": "1500ms",
        "2000": "2000ms",
        "2500": "2500ms",
        "3000": "3000ms"
      },
      translate: {
        "1/4": "25%"
      },
      cursor: {
        "ns-resize": "ns-resize"
      },
      spacing: {
        "2px": "2px",
        7: "1.75rem",
        11: "2.75rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        18: "4.5rem",
        24: "6rem",
        25: "6.25rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        32: "8rem",
        34: "8.5rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        80: "20rem",
        "2/1": "200%"
      },
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9"
      },
      fontSize: {
        0: "0",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        28: "28px",
        32: "32px",
        40: "40px",
        48: "48px",
        64: "64px",
        72: "72px"
      },
      fontFamily: {
        mono: [
          "Consolas",
          "-apple-system",
          "Courier New",
          "Menlo",
          "Monaco",
          "Liberation Mono",
          "monospace"
        ],
        display: "'Inter', sans-serif",
        body: "'Inter', sans-serif"
      },
      boxShadow: {
        "up-xl": "var(--shadow-up-xl)",
        "up-md": "var(--shadow-up-md)",
        "down-xl": "var(--shadow-down-xl)",
        "down-md": "var(--shadow-down-md)",
        "down-sm": "var(--shadow-down-sm)",
        overlay: "var(--shadow-overlay)",
        xs: "0px 1px 0px #030303",
        default: "0px 6px 6px rgba(0, 0, 0, 0.15)",
        inset: "inset 0px -1px 0px #2D2E33"
      }
    }
  },
  variants: {
    overflow: ["important"],
    zIndex: ["responsive", "hover"],
    borderWidth: ["responsive", "hover", "focus", "last", "first", "important"],
    borderColor: [
      "responsive",
      "hover",
      "focus",
      "last",
      "first",
      "group-hover"
    ],
    display: ["responsive", "hover", "focus", "last", "first", "group-hover"],
    backgroundColor: [
      "important",
      "responsive",
      "hover",
      "focus",
      "last",
      "first",
      "group-hover"
    ],
    padding: ["important", "responsive", "first"],
    width: ["important", "responsive", "first"],
    minHeight: ["responsive", "last", "last"],
    margin: ["important", "responsive", "hover", "focus", "last", "first"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    textColor: [
      "important",
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover"
    ],
    outline: ["focus", "responsive", "hover"]
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("important", ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls(decl => {
            decl.important = true;
          });
        });
      });
    })
  ]
};
