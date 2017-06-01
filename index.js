//imports discord.js moldule
const Discord = require('discord.js');
//Create instance of the discord client
const servoRoboto = new Discord.Client();

servoRoboto.on('ready', () => {
  console.log('I am ready!');
});

servoRoboto.on('message', (message) =>{
    if(message.content.toLowerCase() == 'ping'){
        message.reply('pong');
    }
    
    if(message.content.toLowerCase() == 'bing' && message.author.username != 'Servo-Roboto'){
        var trucks = (Math.random()*10);
        message.channel.send('bong');
        if(trucks > 5){
            message.channel.send('bing');
        }
    }

    if(message.content.toLowerCase() == 'bing bong'){
        message.reply('I heard you like trucks.');
    }

    if(message.content.toLowerCase() == '!date'){
        var date = new Date();
        message.reply('Todays date is: ' + (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear());
    }
    if(message.content.toLowerCase() == '!time'){
        var date = new Date();
        message.reply('The time is: ' + formatAMPM(date));

    }
});

//To transfer from 24 hour clock to 12 hour.
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours != 0 ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

//requires bot token that was created when Servo-Roboto was made via discord
//keep this token private
servoRoboto.login('MzE5NTg2MTUxNDc0Mzk3MTg0.DBDFVw.YxJoNckPhici90xt8HRY7f3eBG4');
