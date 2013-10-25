$(document).ready(main);

function addNote() {
    var text = $("#input-note").val();
    notesRef.push(text);
    $("#input-note").val("");
}

function populateNotes() {
    var query = notesRef.startAt();
    query.once("value", function(snapshot) {
        snapshot.forEach(function(child) {
            var text = child.val();
            $("#div-notes").append($("<p>" + text + "</p>"));
        });
    });
}

var notesRef = null;
function main() {
    notesRef = new Firebase("https://mihneadb.firebaseio.com/firebase-notes");
    $("#button-add").on("click", addNote);
    populateNotes();
    notesRef.on("child_added", function(snapshot) {
        var text = snapshot.val();
        $("#div-notes").append($("<p>" + text + "</p>"));
    });
}

