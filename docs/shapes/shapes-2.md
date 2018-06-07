# 平行四边形

:::tip
实现平行四边形
:::

## 效果

<br>
<shapes-2></shapes-2>

[DEMO](http://dabblet.com/gist/f2d98791ab1f0b238aa9)

## 思路

- 可以通过 skew() 的变形属性来对矩形进行斜向拉伸

- 利用伪元素以及定位属性产生了一个方块， 然后对伪元素设置样式， 并将其放置在其宿主元素的下层。

核心代码如下：

```css
.button {
  position: relative;
  background: transparent;
}
.button::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #333;
  transform: skew(45deg);
}
```
