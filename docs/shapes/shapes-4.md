# 切角效果

:::tip
实现切角效果
:::

## 效果

<br>
<shapes-4></shapes-4>

[切角 DEMO](http://dabblet.com/gist/2937c990d6bfad274740)

[弧角 DEMO](http://dabblet.com/gist/24484257bc6cf7076a8e)

[SVG + border-image 版 DEMO](http://dabblet.com/gist/365c867441f3ee298212)

[裁切 DEMO](http://dabblet.com/gist/4a88c463afdb0778e973)

## 渐变方案

:::tip
假设我们只需要一个角被切掉的效果， 以右下角为例
:::

- 渐变可以接受一个角度（比如 45deg） 作为方向， 而且色标的位置信息也可以是绝对的长度值， 这一点丝毫不受容器尺寸的影响

- 只需要一个线性渐变就可以达到目标。 这个渐变需要把一个透明色标放在切角处， 然后在相同位置设置另一个色标， 并且把它的颜色设置为我们想要的背景色。 CSS 代码如下所示（假设切角的深度是 15px）：

```css
background: #58a;
background: linear-gradient(-45deg, transparent 15px, #58a 0);
```

:::tip
假设我们想要两个角被切掉的效果
:::

只用一层渐变是无法做到这一点的， 因此要再加一层。默认情况下，这两层渐变都会填满整个元素， 因此它们会相互覆盖。 需要让它们都缩小一些， 于是我们使用 `background-size` 让每层渐变分别只占据整个元素一半的面积。最后把 `background-repeat` 关掉， 这样每层渐变图案就不会各自平铺两次了。

```css
background: #58a;
background: linear-gradient(-45deg, transparent 15px, #58a 0) right, linear-gradient(
      45deg,
      transparent 15px,
      #655 0
    ) left;
background-size: 50% 100%;
background-repeat: no-repeat;
```

## 内联 SVG 与 border-image 方案

使用 `border-image`，并通过一个内联的 SVG 图像来产生切角效果。最后使用 `background-clip` 来解决背景色和切角边框混成一团的问题。

```css
border: 20px solid transparent;
border-image: 1 url('data:image/svg+xml,\
<svg xmlns="http://www.w3.org/2000/svg"\
width="3" height="3" fill="%2358a">\
<polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\
</svg>');
background: #58a;
background-clip: padding-box;
```

## 裁切路径方案

使用 `clip-path` 属性来对元素进行裁切。

```css
clip-path: polygon(
  20px 0,
  calc(100% - 20px) 0,
  100% 20px,
  100% calc(100% - 20px),
  calc(100% - 20px) 100%,
  20px 100%,
  0 calc(100% - 20px),
  0 20px
);
```

:::tip
未来，我们再也不需要费尽心机地动用 CSS 渐变、裁切或 SVG 来实现这个效果了。 CSS 背景与边框（第
四版）（http://dev.w3.org/csswg/css-backgrounds-4/）将引入一个全新的属性 corner-shape，可以彻
底解决这个痛点。这个属性需要跟 border-radius 配合使用，从而产生各种不同形状的切角效果，而切
角的尺寸正是 border-radius 的值。举例来说，为容器的四个角指定 15px 的斜面切角就是如此简单：

```css
border-radius: 15px;
corner-shape: bevel;
```

:::
