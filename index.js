var slack = require('slack');
var   bot = slack.rtm.client();
var typoChecker = require('./typoChecker.js');

// start listening to the slack team associated to the token 
bot.listen({token:require('./config').token});

// on RTM message event
bot.message(function(msg){ 

// Call ur function
console.log(msg.text);

var response = Msg(msg.text);
console.log(response);
});