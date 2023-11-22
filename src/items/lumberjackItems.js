const Item = require("./Item.js");
const Constants = require("../constants.js")

let lumberjackItemsLevel_1 = [
      new Item.Item(
        Constants.TWIG_CLUMPS,
        "Twig Clumps",
        "Small clusters of twigs used for kindling"
      ),
      new Item.Item(
        Constants.FRESH_SAPLINGS,
        "Fresh Saplings",
        "Young trees suitable for basic woodworking"
      ),
      new Item.Item(
        Constants.PINE_CONES,
        "Pine Cone",
        "Used in crafting certain potions or as natural firestarters"
      ),
      new Item.Item(
        Constants.RUSTIC_BARK,
        "Rustic Bark",
        "Bark from various trees, valuable for medicinal purposes or basic crafting"
      ),
    ];
let lumberjackItemsLevel_2 =[
      new Item.Item(
            Constants.OAK_KINDLING,
            "Oak Kindling",
            "Denser and more efficient kindling for starting fires"
          ),
          new Item.Item(
            Constants.CEDAR_SHAVINGS,
            "Cedar Shavings",
            "Fragrant and smooth wood shavings for crafting"
          ),
          new Item.Item(
            Constants.ASHEN_TWIGS,
            "Ashen Twigs",
            "Twigs from special trees, ideal for enchanting purposes"
          ),
          new Item.Item(
            Constants.WILLOW_BARK,
            "Willow Bark",
            "Flexible and water-resistant, used in various potions"
          ),
]
let lumberjackItemsLevel_3 =[
      new Item.Item(
            Constants.MAPLE_LOGS,
            "Maple Logs",
            "Versatile wood used in mid-level construction"
          ),
          new Item.Item(
            Constants.BIRCH_TIMBER,
            "Birch Timber",
            "Smooth and sturdy timber for crafting furniture"
          ),
          new Item.Item(
            Constants.FIR_CONES,
            "Fir Cones",
            "Used in alchemical mixtures for enhancing tools"
          ),
          new Item.Item(
            Constants.SPRUCE_RESIN,
            "Spruce Resin",
            "Sticky substance used in advanced woodwork"
          ),
]

    module.exports = {
      lumberjackItemsLevel_1,
      lumberjackItemsLevel_2,
      lumberjackItemsLevel_3
    };