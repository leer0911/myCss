<template>
  <div class="effects-wrap2">
    <div class="speech">Speech bubble</div>
    <div class="dotted">Dotted border</div>
    <div class="cutout">Cutout corners</div>
  </div>
</template>

<style lang="scss">
/**
 * Irregular drop-shadows
 */
.effects-wrap2 {
  div {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    vertical-align: bottom;
    box-sizing: border-box;
    width: 5.9em;
    height: 5.2em;
    margin: 0.6em;
    background: #fb3;
    /*box-shadow: .1em .1em .3em rgba(0,0,0,.5);*/
    -webkit-filter: drop-shadow(0.1em 0.1em 0.1em rgba(0, 0, 0, 0.5));
    filter: drop-shadow(0.1em 0.1em 0.1em rgba(0, 0, 0, 0.5));
    font: 200%/1.6 Baskerville, Palatino, serif;
    text-align: center;
  }

  .speech {
    border-radius: 0.3em;
  }

  .speech::before {
    content: '';
    position: absolute;
    top: 1em;
    right: -0.7em;
    width: 0;
    height: 0;
    border: 1em solid transparent;
    border-left-color: #fb3;
    border-right-width: 0;
  }

  .dotted {
    background: transparent;
    border: 0.3em dotted #fb3;
  }

  .cutout {
    border: 0.5em solid #58a;
    border-image: 1
      url('data:image/svg+xml,\ <svg xmlns="http://www.w3.org/2000/svg"\ width="3" height="3" fill="%23fb3">\ <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\ </svg>');
    background-clip: padding-box;
  }
}
</style>