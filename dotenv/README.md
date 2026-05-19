# .env – Umgebungsvariablen

Eine `.env`-Datei (kurz für „environment") speichert **sensible Konfigurationswerte** außerhalb des Quellcodes – zum Beispiel API-Keys, Datenbankpasswörter oder URLs, die je nach Umgebung (Entwicklung, Produktion) unterschiedlich sind.

## Warum eine .env-Datei?

Ohne `.env`-Datei müsste man solche Werte direkt im Code eintragen:

```js
// Schlecht: API-Key liegt im Code und landet im Git-Repository
const apiKey = "abc123geheim";
```

Das ist gefährlich, weil der Wert in der Versionskontrolle (z. B. Git) landet und für jeden sichtbar ist. Mit einer `.env`-Datei bleibt er lokal:

```js
// Gut: Wert kommt aus der Umgebung
const apiKey = process.env.API_KEY;
```

## Regeln für .env-Dateien

| Regel | Erklärung |
|---|---|
| Niemals committen | `.env` gehört in `.gitignore` |
| `.env.example` bereitstellen | Zeigt Teamkollegen, welche Variablen nötig sind – ohne echte Werte |
| Keine Leerzeichen um `=` | `KEY=wert` ist korrekt, `KEY = wert` kann Probleme machen |
| Keine Anführungszeichen nötig | `KEY=meinwert` reicht, Anführungszeichen sind optional |

## Syntax

```env
# Kommentar – wird ignoriert
VARIABLE_NAME=wert

# Strings (Anführungszeichen optional)
APP_NAME=MeineApp
APP_URL="https://example.com"

# Zahlen
PORT=3000

# Boolean-ähnlich (als String)
DEBUG=true
```

## Verwendung in verschiedenen Umgebungen

| Datei | Zweck |
|---|---|
| `.env` | Lokale Entwicklungswerte – **nicht committen** |
| `.env.example` | Vorlage mit leeren oder Beispielwerten – **committen** |
| `.env.production` | Produktionswerte (oft über den Server/Deploy-Service gesetzt) |

## Einbinden

**Node.js** (mit dem Paket [`dotenv`](https://www.npmjs.com/package/dotenv)):

```js
import "dotenv/config";

console.log(process.env.API_KEY);
```

**Vite / Vue / React** (automatisch, Variablen müssen `VITE_` als Präfix haben):

```env
VITE_API_URL=https://api.example.com
```

```js
console.log(import.meta.env.VITE_API_URL);
```

## Beispieldatei

Eine kommentierte Beispiel-.env-Datei findest du in diesem Ordner: [.env.example](./.env.example)

## .gitignore

Damit die `.env`-Datei niemals im Repository landet, muss sie in `.gitignore` eingetragen sein:

```
# .gitignore
.env
.env.local
.env.*.local
```
