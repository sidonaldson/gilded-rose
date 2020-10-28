export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class NewItem extends Item {
  update(): void {
    switch (this.name) {
      case "Aged Brie":
        if (this.quality < 50) {
          this.quality = this.quality + 1;
        }
        this.sellIn = this.sellIn - 1;

        if (this.sellIn < 0 && this.quality < 50) {
          this.quality = this.quality + 1;
        }
        break;

      case "Backstage passes to a TAFKAL80ETC concert":
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
        break;

      case "Sulfuras, Hand of Ragnaros":
        //
        break;

      default:
        if (this.quality > 0) {
          this.quality = this.quality - 1;
        }
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0 && this.quality > 0) {
          this.quality = this.quality - 1;
        }
        break;
    }
  }
}

export class GildedRose {
  items: Array<NewItem>;

  constructor(items = [] as Array<NewItem>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].update();
    }
    return this.items;
  }
}
