<template>
  <div class="bg-body border-t border-base py-12 overflow-hidden relative">
    <div class="absolute inset-0" v-if="showImage">
      <HeightMap class="h-full w-auto md:w-full"></HeightMap>
    </div>
    <div class="px-6 md:px-12">
      <Container
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center relative z-10"
      >
        <div class="pr-8 mb-4 sm:mb-0">
          <h3>
            {{ title }}
          </h3>
          <p class="text-font-alt3">
            {{ subtitle }}
          </p>
        </div>
        <div class="flex">
          <Button
            class="mr-2 last:mr-0"
            type="secondary"
            size="md"
            :transparent="true"
            @click.native="openChat"
          >
            Book a demo
          </Button>
          <Button
            class="mr-2 last:mr-0"
            type="primary"
            size="md"
            href="https://account.chargetrip.com/sign-up"
          >
            Start developing
          </Button>
        </div>
      </Container>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Container from "../container/Container.vue";
import Button from "@/components/button/Button.vue";
import HeightMap from "../height-map/HeightMap.vue";
import { openChat } from "@/utilities/utilities";

@Component({
  components: { Container, Button, HeightMap },
  methods: {
    openChat
  }
})
export default class CPrefooter extends Vue {
  @Prop({ default: "Start your journey" }) title;
  @Prop() showImage;
  @Prop({
    default: "Talk to one of our experts or create an account to start building"
  })
  subtitle;
}
</script>
<style lang="scss">
.height-map {
}
</style>
