#scriptname "Incrementor"

var slugs = [];
var itemcounter = 0;
var ticker = 1;
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