# HTML

Hier findet ihr verschieden code snippets von und für HTML.

Dabei können es einfache erklärungen einzelne code zeilen sein, bis hinzu ganzen HTML Dateien.

Natürlich könnt ihr euch auch einzelne snipptes kopieren oder die ganzen .html files.

## HTML-Tags

Was sind HTML tags?

Ein Beispiel: `<a>` ist ein HTML Tag. 
Davon gibt es eine ganze auswahl, die werde ich hier aber nicht aufführen. 
Ihr könnt sie über die Links anschauen: [W3Schools](https://www.w3schools.com/tags/) oder [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)

Mit den tags wird angegeben was für ein Element ihr auf einer Webseite nutzt.





### [Input und Label](./inputundlabel.md)

Label Tags können an Input Tags gekoppelt werden, das macht es gerade screenreadern einfacher.

Beispiel:

```html
<Label for="amount">Anzahl</Label>
<input id="amount" min="0" max="20" type=number>
```

Hier ist ein input feld für Zahlen. 
`id="amount"` das input Feld bekommt eine eindeutige ID, somit kann im `<Label>` mit `for="amount"` das input feld mit der ID gekoppelt werden.
Mit `min="0"` begrenzen wir das input Feld auf, das es nicht in den Negativenbereich zählen kann bzw. Negative Zahlen annimmt.
Mit `max="20"` begrnezen wir es nach Oben. 

Somit haben wir `<Label>` und `<input` gekoppelt.
Wenn ich auf der Webseite aum Amount klicke, springe ich in input Feld und kann eine Zahl zwischen 0 und 20 eingeben.