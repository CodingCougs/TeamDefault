var Botkit  = require('botkit');
var finance = require('./market_tracker.js');

var controller = Botkit.slackbot({
    require_delivery: true,
});

controller.hears(['track', 'stock', 'stocks'], ['mention', 'direct_message', 'direct_mention'], function(bot, message) {
    bot.startConversation(message, track);
});

var bot = controller.spawn({
    token:require('./config').token
});

bot.startRTM(function(err, bot, payload) {
    if (err) {
        throw new Error('Could not connect to Slack');
    }
});