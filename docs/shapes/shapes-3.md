# 菱形图片

:::tip
实现菱形图片
:::

## 效果

<br>
<shapes-3></shapes-3>

[DEMO](http://dabblet.com/gist/c62456fed36a524b8273)

## 思路

- 使用 clip-path 属性。

- 裁切路径允许我们把元素裁剪为我们想要的任何形状。 在这个例子 中，我们将会使用 polygon()（多边形） 函数来指定一个菱形。

```css
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```
