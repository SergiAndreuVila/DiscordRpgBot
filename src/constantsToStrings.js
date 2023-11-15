const Constants = require("./constants.js");

function raceToString(constant) {
  switch (constant) {
    case Constants.DWARF:
      return "Dwarf";
    case Constants.ELF:
      return "Elf";
    case Constants.HUMAN:
      return "Human";
    case Constants.HALFLING:
      return "Halfling";
    default:
      return "Unknown constant";
  }
}

function classToString(constant) {
  switch (constant) {
    case Constants.BARBARIAN:
      return "Barbarian";
    case Constants.CLERIC:
      return "Cleric";
    case Constants.FIGHTER:
      return "Fighter";
    case Constants.ROGUE:
      return "Rogue";
    case Constants.WIZARD:
      return "Wizard";
    default:
      return "Unknown constant";
  }
}

module.exports = {
  raceToString,
  classToString,
};
