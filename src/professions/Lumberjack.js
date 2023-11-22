const Profession = require("./Profession");
const Item = require("../items/Item.js")
const items = require("../items/lumberjackItems.js")
const Constants = require("../constants.js")
const utilities =require("../utilities");

class Lumberjack extends Profession{

      constructor(professionId, name, description){
            super(professionId,name,description)
            this.name= 'Lumberjack'
      }

      getAvaliableItemsByLevel(professionLvl){
            let availableItems=[]
            switch (professionLvl) {
                  case 1:
                        availableItems.push(Constants.TWIG_CLUMPS)
                        availableItems.push(Constants.FRESH_SAPLINGS)
                        availableItems.push(Constants.PINE_CONES)
                        availableItems.push(Constants.RUSTIC_BARK)
                        break;
            
                  default:
                        break;
            }
            return availableItems;
      }

      startWorking(professionExperience){
          let itemAmount=this.amoutOfResources( professionExperience);
          let itemsObtained=[]
          const availableItemIds = this.getAvaliableItemsByLevel(1);
          

          for (let index = 0; index < itemAmount; index++) {
            itemsObtained.push(Item.getItemById(utilities.getRandomItemId(availableItemIds),items.lumberjackItemsLevel_1));
            
          }

          return itemsObtained;
      }

     

}
module.exports = Lumberjack;
