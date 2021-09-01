<template>
  <main
    class="theme antialiased font-body text-font-primary bg-body"
    :class="{
      'theme-dark': darkMode,
      'theme-light': !darkMode,
      'no-transition': noTransition
    }"
  >
    <slot />
  </main>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({})
export default class extends Vue {
  @Prop() darkMode!: boolean;
  @Prop() isMenuOpen!: boolean;
  noTransition = false;
  timeout = 0;

  @Watch("darkMode") onDarkModeChange() {
    this.noTransition = true;

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.noTransition = false;
    }, 50);
  }
}
</script>

<style lang="scss">
.theme {
  &-dark,
  &-dark .page.theme-dark {
    --body-rgb: 12, 12, 15;
    --body: rgb(var(--body-rgb));
    --transparent-body: rgba(var(--body-rgb), 0);

    --base-rgb: 32, 32, 36;
    --base: rgb(var(--base-rgb));
    --transparent-base: rgba(var(--base-rgb), 0);

    --subdued-rgb: 22, 22, 25;
    --subdued: rgb(var(--subdued-rgb));
    --transparent-subdued: rgba(var(--subdued-rgb), 0);

    --alt: #34343d;
    --alt2: #54545c;
    --alt3: #7c7c84;
    --alt4: #ebedef;
    --accent-rgb: 31, 151, 255;
    --accent: rgb(var(--accent-rgb));
    --accent-alt: #086cc2;
    --accent-alt2: #004886;

    --font-primary: #fff;
    --font-alt: #e8edf1;
    --font-alt2: #ccd5de;
    --font-alt3: #9ca7b2;
    --font-accent: var(--accent);

    --white: #fff;
    --black: #0c0c0f;

    --warning-rgb: 237, 121, 34;
    --warning: rgb(var(--warning-rgb));
    --warning-alt: #aa4e09;
    --warning-alt2: #331600;

    --error-rgb: 225, 36, 36;
    --error: rgb(var(--error-rgb));
    --error-alt: #a11616;
    --error-alt2: #480a0a;

    --success-rgb: 43, 199, 180;
    --success: rgb(var(--success-rgb));
    --success-alt: #1d8679;
    --success-alt2: #0d3b35;

    --note-rgb: 114, 20, 233;
    --note: rgb(var(--note-rgb));
    --note-alt: #4e0ea0;
    --note-alt2: #330967;

    --shadow-up-xl: 0 -8px 16.4762px rgba(0, 0, 0, 0.04),
      0 -4px 9px rgba(0, 0, 0, 0.06);
    --shadow-up-md: 0 -8px 16.4762px rgba(0, 0, 0, 0.04),
      0 -4px 9px rgba(0, 0, 0, 0.06);
    --shadow-down-xl: 0 20 30.7363px rgba(0, 0, 0, 0.04),
      0 8px 16.4762px rgba(0, 0, 0, 0.04), 0 4px 9px rgba(0, 0, 0, 0.06);
    --shadow-down-md: 0 8px 16.4762px rgba(0, 0, 0, 0.04),
      0 4px 9px rgba(0, 0, 0, 0.06);
    --shadow-down-sm: 0 4px 4px 4px rgba(0, 0, 0, 0.02),
      0 2px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-overlay: 0 45px 83px rgba(32, 32, 36, 0.12),
      0 17.2855px 46.5041px rgba(32, 32, 36, 0.081879),
      0 10.8345px 34.7712px rgba(32, 32, 36, 0.0669109),
      0 7.34724px 27.1788px rgba(32, 32, 36, 0.0544026),
      0 4.72049px 19.8662px rgba(32, 32, 36, 0.0403388),
      0 2.34878px 11.1476px rgba(32, 32, 36, 0.0227083);

    --chart-gradient-1: rgba(0, 120, 255, 0.5);
    --chart-gradient-2: rgba(0, 120, 255, 0);
  }

  &-light,
  &-light .page.theme-light {
    --body-rgb: 255, 255, 255;
    --body: rgb(var(--body-rgb));
    --transparent-body: rgba(var(--body-rgb), 0);

    --base-rgb: 244, 248, 251;
    --base: rgb(var(--base-rgb));
    --transparent-base: rgba(var(--base-rgb), 0);

    --subdued-rgb: 250, 252, 253;
    --subdued: rgb(var(--subdued-rgb));
    --transparent-subdued: rgba(var(--subdued-rgb), 0);

    --alt: #e5f0f5;
    --alt2: #c9dee9;
    --alt3: #8dadbf;
    --alt4: #608192;
    --accent-rgb: 0, 120, 255;
    --accent: rgb(var(--accent-rgb));
    --accent-alt: #005ee5;
    --accent-alt2: #0041c8;

    --font-primary: #1b2023;
    --font-alt: #2c353a;
    --font-alt2: #45535b;
    --font-alt3: #566a75;
    --font-accent: var(--accent);

    --white: #fff;
    --black: #0c0c0f;

    --warning-rgb: 244, 111, 9;
    --warning: rgb(var(--warning-rgb));
    --warning-alt: #f8984e;
    --warning-alt2: #fcd7ba;

    --error-rgb: 239, 11, 11;
    --error: rgb(var(--error-rgb));
    --error-alt: #f63c3c;
    --error-alt2: #fba7a7;

    --success-rgb: 25, 221, 197;
    --success: rgb(var(--success-rgb));
    --success-alt: #7ff0e3;
    --success-alt2: #c8f9f3;

    --note-rgb: 104, 13, 219;
    --note: rgb(var(--note-rgb));
    --note-alt: #ab6ef7;
    --note-alt2: #e9d8fd;

    --shadow-up-xl: 0 -8px 16.4762px rgba(0, 0, 0, 0.04),
      0 -4px 9px rgba(0, 0, 0, 0.06);
    --shadow-up-md: 0 -8px 16.4762px rgba(0, 0, 0, 0.04),
      0 -4px 9px rgba(0, 0, 0, 0.06);
    --shadow-down-xl: 0 20 30.7363px rgba(0, 0, 0, 0.04),
      0 8px 16.4762px rgba(0, 0, 0, 0.04), 0 4px 9px rgba(0, 0, 0, 0.06);
    --shadow-down-md: 0 8px 16.4762px rgba(0, 0, 0, 0.04),
      0 4px 9px rgba(0, 0, 0, 0.06);
    --shadow-down-sm: 0 4px 4px 4px rgba(0, 0, 0, 0.02),
      0 2px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-overlay: 0 7.34724px 27.1788px rgba(32, 32, 36, 0.0544026),
      0 4.72049px 19.8662px rgba(32, 32, 36, 0.0403388),
      0 2.34878px 11.1476px rgba(32, 32, 36, 0.0227083);

    --chart-gradient-1: rgba(31, 151, 255, 0.32);
    --chart-gradient-2: rgba(31, 151, 255, 0);
  }

  --sticky-bg: linear-gradient(
    180deg,
    var(--body) 80%,
    var(--transparent-body) 100%
  );

  --sticky-body-to-down-bg: linear-gradient(
    180deg,
    var(--body) 80%,
    var(--transparent-body) 100%
  );
  --sticky-body-to-up-bg: linear-gradient(
    0deg,
    var(--body) 80%,
    var(--transparent-body) 100%
  );

  --sticky-base-to-down-bg: linear-gradient(
    180deg,
    var(--base) 80%,
    var(--transparent-base) 100%
  );

  --sticky-base-to-up-bg: linear-gradient(
    0deg,
    var(--base) 80%,
    var(--transparent-base) 100%
  );

  --sticky-subdued-to-down-bg: linear-gradient(
    180deg,
    var(--base) 80%,
    var(--transparent-base) 100%
  );

  --sticky-subdued-to-up-bg: linear-gradient(
    0deg,
    var(--base) 80%,
    var(--transparent-base) 100%
  );

  &.no-transition {
    .box,
    .animate,
    label,
    .transition,
    .transition-all {
      transition-duration: 0s !important;
    }
  }
}
</style>
