//imports discord.js moldule
const Discord = require('discord.js');
//Create instance of the discord client
const BotBoy = new Discord.Client();

BotBoy.on('ready', () => {
  console.log('I am ready!');
});

BotBoy.on('message', (message) =>{

    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if(message.content == '!help'){
        message.author.send('regulars commands: !delete # (where # is between 2 and 100) \n !date \n !time \n\n' +
        'Audio commands list: \n A !aah  !appreciate \n B !banana  !breakfast  !bruh  !bury  !butt \n C !chili  !comingin \n D !damnright  !dead' +
        '  !dontsay  !dream \n F !fb  !feel  !firstturn  !fna  !fuckedup  !fun \n H !hea  !heh  !hello  !here  !hey  !hm  !horn1  !horn2 \n I !isit ' +
        ' \n J !joke \n L !laser  !loveu  !luis \n N !nico  !no \n O !odd  !omghg  !overhere \n P !pgood  !puddinpop  !purse \n R !ree  !rev  !rocks \n S !sandwich ' +
        '  !shots  !shrapnel  !smart  !sorry  !sorryh  !swindled \n T !talking  !thattome  !triple  !ty \n U !urgay \n V !vg \n W !winter  !woah ' +
        '  !wow \n Y !yes  !youwhat \n Z !zipzap \n\n'+
        'Reaction pictures command list: \n :tim: \n :wtd: '); //sent via direct message to person asking for help.
    }


    if(message.content.substring(0,7) == '!delete'){
        try{
        var numDelete = parseInt(message.content.substring (8,message.content.length), 10);
        console.log(numDelete);
        if(numDelete >= 2 && numDelete <= 100){
           message.channel.fetchMessages({limit: numDelete}).then(messages => message.channel.bulkDelete(messages));
        }
        }catch(err){
            message.log(err);
        }

    }

    if (message.content == '!bruh' || message.content == '!shots' || message.content == '!triple' || message.content == '!horn2' ||
        message.content == '!horn1' || message.content == '!wow' || message.content == '!smart' || message.content == '!appreciate' ||
        message.content == '!fun' || message.content == '!breakfast' || message.content == '!zipzap' || message.content == '!overhere' ||
        message.content == '!puddinpop' || message.content == '!sorry' || message.content == '!hm' || message.content == '!hello' ||
        message.content == '!vg' || message.content == '!ty' || message.content == '!butt' || message.content == '!rev' ||
         message.content == '!yes' || message.content == '!hey' || message.content == '!odd' || message.content == '!ree' ||
         message.content == '!chili' || message.content == '!feel' || message.content == '!fna' || message.content == '!hea' ||
         message.content == '!comingin' || message.content == '!rocks' || message.content == '!shrapnel' || message.content == '!dead' ||
         message.content == '!dream' || message.content == '!here' || message.content == '!nico' || message.content =='!isit' ||
         message.content == '!winter' ||message.content == '!youwhat' ||message.content == '!woah' ||message.content == '!laser' ||message.content == '!pgood' ||
         message.content == '!aah' || message.content == '!banana' || message.content == '!bury' || message.content == '!damnright' || message.content == '!dontsay' ||
       message.content == '!firstturn' || message.content == '!fuckedup' || message.content == '!fb' || message.content == '!heh' || message.content == '!joke' ||
       message.content == '!loveu' || message.content == '!luis' || message.content == '!no' || message.content == '!omghg' || message.content == '!purse' ||
       message.content == '!sandwich' || message.content == '!sandwich' || message.content == '!sorryh' || message.content == '!swindled' ||
       message.content == '!talking' || message.content == '!thattome' || message.content == '!urgay' ){
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
            var channel = message.member.voiceChannel;
            message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
            switch(message.content){ //which audio file is played.
                case '!aah':
                    var dispatcher = connection.playFile('audioReact/aah.mp3')
                    break;
                case '!banana':
                    var dispatcher = connection.playFile('audioReact/banana.mp3')
                    break;
                case '!bury':
                    var dispatcher = connection.playFile('audioReact/buryyou.mp3')
                    break;
                case '!damnright':
                    var dispatcher = connection.playFile('audioReact/damnright.mp3')
                    break;
                case '!dontsay':
                    var dispatcher = connection.playFile('audioReact/dontsay.mp3')
                    break;
                case '!firstturn':
                    var dispatcher = connection.playFile('audioReact/firstturn.mp3')
                    break;
                case '!fuckedup':
                    var dispatcher = connection.playFile('audioReact/fuckedup.mp3')
                    break;
                case '!fb':
                    var dispatcher = connection.playFile('audioReact/fuckingbitch.mp3')
                    break;
                case '!heh':
                    var dispatcher = connection.playFile('audioReact/heh.mp3')
                    break;
                case '!joke':
                    var dispatcher = connection.playFile('audioReact/joke.mp3')
                    break;
                case '!loveu':
                    var dispatcher = connection.playFile('audioReact/loveu.mp3')
                    break;
                case '!luis':
                    var dispatcher = connection.playFile('audioReact/luis.mp3')
                    break;
                case '!no':
                    var dispatcher = connection.playFile('audioReact/no.mp3')
                    break;
                case '!omghg':
                    var dispatcher = connection.playFile('audioReact/omghg.mp3')
                    break;
                case '!purse':
                    var dispatcher = connection.playFile('audioReact/purse.mp3')
                    break;
                case '!sandwich':
                    var dispatcher = connection.playFile('audioReact/sandwich.mp3')
                    break;
                case '!sorryh':
                    var dispatcher = connection.playFile('audioReact/sorryh.mp3')
                    break;
                case '!swindled':
                    var dispatcher = connection.playFile('audioReact/swindled.mp3')
                    break;
                case '!talking':
                    var dispatcher = connection.playFile('audioReact/talking.mp3')
                    break;
                case '!thattome':
                    var dispatcher = connection.playFile('audioReact/thattome.mp3')
                    break;
                case '!urgay':
                    var dispatcher = connection.playFile('audioReact/urgay.mp3')
                    break;
                case '!woah':
                    var dispatcher = connection.playFile('audioReact/WOAH.mp3')
                    break;
                case '!laser':
                    var dispatcher = connection.playFile('audioReact/LASERGUN.mp3')
                    break;
                case '!pgood':
                    var dispatcher = connection.playFile('audioReact/good.mp3')
                    break;
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
                case '!sorry':
                    var dispatcher = connection.playFile('audioReact/sorry.mp3');
                    break;
                case '!hm':
                    var dispatcher = connection.playFile('audioReact/hm.mp3');
                    break;
                case '!hello':
                    var dispatcher = connection.playFile('audioReact/hello.mp3');
                    break;
                case '!vg':
                    var dispatcher = connection.playFile('audioReact/vg.mp3');
                    break;
                case '!ty':
                    var dispatcher = connection.playFile('audioReact/ty.mp3');
                    break;
                case '!butt':
                    var dispatcher = connection.playFile('audioReact/butt.mp3');
                    break;
                case '!rev':
                    var dispatcher = connection.playFile('audioReact/rev.mp3');
                    break;
                case '!hey':
                    var dispatcher = connection.playFile('audioReact/HEY.mp3');
                    break;
                case '!odd':
                    var dispatcher = connection.playFile('audioReact/ODD.mp3');
                    break;
                case '!ree':
                    var dispatcher = connection.playFile('audioReact/REEE.mp3');
                    break;
                case '!yes':
                    var dispatcher = connection.playFile('audioReact/YESYESYES.mp3');
                    break;
                case '!chili':
                    var dispatcher = connection.playFile('audioReact/CHILIDOGS.mp3');
                    break;
                case '!feel':
                    var dispatcher = connection.playFile('audioReact/feelsso.mp3');
                    break;
                case '!fna':
                    var dispatcher = connection.playFile('audioReact/fna.mp3');
                    break;
                case '!hea':
                    var dispatcher = connection.playFile('audioReact/HEA.mp3');
                    break;
                case '!comingin':
                    var dispatcher = connection.playFile('audioReact/coming_in.mp3');
                    break;
                case '!rocks':
                    var dispatcher = connection.playFile('audioReact/rocks.mp3');
                    break;
                case '!shrapnel':
                    var dispatcher = connection.playFile('audioReact/shrapnel.mp3');
                    break;
                case '!dead':
                    var dispatcher = connection.playFile('audioReact/dead.mp3');
                    break;
                case '!dream':
                    var dispatcher = connection.playFile('audioReact/dream.mp3');
                    break;
                case '!here':
                    var dispatcher = connection.playFile('audioReact/here.mp3');
                    break;
               case '!nico':
                    var dispatcher = connection.playFile('audioReact/nico.mp3');
                    break;
               case '!isit':
                    var dispatcher = connection.playFile('audioReact/orisit.mp3');
                    break;
               case '!winter':
                    var dispatcher = connection.playFile('audioReact/nuclearwinter.mp3');
                    break;
               case '!youwhat':
                    var dispatcher = connection.playFile('audioReact/youwhat.mp3');
                    break;
            }
            dispatcher.on('end', () => {
                    channel.leave();  // The song has finished
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

    if(message.content.toLowerCase() == 'bing' && message.author.username != 'BotBoy'){
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

//requires bot token that was created when BotBoy was made via discord
//keep this token private
BotBoy.login('MzE5NTg2MTUxNDc0Mzk3MTg0.DBDFVw.YxJoNckPhici90xt8HRY7f3eBG4');
