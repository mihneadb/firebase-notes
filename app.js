$(document).ready(main);

function addNote() {
    var text = $("#input-note").val();
    notesRef.push(text);
    $("#input-note").val("");
}

var notesRef = null;
function main() {
    notesRef = new Firebase("https://mihneadb.firebaseio.com/firebase-notes");
    $("#button-add").on("click", addNote);
    notesRef.endAt().limit(20).on("child_added", function(snapshot) {
        var text = snapshot.val();
        $("#div-notes").append($("<p>" + text + "</p>"));
    });
}

