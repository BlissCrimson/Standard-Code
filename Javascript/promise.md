# Promise

Hier behandeln wir das Thema promis und was alles dazu gehört.

## Grundlagen

Promises mit await und async werde genutzt um Daten von einer API zu fetchen.
Somit können bereits vorhandene Daten dieauf einem Server liegen genutzt werden und es ist nicht nötig eigene Datenbanken zu erstellen.

## promise

```js
function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promisError) {
        reject("Das ging nicht");
      } else {
        resolve("Hat geklappt");
      }
    }, 300);
  });
}
```

- **getPromis** soll ein Promis zurückgeben
- **setTimeout** sorgt dafür das nach 300ms, das Promis entweder augelöst (`resolve`) oder abgelehnt (`reject`) wird
- Mit der Variable `promisError` wird gesteuert, ob das Promise erfolgreich ist oder einen Fehler auslöst

## async und await

## try catch

## then

## fetch
