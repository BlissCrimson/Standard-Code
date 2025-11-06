# CSS Hierarchie

Im CSS ist ien Algorithmus der bestimmt welche Stildeklaration am Schluss auf ein Element angewendet wird.

Wenn mehr als eine CSS-Regel auf ein Element angewendet wird, setzt sie die Deklartation mit der höchsten Spezifität
durch und dieser Stil wird auf das Element angewendet.


## Übersicht der Gewichtung

<table>
  <thead>
    <tr>
      <th>Selektor</th>
      <th>Gewichtung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Inline Style</td>
      <td></td>
    </tr>
    <tr>
      <td>ID Selektor</td>
      <td>1-0-0</td>
    </tr>
    <tr>
      <td>Klassen, <br>
        Attributselektoren<br>
      Pseudoklassen</td>
      <td>0-1-0</td>
    </tr>
    <tr>
      <td>Elemente <br>
      Pseudoelemente</td>
      <td>0-0-1</td>
    </tr>
    <tr>
      <td>Universalselektoren</td>
      <td>0-0-0</td>
    </tr>
  </tbody>
</table>


## Erklärung der einzelnen Selektoren

1. Inline Style
    - Bespiel:
        ```html
        <h1 style="color: pink;">
        ```
    - Hat die höchste Priorität
    - wird direkt angewendet mit dem Styleattribut
        + direkt im HTML

2. ID Selektor
    - Beispiel:
        ```css
        #navbar {
            color: green;
        }
        ```
    - hat die 2. höchste Priorität
    - Identifiziert durch das eindeutige ID-Attribut eines Elements
        + wird mit # im style.css angegeben

3. Klassen, Attribitselektoren und Pseudoklassen
    1. Klassen 
        + werden im HTML vergeben
        + Beispiel HTML:
            ```html
            <div class="ananas">
            ```
        + Beispiel CSS:
            ```css
            .ananas {
                color: yellow;
            }
            ```
    2. Atributselektoren
        + Beispiel:
            ```css
            [type="text"] {
                text-align: center;
            }
            ```    
    + Pseudoklassen
        + ergänzen Bereits definierte Klassen
            - Beispiel:
                ```css
                .ananas:hover {
                    background-color: blue;
                }
                ```
        + Mit Pseudoklassen lassen sich die CSS Styletypen erweitern.

4. Elemente und Pseudoelemente
    1. Elemete
        + Beispiel für Elemente sind:
            - h1
            - a
            - div
    2. Pseudoelemente
        ```css
        ::before {

        }

        ::after {

        }
        ```
    - Sie haben die Niedrigste Priorität
    - Gilt für HTML-Elemente und Pseudo-Elemente

5. Universalslelektoren
    + Beispiel:
        ```css
        * {
            box-sizing: border-box;
        }
        ```
    - Universalselektoren haben gar keine Priorität
    - alle anderen Selektoren sind wichtiger


## Beispiel Code mit Priorisierung

```html
<style>
    #demo {color: blue;} /* weight: 1-0-0 */
    p#demo {color: orange;} /* weight: 1-0-1 WINS! */
    .test {color: green;} /* weight: 0-1-0 */
    p.test {color: green;} /* weight: 0-1-1 */
    p {color: red;} /* weight: 0-0-1 */
  </style>
```