# 下划线动画效果

当鼠标悬浮文本在文本上时，触发一个下划线动画。

<small>**Credit:** https://flatuicolors.com/</small>

## HTML

```html
<p class="hover-underline-animation">Hover this text to see the effect!</p>
```

## CSS

```css
.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
}
.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
```

## Demo

<div class="snippet-demo">
  <p class="snippet-demo__hover-underline-animation">Hover this text to see the effect!</p>
</div>

<style>
.snippet-demo__hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
}
.snippet-demo__hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.snippet-demo__hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>

## Explanation

1.  `display: inline-block` 让块级 `p` 变成 `inline-block` ，这样做的目的是让下划线宽度保持文本内容宽度而不是父级宽度。
2.  `position: relative` 为伪元素创建笛卡尔坐标系统。
3.  `::after` 定义伪元素。
4.  `position: absolute` 让伪元素脱离正常文档流。
5.  `width: 100%` 让伪元素充满整个文本块。
6.  `transform: scaleX(0)` 默认伪元素缩放值为 0，所以它将不会显示。
7.  `bottom: 0` 和 `left: 0` 让元素位于左下角。
8.  `transition: transform 0.25s ease-out` 意味着 `transform` 会有个 0.25 秒的过渡效果，用的是 `ease-out` 时间函数。
9.  `transform-origin: bottom right` 设置变换原点为右下角。
10. `:hover::after` 通过使用 `scaleX(1)` 让宽度过渡到 100%, 然后改变 `transform-origin` 为 `bottom left` 这样定位点就会反转，从而允许其在悬停时转换到另一个方向。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=transforms2d
- https://caniuse.com/#feat=css-transitions

<!-- tags: animation -->
