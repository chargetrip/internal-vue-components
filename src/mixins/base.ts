import { Component, Vue } from "vue-property-decorator";

@Component
export default class Base extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  public subscriptions: { (): void }[] = [];
  public listeners!: string[];

  public mounted() {
    if (this.listeners) {
      this.subscriptions.push(
        ...this.listeners.map((listener: string) => this[listener]("decorator"))
      );
    }
  }

  public destroyed() {
    this.subscriptions.forEach((sub: () => void) => sub());
  }
}
