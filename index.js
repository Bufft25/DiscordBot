//imports discord.js moldule
const Discord = require('discord.js');
//Create instance of the discord client
const servoRoboto = new Discord.Client();

servoRoboto.on('message', (message) =>{
    if(message.content == 'ping'){
        message.reply('pong');
    }
});

//requires bot token that was created when Servo-Roboto was made via discord
//keep this token private
servoRoboto.login('MzE5NTg2MTUxNDc0Mzk3MTg0.DBDFVw.YxJoNckPhici90xt8HRY7f3eBG4');
