<template>
  <div class="shapes-2">
    test
  </div>
</template>

<style lang="scss">
.shapes-2 {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  background: transparent;
  color: #fff;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #333;
    transform: skew(45deg);
  }
}
</style>