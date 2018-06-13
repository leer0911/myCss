<template>
  <div class="animation-4">
    <h1>CSS is awesome!</h1>
  </div>
</template>

<style lang="scss">
.animation-4 {
  /**
 * Typing animation
 */

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes caret {
    50% {
      border-right-color: transparent;
    }
  }

  h1 {
    font: bold 200% Consolas, Monaco, monospace;
    /*width: 8.25em;*/
    width: 15ch;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.05em solid;
    animation: typing 8s steps(15), caret 1s steps(1) infinite;
  }
}
</style>