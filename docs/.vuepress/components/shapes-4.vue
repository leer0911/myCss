<template>
  <div>
    <div class="shapes-4">
    </div>
    <div class="shapes-4-1">
    </div>
    <div class="shapes-4-2">
    </div>
    <div class="shapes-4-3">
    </div>
  </div>
</template>

<style lang="scss">
@mixin beveled-corners($bg, $tl: 0, $tr: $tl, $br: $tl, $bl: $tr) {
  background: $bg;
  background: linear-gradient(135deg, transparent $tl, $bg 0) top left,
    linear-gradient(225deg, transparent $tr, $bg 0) top right,
    linear-gradient(-45deg, transparent $br, $bg 0) bottom right,
    linear-gradient(45deg, transparent $bl, $bg 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
.shapes-4 {
  width: 100px;
  height: 100px;
  @include beveled-corners(#58a, 10px, 10px);
}
.shapes-4-1 {
  width: 100px;
  height: 100px;
  margin-top: 20px;
  background: #58a;
  background: radial-gradient(circle at top left, transparent 15px, #58a 0) top
      left,
    radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
    radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom
      right,
    radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
.shapes-4-2 {
  margin-top: 20px;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border: 21px solid transparent;
  border-image: 1
    url('data:image/svg+xml,\
	                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a">\
	                      <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2" />\
	                      </svg>');
  background: #58a;
  background-clip: padding-box;
}
.shapes-4-3 {
  width: 100px;
  height: 100px;
  background: #58a;
  margin-top: 20px;
  clip-path: polygon(
    20px 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% calc(100% - 20px),
    calc(100% - 20px) 100%,
    20px 100%,
    0 calc(100% - 20px),
    0 20px
  );
}
</style>