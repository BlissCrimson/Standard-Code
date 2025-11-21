function init() {
    getFromLocalStorage();
    renderAllNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getFromLocalStorage() {
    let myTitlesArr = JSON.parse(localStorage.getItem("notesTitles"));
    let myNotesArr = JSON.parse(localStorage.getItem("notes"));

    if (myTitlesArr > 0) {
        notesTitles = myTitlesArr;
    }

    if (myNotesArr) {
        notes = myNotesArr;
    }
}