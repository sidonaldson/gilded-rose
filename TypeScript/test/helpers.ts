import { expect } from "chai";
import { Item } from "../app/gilded-rose";

export interface NamedFunction extends Function {
  name?: string;
}

const IsSulfuras = (item: Item): boolean => {
  const c: NamedFunction = item.constructor;
  return c.name === "Sulfuras";
};

function ItemDefaultTests(item: Item) {
  it("Item has correct keys", () => {
    expect(item).to.include.keys("sellIn", "name", "quality");
  });

  it("Item sellIn is a number", () => {
    expect(item.sellIn).to.be.a("number");
  });

  it("Item name is a string and not empty", () => {
    expect(item.name).to.be.a("string").to.not.be.empty;
  });

  it("Item qualtiy is a number", () => {
    expect(item.quality).to.be.a("number");
  });

  it("Item qualtiy must be > 0 unless it's Sulfuras", () => {
    if (IsSulfuras(item)) {
      expect(item.quality).to.eq(80);
    } else {
      expect(item.quality).to.be.greaterThan(-1);
    }
  });

  it("Item qualtiy must never exceed 50 unless it's Sulfuras", () => {
    if (IsSulfuras(item)) {
      expect(item.quality).to.be.a("number").to.eq(80);
    } else {
      expect(item.quality).to.be.lessThan(51);
    }
  });
}

export { IsSulfuras, ItemDefaultTests };
