<template functional>
  <div class="c-title-with-subtitle p-4">
    <div
      class="sub-title text-font-alt3"
      v-if="props.subTitle || props.subTitle === false"
      v-html="props.subTitle"
    />
    <div
      class="title text-font-primary font-semibold"
      v-html="`${props.title || '-'} ${props.suffix}`"
    />
  </div>
</template>
