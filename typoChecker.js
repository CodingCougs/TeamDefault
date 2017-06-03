
var Typo = require("typo-js");
var dictionary = new Typo('en_US');

function suggestMsg(messageStr)
{
    response = "";
    for (Word of messageStr.split()) {
        if (!dictionary.check(Word)) {
            response += "misspelled: " + Word + "\n";
            response += "suggesting: " + dictionary.suggest(Word).toString() + "\n";
        }
    }
    return response;

}

module.exports = suggestMsg;