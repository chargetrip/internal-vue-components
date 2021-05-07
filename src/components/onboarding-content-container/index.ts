import OnboardingContentContainer from "./OnboardingContentContainer.vue";

// @ts-ignore
OnboardingContentContainer.install = Vue => {
  Vue.component(OnboardingContentContainer.name, OnboardingContentContainer);
};

export default OnboardingContentContainer;
