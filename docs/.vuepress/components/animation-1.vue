<template>
  <div class="animation-1">
    <div class="ball"></div>
  </div>
</template>

<style lang="scss">
@keyframes bounce {
  60%,
  80%,
  to {
    transform: translateY(400px);
    animation-timing-function: ease;
  }
  70% {
    transform: translateY(300px);
  }
  90% {
    transform: translateY(360px);
  }
}
.animation-1 {
  .ball {
    width: 0;
    height: 0;
    padding: 1.5em;
    border-radius: 50%;
    margin: auto;
    background: red radial-gradient(at 30% 30%, #fdd, red);
    animation: bounce 2s cubic-bezier(0.1, 0.25, 1, 0.25) forwards;
  }

  background: linear-gradient(skyblue, white 450px, yellowgreen 0);
  min-height: 100vh;
}
</style>