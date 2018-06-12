# 动态阴影

有点类似 `box-shadow` 但阴影的颜色基于元素本身。

## HTML

```html
<div class="dynamic-shadow"></div>
```

## CSS

```css
.dynamic-shadow {
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(75deg, #6d78ff, #00ffb8);
  z-index: 1;
}
.dynamic-shadow::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit;
  top: 0.5rem;
  filter: blur(0.4rem);
  opacity: 0.7;
  z-index: -1;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__dynamic-shadow"></div>
</div>

<style>
.snippet-demo__dynamic-shadow {
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(75deg, #6d78ff, #00ffb8);
  z-index: 1;
}
.snippet-demo__dynamic-shadow::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  top: 0.5rem;
  filter: blur(0.4rem);
  opacity: 0.7;
  z-index: -1;
}
</style>

## Explanation

[笛卡尔坐标系](https://en.wikipedia.org/wiki/Cartesian_coordinate_system)

1.  `position: relative` 作用于父元素，目的是给伪元素建立笛卡尔坐标系统。
2.  `z-index: 1` 改变层叠关系。
3.  `::after` 定义伪元素
4.  `position: absolute` 使伪元素脱离文档流，并将其相对于父元素定位。
5.  `width: 100%` 和 `height: 100%` 让伪元素填充父元素，使其尺寸相等。
6.  `background: inherit` 使伪元素继承父元素的渐变效果。
7.  `top: 0.5rem` 使伪元素相对于父元素向下偏移 0.5rem。
8.  `filter: blur(0.4rem)` 模糊伪元素来模拟阴影效果。
9.  `opacity: 0.7` 使伪元素部分透明。
10. `z-index: -1` 将伪元素定位在父元素后面。

## Browser support

<span class="snippet__support-note">⚠️ 需要浏览器前缀来获取兼容性。</span>

- https://caniuse.com/#feat=css-filters

<!-- tags: visual -->
