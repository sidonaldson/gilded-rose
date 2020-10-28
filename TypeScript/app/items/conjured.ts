import NewItem from "./";

export default class Conjured extends NewItem {
  update(): void {
    if (this.quality > 0) {
      this.quality = this.quality - 2;
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality = this.quality - 2;
    }
  }
}
