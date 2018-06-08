<template>
  <div class="experience-2">
  </div>
</template>

<style lang="scss">
.experience-2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #333;
  cursor: pointer;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    left: -10px;
    bottom: -10px;
  }
}
</style>