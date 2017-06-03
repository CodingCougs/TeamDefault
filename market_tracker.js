var yahooFinance = require('yahoo-finance');
var Botkit       = require('botkit');

track = function(response, convo) {
    var today = new Date();
    var perc;
    var current_price;
    var interval;
    var comp;

    convo.ask("Alright, which company would you like to track?", function(response, convo) {
        var askedStock = response.text.toUpperCase();

        yahooFinance.quote({
                symbol: askedStock,
                modules: ['price', 'summaryDetail'] // optional; default modules
            }, function(err, quote) {
            var dd = today.getDate();
            var mm = today.getMonth() + 1; // January is 0!
            var yyyy = today.getFullYear();
            var h = today.getHours();
            var m = today.getMinutes();

            if (dd < 10) { dd = '0' + dd }
            if (mm < 10) {  mm = '0' + mm }
            if (h < 10) { h = '0' + h }
            if (m < 10) { m = '0' + m }

            comp = quote.price.shortName;
            console.log('company: ' + quote.price.shortName);

            today = yyyy + '/' + mm + '/' + dd + ' ' + h + ':' + m;
            console.log('date:    ' + today);

            current_price = quote.price.regularMarketPrice;
            console.log('price:   ' + current_price);

            convo.next();
        });
    });

    convo.ask("And at what percent change should I notify you?", function(response, convo) {
        perc = response.text;
        if (perc <= 0) {
            convo.ask("I track delta percent change, but please insert a positive number", function(response, convo) {
            console.log(response);
            getPercentToTrack(response, convo);
        })} else {
            response = perc / 100;
        }

        convo.next();
    });

    convo.ask("And how often should I check?", function(response, convo) {
        convo.next();
    });

    convo.say("Sweet, I'll track " + quote.price.shortName + ' which is currently sitting at $' + current_price + ' for a stock change of +/- ' + perc + '%');
}

module.exports = track;