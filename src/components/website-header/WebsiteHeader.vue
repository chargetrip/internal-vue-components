<template>
  <TopNav
    class="c-website-header text-16 sticky top-0 relative"
    :class="{ 'menu-open': isMenuOpen, 'banner-hidden': isBannerHidden }"
    :isLoggedIn="isLoggedIn"
    :applyForm="applyForm"
    @logOut="$emit('logOut')"
  >
    <div
      class="menu-container top-0 absolute left-1/2 transform -translate-x-1/2 text-16"
      ref="menuContainer"
    >
      <Menu
        v-if="!applyForm"
        class="flex-1"
        :items="normalizedMenuItems"
        :gap="2"
      />
      <div
        v-if="!applyForm"
        class="flex xl:hidden items-center font-semibold bg-subdued sticky mb-auto border-t bottom-0 border-b border-base relative z-20 text-14"
      >
        <MenuItem
          class="flex-1 justify-center py-5"
          icon="person-circle"
          :title="!isLoggedIn ? 'Sign in' : 'Account'"
          href="https://account.chargetrip.com"
        />
        <div class="h-6 w-px bg-base" />
        <MenuItem
          class="flex-1 justify-center py-5"
          title="Sign up"
          type="primary"
          :transparent="true"
          href="https://account.chargetrip.com/sign-up"
        />
      </div>
    </div>
    <div class="ml-auto flex xl:hidden">
      <Button
        v-if="!applyForm"
        class="ml-2"
        size="sm"
        type="secondary"
        :icon="isMenuOpen ? 'close' : 'menu'"
        @click.native="$emit('setIsMenuOpen', !isMenuOpen)"
      />
    </div>
  </TopNav>
</template>
<script lang="ts">
import { Component, Prop, Watch, Ref } from "vue-property-decorator";
import TopNav from "../top-nav/TopNav.vue";
import Button from "../button/Button.vue";
import Menu from "../menu/Menu.vue";
import MenuItem from "../menu-item/MenuItem.vue";
import { normalizeHref } from "@/utilities/utilities";
import Base from "@/mixins/base";
import { Listen } from "@/utilities/decorators";

@Component({
  components: { TopNav, Menu, Button, MenuItem }
})
export default class WebsiteHeader extends Base {
  @Prop() isLoggedIn!: boolean;
  @Prop({ default: false }) isBannerHidden!: boolean;
  @Prop() menuItems;
  @Prop() isMenuOpen!: boolean;
  @Prop() applyForm!: () => void;
  @Ref("menuContainer") menuContainer;
  defaultMenuItems = [
    {
      title: "Products",
      icon: "filled-projects",
      subMenus: [
        {
          items: [
            {
              title: "API",
              subTitle: "Powerful EV routing",
              to: "/api",
              icon: "terminal"
            },
            {
              title: "White Labels",
              subTitle: "EV driver applications",
              to: "/white-label-apps",
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
              subTitle: "Boost utilization & revenue",
              to: "/cpo",
              icon: "charge-stations"
            },
            {
              title: "Automotive OEMs",
              subTitle: "Eliminate range anxiety",
              to: "/automotive-eom",
              icon: "car"
            },
            {
              title: "Fleets",
              subTitle: "Easy to manage",
              to: "/fleets",
              icon: "truck"
            },
            {
              title: "Tech & Media",
              subTitle: "Increase your audience",
              to: "/tech-and-media/",
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
            { title: "About Chargetrip", to: "/about-chargetrip" },
            { title: "Careers", to: "/careers", count: 5 },
            {
              title: "Newsletter",
              arrow: true,
              href:
                "https://us12.campaign-archive.com/home/?u=eaea97b9072598e3643ab1131&id=9021c65c75"
            },
            { title: "Blog", to: "/blog", arrow: true }
          ]
        },
        {
          title: "Success stories",
          items: [
            {
              title: "Porsche",
              iconBgColor: "#1B2023",
              image: "/porsche.png",
              subTitle: "Web application",
              to: "/success-story/customer-porsche"
            },
            {
              title: "Elbil",
              iconBgColor: "#2361A7",
              image: "/elbil.png",
              subTitle: "Web / Mobile application",
              to: "/success-story/customer-elbil"
            },
            {
              title: "Vector",
              iconBgColor: "#2C3461",
              image: "/vector.png",
              subTitle: "Mobile application",
              to: "/success-story/customer-vector"
            }
          ]
        }
      ]
    },
    {
      icon: "filled-brand",
      title: "Pricing",
      to: "/pricing"
    },
    {
      icon: "filled-location-center",
      title: "Contact",
      subMenus: [
        {
          items: [
            {
              href: "tel:+31648475965",
              icon: "phone",
              title: "+31 6 48 47 59 65",
              subTitle: "Mon - Fri 09:00 - 18:00 CET"
            },
            {
              icon: "contact",
              title: "Live chat",
              subTitle: "Reply time - few hours"
            },
            {
              href: "mailto:info@chargetrip.com",
              icon: "email",
              title: "info@chargetrip.com",
              subTitle: "We’ll reply as soon as possible"
            },
            {
              href: "https://goo.gl/maps/xNzDdNQzvN5ykt358",
              icon: "route",
              title: "Rapenburgerstraat 109",
              subTitle: "1011 VL, Amsterdam"
            }
          ]
        }
      ]
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

  mounted() {
    this.setMenuContainerTop();
  }

  get normalizedMenuItems() {
    return (this.menuItems || this.defaultMenuItems).map(item => ({
      ...item,
      showSubMenu: true
    }));
  }

  @Watch("isMenuOpen") onMenuOpenChange() {
    if (this.isMenuOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("xl:overflow-visible");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("xl:overflow-visible");
    }
  }

  @Watch("$route") onRouteChange() {
    this.$emit("setIsMenuOpen", false);
  }

  @Listen("resize")
  onResize() {
    this.setMenuContainerTop();
  }

  @Listen("scroll")
  @Watch("$route")
  setMenuContainerTop() {
    const elRect = this.$el.getBoundingClientRect();

    this.menuContainer.style.marginTop =
      window.innerWidth < 1128 ? `${elRect.top + 64}px` : "0px";
  }
}
</script>
<style lang="scss">
.c-website-header {
  .item {
    @apply h-16;

    &:last-child {
      @apply xl:hidden order-9;
    }

    .menu-item-wrapper .c-menu-item {
      @apply font-semibold h-16 font-semibold;
    }
  }

  .ctas .icon {
    @apply mt-2px;
  }

  @screen xl {
    .c-menu {
      nav {
        @apply text-16;
      }
    }
    .menu-item-wrapper .c-menu-item {
      .icon {
        @apply hidden;
      }
    }
  }

  @screen xl-max {
    &.menu-open {
      &:after {
        content: "";
        z-index: -1;
        height: calc(100vh - 4rem);
        @apply block w-full mt-16 absolute bg-body opacity-80 top-0 left-0;
      }
      .menu-container {
        @apply opacity-100 visible;
      }
    }

    &.banner-hidden {
      .menu-container {
        //@apply mt-16;
      }
    }

    .menu-container {
      bottom: env(safe-area-inset-bottom, 0);
      @apply opacity-0 fixed invisible bg-body top-0 flex flex-col w-full overflow-y-scroll;

      .sub-menu-title {
        @apply pl-7;
      }

      .menu-item-wrapper .c-menu-item {
        @apply text-font-primary;
      }

      .c-menu {
        .c-menu-item {
          @apply h-8;

          &.has-icon {
            @apply h-10;
          }
        }
      }
      nav {
        @apply flex-col;

        .item {
          @apply h-auto px-6 w-full justify-between flex-col items-start border border-b last:border-b-0 border-t-0 border-l-0 border-r-0 border-base py-4;

          &:nth-child(3) {
            @apply border-solid;
          }

          &.is-in-index {
            .c-sub-menu {
              @apply block;
            }
          }
        }

        .c-sub-menu {
          @apply relative pt-2 opacity-100 visible left-0 w-full transform-none top-0 shadow-none p-0 hidden;

          .icon {
            @apply text-font-alt3;
          }
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
