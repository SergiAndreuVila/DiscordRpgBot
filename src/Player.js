const  formatter = require('./constantsToStrings.js');

class Player {
  owner;
  name;
  race;
  clas;
  profession;
  level = 1;
  //spells=Spell[];
  //items=[];

  constructor(owner, name, race, clas, profession, level) {
    this.owner = owner;
    this.name = name;
    this.race = race;
    this.clas = clas;
    this.profession = profession;
    this.level = level;
    // this._spells = Spells[];
    // this._items = [];
  }

  getAllInformationAsString() {
    
      return `Owner: ${this.owner}\nName: ${this.name}\nRace: ${formatter.raceToString(this.race)}\nClass: ${formatter.classToString(this.clas)}\nProfession: ${this.profession}\nLevel: ${this.level}`;
    }

}
module.exports = Player;
