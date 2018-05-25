<template>
    <div class="demo-1">
        <div class="core"></div>
    </div>
</template>

<style lang="scss">
.demo-1 {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: url('http://csssecrets.io/images/stone-art.jpg');
  .core {
    width: 50%;
    height: 50px;
    margin: 20px auto;
    border: 10px solid hsla(0, 0%, 100%, 0.5);
    background: white;
    background-clip: padding-box;
  }
}
</style>