import NewItem from "./";

export default class BackstagePass extends NewItem {
  update(): void {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
      if (this.sellIn < 11 && this.quality < 50) {
        this.quality = this.quality + 1;
      }
      if (this.sellIn < 6 && this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.quality = this.quality - this.quality;
    }
  }
}
