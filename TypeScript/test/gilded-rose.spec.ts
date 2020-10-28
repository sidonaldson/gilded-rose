import { expect } from "chai";
import { NewItem as Item, GildedRose } from "../app/gilded-rose";
import { ItemDefaultTests } from "./helpers";

describe("Gilded Rose", function () {
  // Item basic tests
  describe("Basic Item", function () {
    const gildedRose = new GildedRose([new Item("Test Name", 1, 10)]);
    let itemArray = gildedRose.updateQuality();
    console.log(itemArray);
    ItemDefaultTests(itemArray[0]);
    it("Name should equal 'Test Name'", function () {
      expect(itemArray[0].name).to.equal("Test Name");
    });
    it("SellIn should reduce by one per day", function () {
      expect(itemArray[0].sellIn).to.equal(0);
    });
    it("Quality should reduce by one per day", function () {
      expect(itemArray[0].quality).to.equal(9);
    });
    it("Quality should reduce by two per day if sellIn is less than 0", function () {
      itemArray = gildedRose.updateQuality();
      expect(itemArray[0].quality).to.equal(7);
    });
  });

  describe("Brie", function () {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 10)]);
    let itemArray = gildedRose.updateQuality();
    ItemDefaultTests(itemArray[0]);
    it("Quality should increase by one per day", function () {
      expect(itemArray[0].quality).to.equal(11);
    });
    // unsure about the below test as it doesn't explicitly say it increased by two (so i guess the code is right!)
    it("Quality should increase by two per day if sellIn is less than 0", function () {
      const gildedRose = new GildedRose([new Item("Aged Brie", -1, 10)]);
      let itemArray = gildedRose.updateQuality();
      ItemDefaultTests(itemArray[0]);
      expect(itemArray[0].quality).to.equal(12);
    });
    it("Quality should go up every day but quality must not exeed 50", function () {
      const gildedRose = new GildedRose([new Item("Aged Brie", 1, 50)]);
      let itemArray = gildedRose.updateQuality();
      ItemDefaultTests(itemArray[0]);
      expect(itemArray[0].quality).to.equal(50);
    });
  });

  describe("Backstage Passes", function () {
    it("Quality should increase by one per day if sellIn > 10", function () {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      ]);
      let itemArray = gildedRose.updateQuality();
      ItemDefaultTests(itemArray[0]);
      expect(itemArray[0].quality).to.equal(21);
    });
    it("Quality should increase by two per day if sellIn <= 10", function () {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      ]);
      let itemArray = gildedRose.updateQuality();
      ItemDefaultTests(itemArray[0]);
      expect(itemArray[0].quality).to.equal(22);
    });
    it("Quality should increase by three per day if sellIn <= 5", function () {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      ]);
      let itemArray = gildedRose.updateQuality();
      ItemDefaultTests(itemArray[0]);
      expect(itemArray[0].quality).to.equal(23);
    });
    it("Quality should be 0 is sellIn < 0", function () {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20),
      ]);
      let itemArray = gildedRose.updateQuality();
      ItemDefaultTests(itemArray[0]);
      expect(itemArray[0].quality).to.equal(0);
    });
  });

  describe("Sulfuras", function () {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    let itemArray = gildedRose.updateQuality();
    ItemDefaultTests(itemArray[0]);
    it("sellIn should not change", function () {
      expect(itemArray[0].sellIn).to.equal(0);
    });
    it("Quality should be 80", function () {
      expect(itemArray[0].quality).to.equal(80);
    });
  });
});
