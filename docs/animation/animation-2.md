# 逐帧动画

:::tip
实现自适应的椭圆，即如果它的宽高相等，就显示一个圆，否则显示一个椭圆。
:::

## 效果

<br>
<animation-2></animation-2>

[DEMO](http://dabblet.com/gist/bcc082518391f45b41dc)

## 思路

- 把动画中的所有帧全部拼合到一张 PNG 图片中

- 采用 steps() 这个调速函数，而不是基于贝塞尔曲线的调速函数。

```css
.loader{
  background: url(http://dabblet.com/img/loader.png) 0 0;
  animation: loader 1s infinite steps(8);
}
```