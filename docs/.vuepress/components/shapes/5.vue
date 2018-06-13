<template>
  <div class="shapes-5">
    111111
  </div>
</template>

<style lang="scss">
.shapes-5 {
  width: 100px;
  position: relative;
  color: #fff;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 5px;
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: perspective(0.5em) rotateX(5deg);
    transform-origin: bottom;
    background: #333;
  }
}
</style>