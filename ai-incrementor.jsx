/**
 * @author Scott Lewis <scott@atomiclotus.net>
 * @url https://atomiclotus.net
 *
 * A simple JS script for Adobe illustrator to auto-increment values in an illustrator document.
 * To use this script, simply add the token ${#} in your document anywhere you want the script
 * to insert a counter. If you include the token ten times in your document, the script with
 * replace each instance of teh token with the next number in the counter.
 *
 * IMPORTANT: The token MUST be in a text frame by itself meaning it must be a separate
 * text object from any others. In a future version I will add the ability to increment
 * counters anywhere in any text as well as support for multiple counters in the same
 * document.
 */

#target illustrator
#script "Ai Incrementor"

var slugs = [];
var padlength = 1;

var TOKEN = "${#}";

if (app.documents.length > 0) {

    var doc = app.activeDocument;

    var frames = doc.textFrames;

    for (var i = 0; i < frames.length; i++) {
        if (frames[i].contents.replace(/^\s+|\s+$/gm, '') === TOKEN) {
            slugs.push(frames[i]);
        }
    }

    padlength = ("" + slugs.length).length;

    for (var i = 0; i < slugs.length; i++) {
        var value = ("" + (100000 + (i + 1))).substr(-(padlength + 1));
        slugs[i].contents = value;
    }
}