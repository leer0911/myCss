<template>
  <div>
    <div class="demo-7-1">
    </div>
    <div class="demo-7-2">
    </div>
    <div class="demo-7-3">
    </div>
    <div class="demo-7-4">
    </div>
  </div>
</template>

<style lang="scss">
@mixin polka($size, $dot, $base, $accent) {
  background: $base;
  background-image: radial-gradient($accent $dot, transparent 0),
    radial-gradient($accent $dot, transparent 0);
  background-size: $size $size;
  background-position: 0 0, $size/2 $size/2;
}
@mixin checkerboard($size, $base, $accent: rgba(0, 0, 0, 0.25)) {
  background: $base;
  background-image: linear-gradient(
      45deg,
      $accent 25%,
      transparent 0,
      transparent 75%,
      $accent 0
    ),
    linear-gradient(
      45deg,
      $accent 25%,
      transparent 0,
      transparent 75%,
      $accent 0
    );
  background-position: 0 0, $size $size;
  background-size: 2 * $size 2 * $size;
}
.demo-7-1 {
  width: 100%;
  height: 200px;
  background: #58a;
  background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
  background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
}
.demo-7-2 {
  width: 100%;
  height: 200px;
  margin-top: 30px;
  @include polka(30px, 30%, #655, tan);
}
.demo-7-3 {
  width: 100%;
  height: 200px;
  margin-top: 30px;
  @include checkerboard(15px, #58a, tan);
}
.demo-7-4 {
  width: 100%;
  height: 200px;
  margin-top: 30px;
  background: #eee
    url('data:image/svg+xml,\
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25" >\
            <rect x="50" width="50" height="50" />\
            <rect y="50" width="50" height="50" />\
            </svg>');
  background-size: 30px 30px;
}
</style>