const formatter = require("./constantsToStrings.js");
const Profession = require("./professions/Profession.js");
const Lumberjack = require("./professions/Lumberjack.js");

class Player {
  owner;
  name;
  race;
  clas;
  profession;
  professions = [];
  level = 1;
  playerEsperience = 0;
  professionExperience = 0;

  //spells=Spell[];
  items = [];

  

  constructor(owner, name, race, clas, profession,) {
    this.owner = owner;
    this.name = name;
    this.race = race;
    this.clas = clas;
    this.profession = profession;
    // this._spells = Spells[];
    
    this.professions.push(this.createProfession());
  }
  createProfession(){
    const  profession = new Lumberjack(1, "lumberjack", "description");
    return profession;
  }

  getAllInformationAsString() {
    return `Name: ${this.name}\nRace: ${formatter.raceToString(
      this.race
    )}\nClass: ${formatter.classToString(this.clas)}\nProfession: ${
      this.professions[0].name
    }\nLevel: ${this.level}`;
  }

  goToWork() {
    let itemsToAdd=this.professions[0].startWorking(this.professionExperience);
    itemsToAdd.forEach(item => {
      this.items.push( item);
    });
   
 
  return itemsToAdd;
    
  }

  getItems() {
    return this.items;
  }
  

   
}
module.exports = Player;
