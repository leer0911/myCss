<template>
  <div class="codepen-3">
    <input type="radio"
      checked
      name="slider"
      id="l01">
    <input type="radio"
      name="slider"
      id="l02">
    <input type="radio"
      name="slider"
      id="l03">

    <div id="wrap">
      <ul id="slider">
        <li><img src="/images/slide/bryce-canyon-utah.jpg"></li>
        <li><img src="/images/slide/wanaka-drowned-tree.jpg"></li>
        <li><img src="/images/slide/utah-peak.jpg"></li>
      </ul>
    </div>

    <div id="opts">
      <label for="l01">1</label>
      <label for="l02">2</label>
      <label for="l03">3</label>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
.codepen-3 {
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  #wrap {
    position: relative;
    width: 600px;
    height: 320px;
    margin: 30px auto;
    overflow: hidden;
  }

  #slider {
    width: 300%;
    height: 100%;
    font: 100px/400px Microsoft Yahei;
    text-align: center;
    color: #fff;
    margin-left: 0;
    animation: slide1 3s ease-out infinite;
  }

  #slider li {
    float: left;
    width: 600px;
    height: 100%;
  }

  /*创建三种动画策略*/
  @keyframes slide1 {
    0% {
      margin-left: 0;
    }
    23% {
      margin-left: 0;
    }
    33% {
      margin-left: -600px;
    }
    56% {
      margin-left: -600px;
    }
    66% {
      margin-left: -1200px;
    }
    90% {
      margin-left: -1200px;
    }
    100% {
      margin-left: 0;
    }
  }

  @keyframes slide2 {
    0% {
      margin-left: -600px;
    }
    23% {
      margin-left: -600px;
    }
    33% {
      margin-left: -1200px;
    }
    56% {
      margin-left: -1200px;
    }
    66% {
      margin-left: 0;
    }
    90% {
      margin-left: 0;
    }
    100% {
      margin-left: -600px;
    }
  }

  @keyframes slide3 {
    0% {
      margin-left: -1200px;
    }
    23% {
      margin-left: -1200px;
    }
    33% {
      margin-left: 0;
    }
    56% {
      margin-left: 0;
    }
    66% {
      margin-left: -600px;
    }
    90% {
      margin-left: -600px;
    }
    100% {
      margin-left: -1200px;
    }
  }

  /*修改动画名称*/
  #l01:checked ~ #wrap #slider {
    animation-name: slide1;
  }

  #l02:checked ~ #wrap #slider {
    animation-name: slide2;
  }

  #l03:checked ~ #wrap #slider {
    animation-name: slide3;
  }

  /*短暂地取消动画名称，模拟重启动画*/
  #l01:active ~ #wrap #slider {
    animation-name: none;
    margin-left: 0;
  }

  #l02:active ~ #wrap #slider {
    animation-name: none;
    margin-left: -600px;
  }

  #l03:active ~ #wrap #slider {
    animation-name: none;
    margin-left: -1200px;
  }

  #opts {
    width: 600px;
    height: 40px;
    margin: auto;
    color: #fff;
    text-align: center;
    font: 20px/40px Microsoft Yahei;
  }

  #opts label {
    float: left;
    width: 100px;
    height: 40px;
    margin-right: 4px;
    background: #01254a;
    cursor: pointer;
  }

  #opts label:hover {
    background: #405871;
  }

  /* 隐藏Input按钮*/
  #l01,
  #l02,
  #l03 {
    display: none;
  }
}
</style>
