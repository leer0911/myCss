# 简单的饼图

:::tip
实现饼图
:::

## 效果

<br>
<shapes-6></shapes-6>

[DEMO](http://dabblet.com/gist/722909b9808c14eb7300)

## 单个饼图

- 把圆形的左右两部分指定为两种颜色， 然后用伪元素覆盖上去， 通过旋转来决定露出多大的扇区。

- 使用 `background-color:inherit` 来设置伪元素的背景色与其宿主元素保持一致。

- 通过设置 `transform-origin:left` 来让伪元素绕着圆形的圆心来旋转。

- 通过 `border-radius` 属性来让伪元素变成一个半圆。

- 通过 `rotate()` 变形属性来让这个伪元素旋转起来。(比如 20%，可以写成.2turn)

- 超过 50% 后，可以使用上述技巧的反向版本，背景色设为所在比率部分的颜色。

```css
.pie::before {
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
}
```

## 多个不同比率的饼图

- 负的动画延时可以直接跳至动画中的任意时间点，并且定格在那里。

> “一个负的延时值是合法的。 与 0s 的延时类似， 它意味着动画会立即开始播放， 但会自动前进到延时值的绝对值处， 就好像动画在过去已经播放了指定的时间一样。 因此实际效果就是动画跳过指定时间而从中间开始播放了。”

- 由于伪元素不能使用在内联样式中，需要借助 JavaScript 来把 animation-delay 写在内联样式中，最后让伪元素去继承它

```css
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
```

[DEMO](http://dabblet.com/gist/66e1e52ac2a44ad87aa4)

## SVG 解决方案

[DEMO](http://dabblet.com/gist/4696e4c6700fe9f346d8)

- SVG 的 circle 元素来绘制圆形

- SVG 描边效果不仅仅由 `stroke` 和 `stroke-width` 组成。还有一个为虚线描边准备的 `stroke-dasharray`

- 虚线描边的线段长度指定为 0，并且把虚线间隙的长度设置为等于或大于整个圆周的长度。

```css
svg {
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
  background: yellowgreen;
  border-radius: 50%;
}
circle {
  fill: yellowgreen;
  stroke: #655;
  stroke-width: 32;
  stroke-dasharray: 38 100; /* 可得到比率为38%的扇区 */
}
```
