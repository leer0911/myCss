# 梯形标签页

:::tip
实现梯形标签页
:::

## 效果

<br>
<shapes-5></shapes-5>

[DEMO](http://dabblet.com/gist/1345dc9399dc8e794502)

## 思路

- 使用 3D 变形实现梯形效果

- 为防止内容跟着变形，可以使用伪元素替换 3D 变形

- 为了让尺寸更好掌握可使用 `transform-origin:bottom` 来把底边固定住

伪元素的核心代码：

```css
content: '';
z-index: -1;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
transform: perspective(0.5em) rotateX(5deg);
transform-origin: bottom;
```

:::warning
对元素使用了 3D 变形之后， 其内部的变形效应是“不可逆转”的， 这一点跟 2D 变形不同（在 2D 变形的体系之下， 内部的逆向变形可以抵消外部的变形效应）。
:::

:::tip
只需要把 transform-origin 改成 bottom left 或 bottom right， 就可以立即得到左侧倾斜或右侧倾斜的标签页
:::
