<template functional>
  <div class="c-title-with-subtitle p-4">
    <div
      class="sub-title text-font-alt3"
      v-if="props.subTitle"
      v-html="props.subTitle"
    />
    <div
      class="title text-font-primary font-semibold"
      v-if="props.title"
      v-html="props.title"
    />
  </div>
</template>
