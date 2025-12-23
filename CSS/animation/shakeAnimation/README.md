# CSS Shake Animation

##

```css
img:hover {
  animation: shake 1.6s linear infinite;
}

@keyframes shake {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }

  10% {
    transform: translate(2px, -1px) rotate(1deg);
  }
  20% {
    transform: translate(-3px, 2px) rotate(-2deg);
  }
  30% {
    transform: translate(4px, 1px) rotate(1deg);
  }
  40% {
    transform: translate(-2px, -3px) rotate(2deg);
  }
  50% {
    transform: translate(1px, 3px) rotate(-1deg);
  }

  /* Rückweg – gespiegelt für fließenden Loop */
  60% {
    transform: translate(-2px, -3px) rotate(2deg);
  }
  70% {
    transform: translate(4px, 1px) rotate(1deg);
  }
  80% {
    transform: translate(-3px, 2px) rotate(-2deg);
  }
  90% {
    transform: translate(2px, -1px) rotate(1deg);
  }

  /* exakt wie bei 0% → nahtloser Übergang */
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
}
```
