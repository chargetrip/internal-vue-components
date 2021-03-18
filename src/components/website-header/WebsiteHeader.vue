<template>
  <TopNav class="c-website-header">
    <Menu
      :items="menuItems"
      :gap="8"
      class="absolute left-1/2 transform -translate-x-1/2 text-14"
    />
  </TopNav>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopNav from "../top-nav/TopNav.vue";
import Menu from "../menu/Menu.vue";

@Component({
  components: { TopNav, Menu }
})
export default class WebsiteHeader extends Vue {
  menuItems = [
    {
      title: "Products",
      subMenus: [
        {
          items: [{ title: "API" }, { title: "White Labels" }]
        }
      ]
    },
    {
      title: "Solutions",
      subMenus: [
        {
          items: [
            { title: "CPO & eMSP" },
            { title: "Automotive OEMs" },
            { title: "Fleets" },
            { title: "Tech & Media" }
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
            { title: "About Chargetrip" },
            { title: "Careers" },
            { title: "Newsletter" },
            { title: "Blog" }
          ]
        },
        {
          title: "Success stories",
          items: [{ title: "Porsche" }, { title: "Elbil" }, { title: "Vector" }]
        },
        {
          title: "Contact us",
          items: [
            { title: "+31 6 48 47 59 65" },
            { title: "Live chat" },
            { title: "info@chargetrip.com" },
            { title: "Rapenburgerstraat 109" }
          ]
        }
      ]
    },
    {
      title: "Pricing",
      href: "https://chargetirp.com/pricing"
    }
  ];
}
</script>
<style lang="scss">
.c-website-header {
  .item {
    > .c-menu-item {
      @apply h-16 font-semibold;
    }
  }
}
</style>
