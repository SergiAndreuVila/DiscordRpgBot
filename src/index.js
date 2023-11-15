require('dotenv').config();

const {Client, IntentsBitField}= require('discord.js');
const Player = require('./Player');



const client = new Client({
      intents:[
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMembers,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.MessageContent,
      ],
})

var players=[];

client.on('ready', (c)=>{
      console.log(`${c.user.tag} is online`);
})

client.on('messageCreate',(message)=>{
      if(!message.author.bot){
            if (message.content==='hello'){
                  message.reply('hello');
            }
      }
      
});

client.on('interactionCreate',(interaction)=>{
      if (!interaction.isChatInputCommand()) return;

    
      if(interaction.commandName==='new-character'){
            const owner= interaction.user.id.toString();
            const name= interaction.options.get('character-name').value;
            const race= interaction.options.get('race').value;
            const clas = interaction.options.get('class').value;

            const player = new Player(owner, name, race, clas, 'Blacksmith',1);
            players.push(player)

            interaction.reply('character created');

      }
      if(interaction.commandName==='my-character'){
            for (let i = 0; i < players.length; i++) {
                  
                  if (players[i].owner === interaction.user.id) {
                        
                        interaction.reply(''+players[i].getAllInformationAsString());
                        console.log(players[i]); 
                    break; 
                  }
                };
          
      }
});



client.login(process.env.TOKEN);