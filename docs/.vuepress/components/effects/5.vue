<template>
  <div class="effects-wrap5">
    <div class="effects-5-1">“The only way to get rid of a temptation is to yield to it.” — Oscar Wilde, The Picture of Dorian Gray</div>
    <div class="effects-5-2">“The only way to get rid of a temptation is to yield to it.” — Oscar Wilde, The Picture of Dorian Gray</div>
  </div>
</template>

<style lang="scss">
.effects-wrap5 {
  .effects-5-1 {
    width: 12em;
    background: #58a; /* Fallback */
    background: linear-gradient(
          to left bottom,
          transparent 50%,
          rgba(0, 0, 0, 0.4) 0
        )
        100% 0 no-repeat,
      linear-gradient(-135deg, transparent 1.5em, #58a 0);
    background-size: 2em 2em, auto;
    padding: 2em;
    color: white;
  }
  .effects-5-2 {
    position: relative;
    margin-top: 20px;
    width: 12em;
    background: #58a;
    /* Fallback */
    background: linear-gradient(-150deg, transparent 1.5em, #58a 0);
    padding: 2em;
    color: white;
    font: 100%/1.6 Baskerville, Palatino, serif;
    border-radius: 0.5em;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1.73em;
      height: 3em;
      background: linear-gradient(
          to left bottom,
          transparent 50%,
          rgba(0, 0, 0, 0.2) 0,
          rgba(0, 0, 0, 0.4)
        )
        100% 0 no-repeat;
      transform: translateY(-1.3em) rotate(-30deg);
      transform-origin: bottom right;
      border-bottom-left-radius: 0.5em;
      box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
    }
  }
}
</style>