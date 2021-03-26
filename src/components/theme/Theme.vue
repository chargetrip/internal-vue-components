<template>
  <main
    class="theme antialiased font-body text-font-primary bg-body h-full w-full overflow-y-scroll overflow-x-hidden"
    :class="{ 'theme-dark': darkMode, 'theme-light': !darkMode }"
  >
    <slot />
  </main>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class extends Vue {
  @Prop() darkMode!: boolean;
}
</script>

<style lang="scss">
html,
body,
body #__nuxt,
body #__layout {
  height: 100%;
}

.theme {
  &-dark {
    --body: #0c0c0f;
    --base: #202024;
    --subdued: #161619;
    --alt: #34343d;
    --alt2: #54545c;
    --alt3: #7c7c84;
    --alt4: #ebedef;
    --accent: #1f97ff;
    --accent-alt: #086cc2;
    --accent-alt2: #004886;

    --font-primary: #fff;
    --font-alt: #e8edf1;
    --font-alt2: #ccd5de;
    --font-alt3: #9ca7b2;
    --font-accent: var(--accent);

    --white: #fff;
    --black: #0c0c0f;

    --sticky-bg: linear-gradient(180deg, #0c0c0f 80%, rgba(12, 12, 15, 0) 100%);

    --warning: #ed7922;
    --warning-alt: #aa4e09;
    --warning-alt2: #331600;

    --error: #e12424;
    --error-alt: #a11616;
    --error-alt2: #480a0a;

    --success: #2bc7b4;
    --success-alt: #1d8679;
    --success-alt2: #0d3b35;

    --note: #7214e9;
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

  &-light {
    --body: #fff;
    --base: #f4f8fb;
    --subdued: #fafcfd;
    --alt: #e5f0f5;
    --alt2: #c9dee9;
    --alt3: #8dadbf;
    --alt4: #608192;
    --accent: #0078ff;
    --accent-alt: #005ee5;
    --accent-alt2: #0041c8;

    --font-primary: #1b2023;
    --font-alt: #2c353a;
    --font-alt2: #45535b;
    --font-alt3: #566a75;
    --font-accent: var(--accent);

    --white: #fff;
    --black: #0c0c0f;

    --sticky-bg: linear-gradient(180deg, #fff 80%, rgba(255, 255, 255, 0) 100%);

    --warning: #f46f09;
    --warning-alt: #f8984e;
    --warning-alt2: #fcd7ba;

    --error: #ef0b0b;
    --error-alt: #f63c3c;
    --error-alt2: #fba7a7;

    --success: #19ddc5;
    --success-alt: #7ff0e3;
    --success-alt2: #c8f9f3;

    --note: #680ddb;
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
}
</style>
