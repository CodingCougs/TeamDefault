var Typo = require("typo-js");
var dictionary = new Typo(lang_code);

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
