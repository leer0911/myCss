<template>
  <div class="animation-6">
    <div class="path">
      <img src="http://lea.verou.me/book/adamcatlace.jpg" class="avatar" />
    </div>
  </div>
</template>

<style lang="scss">
.animation-6 {
  /**
 * Animation along a circular path - Solution 2
 */

  @keyframes spin {
    from {
      transform: rotate(0turn) translateY(-150px) translateY(50%) rotate(1turn);
    }
    to {
      transform: rotate(1turn) translateY(-150px) translateY(50%) rotate(0turn);
    }
  }

  .avatar {
    animation: spin 3s infinite linear;
  }

  /* Anything below this is just styling */

  .avatar {
    display: block;
    width: 50px;
    margin: calc(50% - 25px) auto 0;
    border-radius: 50%;
    overflow: hidden;
  }

  .path {
    width: 300px;
    height: 300px;
    padding: 20px;
    margin: 100px auto;
    border-radius: 50%;
    background: #fb3;
  }
}
</style>