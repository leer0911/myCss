<template>
  <div class="layout-4">
    <div class="layout-4-1">
      <main>
        <h1>Am I centered yet?</h1>
        <p>Center me, please!</p>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.layout-4 {
  height: 400px;
  position: relative;
  background: rgb(235, 252, 0);
  .layout-4-1 {
    main {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1em 1.5em;
      box-sizing: border-box;
      background: #655;
      color: white;
      text-align: center;
    }

    h1 {
      margin: 0 0 0.2em;
      font-size: 150%;
    }

    p {
      margin: 0;
    }
  }
}
</style>