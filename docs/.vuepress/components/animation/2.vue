<template>
  <div class="animation-2">
    <div class="loader">Loading…</div>
  </div>
</template>

<style lang="scss">
@keyframes loader {
  to {
    background-position: -800px 0;
  }
}

.animation-2 {
  .loader {
    width: 100px;
    height: 100px;
    text-indent: 999px;
    overflow: hidden; /* Hide text */
    background: url(http://dabblet.com/img/loader.png) 0 0;
    animation: loader 1s infinite steps(8);
  }
}
</style>