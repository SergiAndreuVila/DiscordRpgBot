require("dotenv").config();

const { Client, IntentsBitField } = require("discord.js");
const Player = require("./Player");
const Item = require("./Item.js")
const utilities = require("./utilities.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

var players = [];

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online`);
});

client.on("messageCreate", (message) => {
  if (!message.author.bot) {
    if (message.content === "hello") {
      message.reply("hello");
    }
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "new-character") {
    try {
      const owner = interaction.user.id.toString();
      const nameOption = interaction.options.get("character-name");
      const raceOption = interaction.options.get("race");
      const classOption = interaction.options.get("class");

      if (!nameOption || !raceOption || !classOption) {
        throw new Error("Missing required options");
      }

      const player = new Player(
        owner,
        nameOption.value,
        raceOption.value,
        classOption.value,
        1 // 1 job is temporary for testing
      );

      players.push(player);
      interaction.reply("Character created");
    } catch (error) {
      console.error(error);
      interaction.reply(
        "Error creating character. Please provide all required information."
      );
    }
  }

  if (interaction.commandName === "my-character") {
    const currentPlayer = utilities.returnPlayer(players, interaction.user.id);
  
    if (currentPlayer === null) {
      interaction.reply("You must create a character first");
    } else {
      interaction.reply(currentPlayer.getAllInformationAsString());
    }
  }

  if (interaction.commandName === "start-working") {
    let curretPlayer = utilities.returnPlayer(players, interaction.user.id);
    curretPlayer.goToWork();
    let currentItems=curretPlayer.getItems()
    
    console.log(currentItems);

    console.log(utilities.printItems(currentItems,"items obtained"));
    interaction.reply(utilities.printItems(currentItems,"items obtained"));
  }
});

client.login(process.env.TOKEN);
