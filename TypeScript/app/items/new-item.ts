import { Item } from "../gilded-rose";

export default class NewItem extends Item {
  update(): void {
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality = this.quality - 1;
    }
  }
}
