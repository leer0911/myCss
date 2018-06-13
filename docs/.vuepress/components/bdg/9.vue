<template>
  <div>
    <div class="demo-9-1">
    </div>
    <div class="demo-9-2">
    </div>
    <div class="demo-9-3">
    </div>
  </div>
</template>

<style lang="scss">
.demo-9-1 {
  width: 100%;
  height: 200px;
  border: 1em solid transparent;
	background: linear-gradient(white, white) padding-box,
	            url(http://csssecrets.io/images/stone-art.jpg) border-box  0 / cover;
}
.demo-9-2 {
  width: 100%;
  height: 200px;
  margin-top: 30px;
  border: 1em solid transparent;
	background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, 
	              #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 6em 6em;
}
.demo-9-3 {
  width: 100%;
  height: 200px;
  margin-top: 30px;
  border: 1px solid transparent;
	background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em;
	animation: ants 12s linear infinite;
}
@keyframes ants { to { background-position: 100% 100% } }
</style>