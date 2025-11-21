# Local Storage

Im local storage können saceh zwischen gespeichert werden.
Das hat den Vorteil das beim neuladen der Seite, z.B. Notizen bei einer Notizseite die Daten nicht verschwinden sonder aus dem local storage geladen werden und angezeigt werden.

##


### Initialisieren

Mit der function **init** wird beim laden der Seite die Daten aus dem local storage geladen.

```js
function init() {
  getFromLocalStorage();
  renderAllNotes();
}
```


### in den local storage speichern

Mit dieser function werden die Daten in den local storage geladen

```js
function saveToLocalStorage() {
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
  localStorage.setItem("notes", JSON.stringify(notes));
}
```


### laden aus dem local storage

Mit dieser Funktion werden die Daten aus dem local storage geladen, so das z.B. Ladezeiten verringert werden können.

```js
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
```

[localStorage.js](localStorage.js)
