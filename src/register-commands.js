require("dotenv").config();

const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");


const  Constants = require('./constants.js');

const commands = [
{
    name: "new-character",
    description:"create a new character",
    options:[
      {
        name: "character-name",
        description: "character name",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "race",
        description: "select a race",
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
            name: "Dwarf",
            value: Constants.DWARF,
          },
          {
            name: "Elf",
            value: Constants.ELF,
          },
          {
            name: "Halfling",
            value: Constants.HALFLING,
          },
          {
            name: "Human",
            value: Constants.HUMAN,
          },
        ],
        required:true,
      },
      {
        name:"class",
        description: "select a class",
        type: ApplicationCommandOptionType.Number,
        choices:[
          {
            name: "Barbarian",
            value: Constants.BARBARIAN,
          },
          {
            name: "Rogue",
            value: Constants.ROGUE,
          },
          {
            name: "Wizard",
            value: Constants.WIZARD,
          },
          {
            name: "Cleric",
            value: Constants.CLERIC,
          },
          
          {
            name: "Foghter",
            value: Constants.FIGHTER,
          },

        ],
      }
    ],
  },
  {
    name:"my-character",
    description: "get your character information"
  },
  {
    name:"start-working",
    description:"start working at your designed job"
  },
  {
    name:"open-backpack",
    description:"let's see waths inside"
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("registering slash commands");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log("slash commands were registered successfully");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
