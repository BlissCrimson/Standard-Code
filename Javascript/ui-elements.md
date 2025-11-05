# UI-Elements



## Overlay

- Dunkler Hintergrund über der ganzen Seite
- Ein Overlay wird mit CSS erstellt und als Klasse definiert.
- Somit kann ich das Overlay einer `<div>` oder einem anderen Tag hinzufügen und mit Hilfe von JavaScript steuern.



## Dialog

- Freundliche Benachrichtigung
(kann ein Modal sein)

- Dialog hat einen eigenen Tag:

`<dialog>`
`</dialog>`



### JavaScript Funktionen:

Der Dialog hat wegen der häufigen Nutzung ein "eigenes" HTML-Tag:

Zum öffnen:
`dialog.show();`

oder :
`dialog.showModal();`

Mit showModal kann man nichts anderes machen bis die Funktion beendet ist.
(Es verhält sich dann wie ein Modal.)

Zum schließen:
`dialog.close();`


#### Beispiel Funktionen

Two simple code snippets to open or close a dialog.
Of course, parameters can also be passed to execute additional functions.

**TO OPEN A DIALOG**

ID from the Dialog
```js
let dialogRef = document.getElementById("dialog"); 
```
**to open dialog**

Function that is executed, for example, via `onclick="openDialog"`.

This dialog is called using `.show();`.

```js
function openDialog() { 
    dialogRef.show(); 
}
```

**TO CLOSE A DIALOG**

Function that is executed, for example, via `onclick="closeDialog"`.
```js
function closeDialog() {
    dialogRef.close(); // The dialog is closed with .close();.
}
```


## Modal

- ein Modal blockiert alles andere,
du musst reagieren
- ein Modal kann mit einem `<div` tag erstellt werden
- wenn kein `<button>` zum schließen eingefügt ist, hängt man im Modal fest

**TO OPEN A MODAL-DIALOG**

ID from the Dialog
```js
let dialogRef = document.getElementById("dialog"); 
```
**to open dialog**

Function that is executed, for example, via `onclick="openDialog"`.

This dialog is called using `.showModal();`.

```js
function openDialog() { 
    dialogRef.showModal(); 
}
```

**TO CLOSE A Modal-DIALOG**

Function that is executed, for example, via `onclick="closeDialog"`.
```js
function closeDialog() {
    dialogRef.close(); // The dialog is closed with .close();.
}
```