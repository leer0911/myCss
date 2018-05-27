# 复杂的背景图案

:::tip
实现网格，波点，棋盘
:::

## 效果

<br>
<bdg-7></bdg-7>

[网格](http://dabblet.com/gist/43bde2086e9d549fb844)

[波点](http://dabblet.com/gist/cd33da5d1a48046746cd)

[棋盘](http://dabblet.com/gist/5d3cacead6f134da842e)

## 思路

* `background-image:linear-gradient` 实现渐变

* `background-size` 调整尺寸

* `background-position` 调整位置

## 网格

```css
background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
    linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);
background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
```

## 波点

```scss
@mixin polka($size, $dot, $base, $accent) {
  background: $base;
  background-image: radial-gradient($accent $dot, transparent 0),
    radial-gradient($accent $dot, transparent 0);
  background-size: $size $size;
  background-position: 0 0, $size/2 $size/2;
}
```

## 棋盘

```scss
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
```

svg 版本

```css

background: #eee url('data:image/svg+xml,\ <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25" >\ <rect x="50" width="50" height="50" />\ <rect y="50" width="50" height="50" />\ </svg>');
background-size: 30px 30px;

```

:::tip
请注意，如果你出于可读性的考虑，需要把一句 CSS 代码打断为多行，只需要用反斜杠（\）来转义每行末尾的换行就可以了。
:::