<template>
  <div class="effects-wrap">
    <div class="effects-1 effects-1-1">
    </div>
    <div class="effects-1 effects-1-2">
    </div>
    <div class="effects-1 effects-1-3">
    </div>
  </div>
</template>

<style lang="scss">
.effects-wrap {
  display: flex;
}
.effects-1 {
  width: 100px;
  height: 50px;
  background: rgb(40, 235, 144);
  margin-right: 20px;
}
.effects-1-1 {
  box-shadow: 0 5px 4px -4px black;
}
.effects-1-2 {
  box-shadow: 3px 3px 6px -3px black;
}
.effects-1-3 {
  box-shadow: 0 5px 4px -4px black, 0 -5px 4px -4px black;
}
</style>