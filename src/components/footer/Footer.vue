<template>
  <footer
    class="c-footer bg-body border-t border-alt text-16 overflow-hidden relative z-10"
  >
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
        <img class="w-6" :src="logoSrc" alt="Logo" />
      </Container>
    </div>
    <Menu
      class="py-6 border-t legal-menu border-b border-alt px-6 md:px-12 flex justify-center"
      :items="normalizedLegalMenuItems"
      :gap="10"
    />
    <div class="px-6 md:px-12 py-4">
      <Container
        ref="container"
        class="copyright grid items-center grid-cols-1 sm:grid-cols-3 pt-4 pb-4 text-font-alt3 gap-5"
      >
        <div class="text-center sm:text-left w-full">© Chargetrip 2020</div>
        <Menu :gap="6" :items="socialMenuItems" class="social-menu mx-auto" />
        <div
          class="justify-center sm:justify-end flex items-center md:text-right transition duration-500 ease-out"
          :style="{ transform: `translateX(${translateX}px)` }"
        >
          Build with love in
          <div class="inline-block h-6 relative overflow-hidden text-left ml-1">
            <span class="opacity-0"> {{ longestPlace }} ❤️</span>
            <span
              ref="place"
              v-for="(place, key) in places"
              :key="key"
              :class="{
                leave: key === previousPlaceIndex,
                enter: key === placeIndex
              }"
              class="top-0 h-full left-0 absolute flex items-center opacity-0 transform translate-y-6 place"
            >
              {{ place }} ❤️
            </span>
          </div>
        </div>
      </Container>
    </div>
  </footer>
</template>
<script lang="ts">
import { Vue, Component, Prop, Ref } from "vue-property-decorator";
import Container from "../container/Container.vue";
import Menu from "../menu/Menu.vue";
import { normalizeHref } from "@/utilities/utilities";

@Component({
  components: { Menu, Container }
})
export default class CFooter extends Vue {
  @Prop({ default: "/logo.svg" }) logoSrc;
  @Prop() legalMenuItems;
  @Ref("place") placeEls;
  @Ref("container") container;
  placeIndex = 0;
  preventTransition = false;
  previousPlaceIndex: null | number = null;
  places = [
    "Amsterdam",
    "Vienna",
    "Utrecht",
    "Bucharest",
    "Valencia",
    "Saint Moritz"
  ];
  defaultLegalMenuItems = [
    {
      title: "Terms & Conditions",
      href: "/terms-and-conditions"
    },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Mission Statement", href: "/mission-statement" },
    {
      title: "State of charge",
      href:
        "https://us12.campaign-archive.com/home/?u=eaea97b9072598e3643ab1131&id=9021c65c75"
    },
    { title: "Try Chargetrip Go", href: "https://go.chargetrip.com/" }
  ].map(item => ({ ...item, href: normalizeHref(item.href) }));

  socialMenuItems = [
    { href: "https://github.com/chargetrip", icon: "logo-github" },
    { href: "https://twitter.com/chargetrip", icon: "logo-twitter" },
    {
      href: "https://www.linkedin.com/company/chargetrip/",
      icon: "logo-linkedin"
    }
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
  translateX = 0;
  interval: null | number = null;

  mounted() {
    this.interval = setInterval(() => {
      this.preventTransition = false;
      this.previousPlaceIndex = this.placeIndex;

      this.placeIndex =
        this.placeIndex < this.places.length - 1 ? this.placeIndex + 1 : 0;

      if (window.innerWidth >= 768) {
        const containerRect = this.container.$el.getBoundingClientRect();
        const placeRect = this.placeEls[
          this.placeIndex
        ].getBoundingClientRect();

        this.translateX =
          this.translateX + containerRect.right - placeRect.right;
      }
    }, 5000);
  }

  get longestPlace() {
    return this.places.sort((a, b) => b.length - a.length)[0];
  }

  get normalizedMenus() {
    return this.menus || this.defaultMenus;
  }

  get normalizedLegalMenuItems() {
    return this.legalMenuItems || this.defaultLegalMenuItems;
  }

  beforeDestroy() {
    clearInterval(this.interval as number);
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

  .place {
    @apply opacity-0;

    &.enter,
    &.leave {
      @apply transition duration-500 ease-in-out;
    }
    &.enter {
      @apply opacity-100 translate-y-0;
    }
    &.leave {
      @apply -translate-y-6;
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
    .item:nth-last-child(2) span {
      color: #ee255c;
    }
    .item:nth-last-child(1) span {
      @apply text-accent font-semibold;
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

        .menu-item-wrapper,
        .c-menu-item {
          @apply justify-center;
        }
      }
    }
  }
}
</style>
