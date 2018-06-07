<template>
  <div class="effects-wrap3">
    <img src="http://csssecrets.io/images/tiger.jpg"
      class="img1" />
    <h2>混合模式</h2>
    <div style="background-image:url(http://csssecrets.io/images/tiger.jpg)"
      class="tinted-image"></div>
  </div>
</template>

<style lang="scss">
/**
 * Irregular drop-shadows
 */
.effects-wrap3 {
  .img1 {
    width: 400px;
    transition: 1s filter, 1s -webkit-filter;
    -webkit-filter: sepia() saturate(4) hue-rotate(295deg);
    filter: sepia() saturate(4) hue-rotate(295deg);
  }

  .img1:hover,
  .img1:focus {
    -webkit-filter: none;
    filter: none;
  }
  .tinted-image {
    width: 400px;
    height: 220px;
    background-size: cover;
    background-color: hsl(335, 100%, 50%);
    background-blend-mode: luminosity;
    transition: 0.5s background-color;
  }

  .tinted-image:hover {
    background-color: transparent;
  }
}
</style>