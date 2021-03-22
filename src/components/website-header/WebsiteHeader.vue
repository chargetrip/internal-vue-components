<template>
  <TopNav
    class="c-website-header"
    :class="{ 'menu-open': isMenuOpen }"
    :isLoggedIn="isLoggedIn"
    @logOut="$emit('logOut')"
  >
    <div
      class="menu-container absolute left-1/2 transform -translate-x-1/2 text-16"
    >
      <Menu :items="normalizedMenuItems" :gap="2" />
      <div
        class="flex lg:hidden bg-subdued px-6 py-4 sticky bottom-0 border border-alt"
      >
        <Button
          class="flex-1 mr-4"
          size="sm"
          title="Sign up"
          color="accent"
          :transparent="true"
          href="https://account.chargetrip.com"
        />
        <Button
          v-if="isLoggedIn"
          class="flex-1"
          size="sm"
          title="Sign out"
          color="accent"
          @click.native="$emit('logOut')"
        />
        <Button
          v-else
          class="flex-1"
          size="sm"
          title="Sign in"
          color="accent"
          href="https://account.chargetrip.com"
        />
      </div>
    </div>
    <div class="ml-auto flex lg:hidden">
      <Button
        size="sm"
        title="Developers"
        color="base"
        href="https://developers.chargetrip.com"
        :transparent="true"
      />
      <Button
        class="ml-2"
        size="sm"
        color="base"
        :icon="isMenuOpen ? 'close' : 'menu'"
        @click.native="isMenuOpen = !isMenuOpen"
      />
    </div>
  </TopNav>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import TopNav from "../top-nav/TopNav.vue";
import Button from "../button/Button.vue";
import Menu from "../menu/Menu.vue";
import { normalizeHref } from "@/utilities/utilities";

@Component({
  components: { TopNav, Menu, Button }
})
export default class WebsiteHeader extends Vue {
  @Prop() isLoggedIn;
  @Prop() menuItems;
  isMenuOpen = false;
  defaultMenuItems = [
    {
      title: "Products",
      icon: "filled-projects",
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
      icon: "filled-layers",
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
      icon: "filled-lightning",
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
      icon: "filled-brand",
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
    return (this.menuItems || this.defaultMenuItems).map(item => ({
      ...item,
      showSubMenu: true
    }));
  }

  @Watch("$route") onRouteChange() {
    this.isMenuOpen = false;
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
    @apply h-16;

    .menu-item-wrapper .c-menu-item {
      @apply font-semibold h-16 font-semibold text-14;
    }
  }

  @screen lg {
    .c-menu {
      nav {
        @apply text-16;
      }
    }
  }

  @screen lg-max {
    &.menu-open {
      .menu-container {
        @apply opacity-100 visible;
      }
    }

    .menu-container {
      max-height: calc(100vh - 64px);
      @apply opacity-0 invisible mt-16 bg-body top-0 w-full overflow-y-scroll;

      .c-menu {
        @apply px-6 py-4;
      }

      strong {
        @apply pl-7 text-font-primary;
      }

      .menu-item-wrapper .c-menu-item {
        @apply text-font-primary;
      }

      .c-menu-item {
        @apply h-8;

        &.has-icon {
          @apply h-10;
        }
      }
      nav {
        @apply flex-col;

        .item {
          @apply h-auto border-none w-full justify-between px-0 flex-col items-start;

          &:nth-child(3) {
            width: calc(100% + 48px);
            @apply order-4 border-solid -ml-6 px-6;
          }

          &.is-in-index {
            .c-sub-menu {
              @apply block;
            }
          }
        }

        .c-sub-menu {
          @apply relative opacity-100 visible left-0 w-full transform-none top-0 shadow-none p-0 hidden;

          &.is-alternative {
            .menu {
              @apply p-0 bg-body;
            }
          }
        }
      }
    }
  }
}
</style>
