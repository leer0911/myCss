# 弹跳加载

创建弹跳加载动画

## HTML

```html
<div class="bouncing-loader">
  <div></div>
  <div></div>
  <div></div>
</div>
```

## CSS

```css
@keyframes bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
.bouncing-loader {
  display: flex;
  justify-content: center;
}
.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__bouncing-loader">
  	<div></div>
    <div></div>
    <div></div>
  </div>
</div>

<style>
@keyframes bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
.snippet-demo__bouncing-loader {
  display: flex;
  justify-content: center;
}
.snippet-demo__bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
.snippet-demo__bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.snippet-demo__bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
</style>

## Explanation

注: `1rem` 表示 `16px`。

1. `@keyframes` 定义了两种动画状态, 改变元素的 `opacity` 以及使用 `transform: translateY()` 做变换。

2. `.bouncing-loader` 是弹跳圆圈的父容器，并使用 `display: flex` 和 `justify-content: center` 使容器内的元素水平居中。

3. `.bouncing-loader > div`, 给所有父元素下的 `div` 添加样式， 设置了 `1rem` 的高宽, 用 `border-radius: 50%` 将元素变成圆形。

4. `margin: 3rem 0.2rem` 设置上下 `3rem` 及左右 `0.2rem` 的外边距，使得每个圆圈保持一定距离。

5. `animation` 是 `animation-name`, `animation-duration`, `animation-iteration-count`, `animation-direction` 组合的缩写。

6. `nth-child(n)` 选中父元素下的第几个子元素。

7. `animation-delay` 给第二、三的 `div` 添加不同的动画延迟，使得他们看起来不是同步的。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-animation

<!-- tags: animation -->
