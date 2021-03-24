<template>
  <footer class="c-footer border-t border-alt text-16">
    <div class="px-6 md:px-12 py-14">
      <Container
        class="lg:flex lg:flex-no-wrap grid grid-cols-2 sm:grid-cols-3 gap-6 main-menus justify-between items-start"
      >
        <Menu
          v-for="(menu, key) in normalizedMenus"
          v-bind="menu"
          :key="key"
          direction="column"
        />
        <img :src="logoSrc" alt="Logo" />
      </Container>
    </div>
    <Menu
      class="py-6 border-t legal-menu border-b border-alt px-6 md:px-12 flex justify-center"
      :items="normalizedLegalMenuItems"
      :gap="10"
    />
    <div class="px-6 md:px-12 py-4">
      <Container
        class="copyright grid items-center grid-cols-1 sm:grid-cols-3 pt-4 pb-4 text-font-alt3 gap-5"
      >
        <div class="text-center sm:text-left w-full">© Chargetrip 2020</div>
        <Menu :gap="6" :items="socialMenuItems" class="social-menu mx-auto" />
        <div
          class="justify-center sm:justify-end flex items-center md:text-right"
        >
          Build with love in amsterdam ❤️
        </div>
      </Container>
    </div>
  </footer>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Container from "../container/Container.vue";
import Menu from "../menu/Menu.vue";
import { normalizeHref } from "@/utilities/utilities";

@Component({
  components: { Menu, Container }
})
export default class CFooter extends Vue {
  @Prop({ default: "/logo.svg" }) logoSrc;
  @Prop() legalMenuItems;
  defaultLegalMenuItems = [
    {
      title: "Terms & Conditions",
      href: "/terms-and-conditions"
    },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Mission Statement", href: "/mission-statement" },
    { title: "State of charge", href: "" }
  ].map(item => ({ ...item, href: normalizeHref(item.href) }));

  socialMenuItems = [
    { href: "https://github.com/chargetrip", icon: "github" },
    { href: "https://instagram.com/chargetriphq", icon: "instagram" },
    { href: "https://twitter.com/chargetrip", icon: "twitter" },
    { href: "https://www.linkedin.com/company/chargetrip/", icon: "linkedin" }
  ];

  @Prop() menus;
  defaultMenus: any = [
    {
      title: "Developers",
      items: [{ title: "API Docs" }, { title: "API Reference" }]
    },
    {
      title: "Products",
      items: [
        { title: "API", href: "/api" },
        { title: "White Labels", href: "/white-label-apps" }
      ]
    },
    {
      title: "Solutions",
      items: [
        { title: "CPO & eMSP", href: "/cpo" },
        { title: "Automotive OEMs", href: "/automotive-eom" },
        { title: "Fleets", href: "/fleets" },
        { title: "Tech & Media", href: "/tech-and-media/" }
      ]
    },
    {
      title: "Company",
      items: [
        { title: "About Chargetrip", href: "/about-chargetrip" },
        { title: "Careers", href: "/careers" },
        {
          title: "Newsletter",
          href:
            "https://us12.campaign-archive.com/home/?u=eaea97b9072598e3643ab1131&id=9021c65c75"
        },
        { title: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Stories",
      items: [
        { title: "Porsche", href: "/success-story/customer-porsche" },
        { title: "Elbil", href: "/success-story/customer-elbil" },
        { title: "Vector", href: "/success-story/customer-vector" }
      ]
    }
  ].map((menu: any) => ({
    ...menu,
    items: menu.items.map((item: any) => ({
      ...item,
      href: normalizeHref(item.href)
    }))
  }));

  get normalizedMenus() {
    return this.menus || this.defaultMenus;
  }

  get normalizedLegalMenuItems() {
    return this.legalMenuItems || this.defaultLegalMenuItems;
  }
}
</script>
<style lang="scss">
.c-footer {
  //.main-menus {
  .c-menu {
    nav {
      @apply text-14;

      @screen lg {
        @apply text-16;
      }
    }
  }
  //}
  .c-menu-item {
    &.link-active,
    &.router-link-exact-active,
    &.nuxt-link-exact-active {
      @apply text-font-alt3;
    }
  }

  .copyright {
    @apply text-14;

    @screen lg {
      @apply text-16;
    }
  }

  .social-menu nav {
    @apply text-font-primary text-14;

    @screen lg {
      @apply text-16;
    }
  }
  .legal-menu {
    .item:last-child span {
      color: #ee255c;
    }
  }

  @screen lg-max {
    .main-menus {
      @apply gap-12;
    }

    .legal-menu {
      nav {
        @apply grid grid-cols-1 text-center gap-4 items-center;

        .item {
          @apply mr-0;
        }

        .menu-item-wrapper {
          @apply justify-center;
        }
      }
    }
  }
}
</style>
