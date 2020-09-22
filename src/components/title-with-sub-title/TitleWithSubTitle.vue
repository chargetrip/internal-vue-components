<template functional>
  <div class="c-title-with-subtitle p-4">
    <div class="sub-title text-font-alt3" v-if="props.subTitle">
      {{ props.subTitle }}
    </div>
    <div class="title text-font-primary font-semibold" v-if="props.title">
      {{ props.title }}
    </div>
  </div>
</template>
