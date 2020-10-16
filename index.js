//if you dont want to ban, you can change all instances of .ban() to .kick()
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Put your actual token here';
var b_count = 0; 
client.on('ready', ()=>{
  console.log('This bot is online');
})
client.on('message', message=>{
    if (message.content.includes("@everyone") || message.content.includes("@here"))
    {
        let member = message.guild.members.fetch(message.author) //setting member equal to the message authors member
              .then(member => {
                  member.ban().then((member) =>{ //ban
                      message.channel.send(message.author.toString() + ' has just mass pinged and will now be banned!');
                      b_count+=1;
                  }).catch(() =>{
                      message.channel.send(message.author.toString() + ' has just mass pinged!'); //if no ban, error message
                  })
              })
    }
    if (message.mentions.members.first() && (message.author.id != client.user.id))
    {
        message.channel.send(message.author.toString() + ' has just pinged someone!');
    }  
    if (message.mentions.roles.first())
    {
        let member = message.guild.members.fetch(message.author) //setting member equal to the message authors member
              .then(member => {
                  member.ban().then((member) =>{ //bans 
                      message.channel.send(message.author.toString() + ' has just mass pinged and will now be banned!');
                      b_count+=1;
                  }).catch(() =>{
                      message.channel.send(message.author.toString() + ' has just mass pinged!'); //if no ban, error message
                  })
              })
    }
    let args = message.content.toLowerCase().split(" ");
    switch(args[0]) //you can use this to build more commands off of
    {
        case "count":
            message.channel.send("I have banned " + b_count + " accounts this session!");
            break;
    }
})
process.on('unhandledRejection', error => {
   console.log("You can't ban/talk");
})
client.login(token);