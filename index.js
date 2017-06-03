// This will be our main program driver [Probably we will use botkit.]



var Botkit = require('botkit');


var controller = Botkit.slackbot({
    require_delivery: true,
});


var bot = controller.spawn({
    token:require('./config').token
});

bot.startRTM(function(err,bot,payload) {
 
  if (err) {
 
    throw new Error('Could not connect to Slack');
 
  }
 
});

controller.hears(["Hello","Hi","Hola","Hey","boo"],["direct_message"],function(bot,message) {

    if(message.text.toLowerCase() === "hello"){
        bot.reply(message, 'Hello there <@'+message.user+'>');
    }
    
    else if(message.text.toLowerCase() === "hi"){
        bot.reply(message, 'Hi there <@'+message.user+'>');
    }
    
    else if(message.text.toLowerCase() === "hey"){
        bot.reply(message, 'Hey there <@'+message.user+'>');
    }

    else if(message.text.toLowerCase() === "hola"){
        bot.reply(message, 'Hola <@'+message.user+'>');
    }
    else {
            bot.reply(message, 'Hi there <@'+message.user+'>');
    }
});