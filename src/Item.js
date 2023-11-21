const Constants = require("./constants.js");

class Item {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
let items = [
  new Item(
    Constants.LOG,
    "Log",
    "The primary resource obtained from cutting down trees"
  ),
  new Item(
    Constants.BRANCH,
    "Branch",
    "Smaller wood pieces used for crafting or kindling"
  ),
  new Item(Constants.BARK, "Bark", "Extract from trees used to make tope"),
  new Item(
    Constants.RESIN,
    "Resin",
    "Extracted from trees and used in various recipes or crafting"
  ),
];

function getItemById(itemId) {
  return items.find((item) => item.id == itemId);
}

module.exports = {
  Item,
  getItemById,
  items,
};
