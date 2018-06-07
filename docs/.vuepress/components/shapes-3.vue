<template>
  <div class="shapes-3">
    <img src="http://csssecrets.io/images/adamcatlace.jpg">
  </div>
</template>

<style lang="scss">
.shapes-3 {
  img {
    width: 200px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: 1s;
    &:hover {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
}
</style>