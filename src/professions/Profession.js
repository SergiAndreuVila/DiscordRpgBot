class Profession {
  professionId;
  name;
  description;

  constructor(professionId, name, description) {
    this.professionId = professionId;
    this.name = name;
    this.description = description;
  }

  amoutOfResources( professionExperience) {
    let quantity = 0;
    console.log(professionExperience);
    if (professionExperience <= 1000) {
      quantity = Math.floor(Math.random() * 5) + 1;
    }
    return quantity;
  }
}

module.exports = Profession;
