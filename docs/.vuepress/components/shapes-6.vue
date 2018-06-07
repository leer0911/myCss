<template>
  <div>
    <div class="shapes-6">
    </div>
    <div style="margin-top:20px">
      <div class="pie">0%</div>
      <div class="pie">20%</div>
      <div class="pie">40%</div>
      <div class="pie">60%</div>
      <div class="pie">80%</div>
    </div>
  </div>
</template>

<style lang="scss">
.shapes-6 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, currentColor 0);
  color: #655;
  &::before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    border-radius: 0 100% 100% 0 / 50%;
    background-color: inherit;
    transform-origin: left;
    animation: spin 3s linear infinite, bg 6s step-end infinite;
  }
}
@keyframes spin {
  to {
    transform: rotate(0.5turn);
  }
}
@keyframes bg {
  50% {
    background: #655;
  }
}

.pie {
  display: inline-block;
  position: relative;
  width: 100px;
  line-height: 100px;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, #655 0);
  color: transparent;
  text-align: center;
  margin-right: 20px;
}

.pie::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  animation: spin 50s linear infinite, bg 100s step-end infinite;
  animation-play-state: paused;
  animation-delay: inherit;
}
</style>

<script>
export default {
  mounted() {
    function $$(selector, context) {
      context = context || document;
      var elements = context.querySelectorAll(selector);
      return Array.prototype.slice.call(elements);
    }

    $$('.pie').forEach(function(pie) {
      var p = pie.textContent;
      pie.style.animationDelay = '-' + parseFloat(p) + 's';
    });
  }
};
</script>