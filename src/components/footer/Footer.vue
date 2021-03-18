<template>
  <footer class="c-footer border-t border-alt">
    <div class="px-6 md:px-12 py-14">
      <Container class="flex justify-between items-start">
        <Menu
          v-for="(menu, key) in menus"
          v-bind="menu"
          :key="key"
          direction="column"
        />
        <img src="/logo.svg" alt="Logo" />
      </Container>
    </div>
    <Menu
      class="py-6 border-t legal-menu border-b border-alt px-6 md:px-12 flex justify-center"
      :items="legalMenuItems"
      :gap="10"
    />
    <Container class="grid grid-cols-3 text-14 pt-4 pb-14 text-font-alt3">
      <div>© Chargetrip 2020</div>
      <Menu :gap="6" :items="socialMenuItems" class="social-menu mx-auto" />
      <div class="text-right">Build with love in amsterdam ❤️</div>
    </Container>
  </footer>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Container from "../container/Container.vue";
import Menu from "../menu/Menu.vue";

@Component({
  components: { Menu, Container }
})
export default class CFooter extends Vue {
  legalMenuItems = [
    { title: "Terms & Conditions" },
    { title: "Privacy Policy" },
    { title: "Mission Statement" },
    { title: "State of charge" }
  ];

  socialMenuItems = [
    { icon: "github" },
    { icon: "instagram" },
    { icon: "twitter" },
    { icon: "linkedin" }
  ];

  menus = [
    {
      title: "Developers",
      items: [{ title: "API Docs" }, { title: "API Reference" }]
    },
    {
      title: "Products",
      items: [{ title: "API" }, { title: "White Label" }]
    },
    {
      title: "Solutions",
      items: [{ title: "OEMs" }, { title: "CPOs" }, { title: "Media" }]
    },
    {
      title: "Company",
      items: [
        { title: "About us" },
        { title: "Presskit" },
        { title: "Careers" },
        { title: "Contact us" }
      ]
    },
    {
      title: "Stories",
      items: [{ title: "Elbil" }, { title: "Porsche" }, { title: "Vector" }]
    }
  ];
}
</script>
<style lang="scss">
.c-footer {
  .social-menu nav {
    @apply text-font-primary text-16;
  }
  .legal-menu {
    a:last-child {
      @apply text-error;
    }
  }
}
</style>
