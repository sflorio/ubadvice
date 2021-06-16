require("./initialConfig").init();

const config = require('config');
const Discord = require('discord.js');
const client = new Discord.Client();
const CommandFactory = require("./commands/core/commadFactory");
const prefix = '';//'/';


client.once('ready',()=>{
    console.log('ubadvice is online!');
});

client.on("disconnect", message => {
    message.channel.send("bye bye!");
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    
    var objCommand = CommandFactory.create(command);
    message.channel.send(objCommand.action(message));    

});


const token = config.get("discordToken");
client.login(token);

