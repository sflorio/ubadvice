const Discord = require('discord.js');
const client = new Discord.Client();


const prefix = '/';



client.once('ready',()=>{
    console.log('ubadvice is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if( command === 'ping'){
        message.channel.send('pong!')
    }

    if( command === 'question'){
        message.channel.send('tranqui man')
    }


});



client.login('ODQ1ODUzMTU3NjQ4NjI5NzYx.YKnAIw.l7F9uWGW1F7ZwigHjXb4OFPMRvE');

