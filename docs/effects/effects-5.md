# 折角效果

:::tip
实现折角效果
:::

## 效果

<br>
<effects-5></effects-5>

## 45° 折角的解决方案

[DEMO](http://dabblet.com/gist/83b4d6bc907aa5ab576a)

- 首先通过渐变方案实现切角效果

- 增加另一层渐变来生成这个三角形并将其定位在右上角，通过 `background-size` 来控制折角大小。

```css
background: linear-gradient(
      to left bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.4) 0
    ) 100% 0 no-repeat, linear-gradient(-135deg, transparent 1.5em, #58a 0);
```

## 其他角度的解决方案

[DEMO](http://dabblet.com/gist/bc32dc20adea2261c731)

- 通过伪元素加变换来实现

```css
background: linear-gradient(
    to left bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.2) 0,
    rgba(0, 0, 0, 0.4)
  ) 100% 0 no-repeat;
transform: translateY(-1.3em) rotate(-30deg);
transform-origin: bottom right;
```

## scss 版本

[DEMO](https://codepen.io/leaverou/pen/raGaNR)
