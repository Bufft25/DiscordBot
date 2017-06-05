//imports discord.js moldule
const Discord = require('discord.js');
//Create instance of the discord client
const servoRoboto = new Discord.Client();

servoRoboto.on('ready', () => {
  console.log('I am ready!');
});

servoRoboto.on('message', (message) =>{

    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if(message.content == '!help me'){
        message.author.send('Audio commands list: \n !bruh \n !shots \n !triple \n !horn1 \n !horn2 \n !wow \n !smart \n !appreciate \n !fun \n !breakfast \n' +
        ' !zipzap \n !overhere \n !puddinpop \n\n'+
        'Reaction pictures command list: \n :tim: \n :wtd:'); //sent via direct message to person asking for help.
    }

    if (message.content == '!bruh' || message.content == '!shots' || message.content == '!triple' || message.content == '!horn2' || 
        message.content == '!horn1' || message.content == '!wow' || message.content == '!smart' || message.content == '!appreciate' ||
        message.content == '!storm1' || message.content == '!breakfast' || message.content == '!zipzap' || message.content == '!overhere' || 
        message.content == '!puddinpop') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
            switch(message.content){ //which audio file is played.
                case '!bruh':
                    var dispatcher = connection.playFile('audioReact/bruh.mp3');
                    break;
                case '!shots':
                    var dispatcher = connection.playFile('audioReact/SHOTS_FIRED.mp3');
                    break;
                case '!triple':
                    var dispatcher = connection.playFile('audioReact/Oh_Baby_A_Triple.mp3');
                    break;
                case '!horn2':
                    var dispatcher = connection.playFile('audioReact/AIRPORN.mp3');
                    break;
                case '!horn1':
                    var dispatcher = connection.playFile('audioReact/AIRHORN.mp3');
                    break;
                case '!wow':
                    var dispatcher = connection.playFile('audioReact/wow.mp3');
                    break;
                case '!smart':
                    var dispatcher = connection.playFile('audioReact/u_smart.mp3');
                    break;
                case '!appreciate':
                    var dispatcher = connection.playFile('audioReact/i_appreciate_that.mp3');
                    break;
                case '!fun':
                    var dispatcher = connection.playFile('audioReact/storm1.mp3');
                    break;
                case '!breakfast':
                    var dispatcher = connection.playFile('audioReact/Bwekfast.mp3');
                    break;
                case '!zipzap':
                    var dispatcher = connection.playFile('audioReact/zipzap.mp3');
                    break;
                case '!overhere':
                    var dispatcher = connection.playFile('audioReact/overhere.wav');
                    break;
                case '!puddinpop':
                    var dispatcher = connection.playFile('audioReact/puddinpop.mp3');
                    break;
            }
            dispatcher.on('end', () => {
                    message.member.voiceChannel.leave();  // The song has finished
                    });

                })
            .catch(console.log);
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }



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

    if(message.content.toLowerCase().includes('greg') == true){
        message.channel.send('you');
    }

    if(message.content.toLowerCase() == ':tim:'){
        message.delete(); //deletes message that summoned bot
        message.channel.send({
            file: "imgReact/tim.png" // Or replace with FileOptions object
            });
    }

    if(message.content.toLowerCase() == ':wtd:'){
        message.delete(); //deletes message that summoned bot
        message.channel.send({
            file: "imgReact/wtd.png" // Or replace with FileOptions object
            });
    }

    if(message.content.toLowerCase().includes('stop') == true){
        message.reply('<:Salty:310907781995823104>'); //bot replies with the salt emoji, to get the number type \:Salty: in chat
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
