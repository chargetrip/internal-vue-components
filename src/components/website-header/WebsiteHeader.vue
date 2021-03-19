<template>
  <TopNav class="c-website-header">
    <Menu
      :items="normalizedMenuItems"
      :gap="2"
      class="absolute left-1/2 transform -translate-x-1/2 text-14"
    />
  </TopNav>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TopNav from "../top-nav/TopNav.vue";
import Menu from "../menu/Menu.vue";
import { normalizeHref } from "@/utilities/utilities";

@Component({
  components: { TopNav, Menu }
})
export default class WebsiteHeader extends Vue {
  @Prop() menuItems;
  defaultMenuItems = [
    {
      title: "Products",
      subMenus: [
        {
          items: [
            { title: "API", href: "/api", icon: "terminal" },
            {
              title: "White Labels",
              href: "/white-label-apps",
              icon: "app"
            }
          ]
        }
      ]
    },
    {
      title: "Solutions",
      subMenus: [
        {
          items: [
            {
              isLinkActive: true,
              title: "CPO & eMSP",
              href: "/cpo",
              icon: "charge-stations"
            },
            {
              title: "Automotive OEMs",
              href: "/automotive-eom",
              icon: "car"
            },
            { title: "Fleets", href: "/fleets", icon: "truck" },
            {
              title: "Tech & Media",
              href: "/tech-and-media/",
              icon: "voyager"
            }
          ]
        }
      ]
    },
    {
      title: "Company",
      subMenus: [
        {
          title: "About us",
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
          title: "Success stories",
          items: [
            { title: "Porsche", href: "/success-story/customer-porsche" },
            { title: "Elbil", href: "/success-story/customer-elbil" },
            { title: "Vector", href: "/success-story/customer-vector" }
          ]
        },
        {
          title: "Contact us",
          items: [
            { icon: "phone", title: "+31 6 48 47 59 65" },
            { icon: "contact", title: "Live chat" },
            { icon: "e-mail", title: "info@chargetrip.com" },
            { icon: "route", title: "Rapenburgerstraat 109" }
          ]
        }
      ]
    },
    {
      title: "Pricing",
      href: "/pricing"
    }
  ].map((item: any) => ({
    ...item,
    href: normalizeHref(item.href),
    subMenus: item.subMenus?.map((subMenu: any) => ({
      ...subMenu,
      items: subMenu?.items?.map(item => ({
        ...item,
        href: normalizeHref(item.href)
      }))
    }))
  }));

  get normalizedMenuItems() {
    return this.menuItems || this.defaultMenuItems;
  }
}
</script>
<style lang="scss">
.c-website-header {
  .c-menu-item {
    &.link-active,
    &.router-link-exact-active,
    &.nuxt-link-exact-active {
      @apply text-font-primary font-semibold;
    }
  }
  .item {
    > .c-menu-item {
      @apply h-16 font-semibold;
    }
  }
}
</style>
