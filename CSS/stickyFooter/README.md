# Sticky Footer

Ein sticky footer wird immer am unteren Bildschirmrand Angezeigt, wenn der body nicht bis zum unteren Rand reicht.
Wenn der body länger ist als die höhe der Seite, wird der footer unten angehängt und wenn man nach unten scrollt ist er dann immer am Ende der Seite.


````css
html,
body {
  height: 100%;
}

```css body {
  display: flex;
  flex-direction: column;
}
````

```css
main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
```

### [stickyFooter.css](./stickyFooter.css)