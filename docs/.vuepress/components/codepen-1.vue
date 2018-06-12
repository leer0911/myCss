<template>
  <div class="codepen-1">
    <div class="cc">
      <div class="cc__container">
        <ul class="cc__container__list">
          <li class="cc__container__list__item">world !</li>
          <li class="cc__container__list__item">bob !</li>
          <li class="cc__container__list__item">users !</li>
          <li class="cc__container__list__item">everybody !</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
.codepen-1 {
  width: 100%;
  height: 100px;
  background: rgb(11, 41, 80);
  display: flex;
  justify-content: center;
  align-items: center;
  .cc {
    color: #ecf0f1;
    &__container {
      font-weight: 600;
      overflow: hidden;
      height: 20px;
      position: relative;
      &__list {
        margin: 0;
        padding: 0;
        text-align: left;
        list-style: none;
        animation: change 10s infinite;
        &__item {
          margin: 0;
        }
      }
    }
  }

  @keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }
}
</style>
