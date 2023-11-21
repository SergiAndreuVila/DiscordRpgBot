const Profession = require("./Profession");
const Item = require("../Item.js")
const Constants = require("../constants.js")
const utilities =require("../utilities");

class Lumberjack extends Profession{

      constructor(professionId, name, description){
            super(professionId,name,description)
      }

      startWorking(professionExperience){
          let itemAmount=this.amoutOfResources( professionExperience);
          let itemsObtained=[]

          for (let index = 0; index < itemAmount; index++) {
            itemsObtained.push(Item.getItemById(Constants.LOG));
            
          }
          
          console.log(utilities.printItems(itemsObtained,"you recolected"));

          return itemsObtained;
      }

}
module.exports = Lumberjack;
