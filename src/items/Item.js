const Constants = require("../constants.js");

class Item {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

function getItemById(itemId, items) {
  return items.find((item) => item.id == itemId);
}

module.exports = {
  Item,
  getItemById,
};
