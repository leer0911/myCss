# 自适应的椭圆

:::tip
实现自适应的椭圆，即如果它的宽高相等，就显示一个圆，否则显示一个椭圆。
:::

## 效果

<br>
<shapes-1></shapes-1>

[DEMO](http://dabblet.com/gist/aada0b96b21ae3e45c1b)

## 思路

- `border-radius` 可以单独指定水平和垂直半径，只要用一个斜杠(/)分隔两个值即可。

- `border-radius` 不仅可以接受长度值，还可以接受百分比值。这个百分比值会基于元素的尺寸进行解析。如果要创建一个自适应的椭圆，可以把这两个半径值都设置为 `50%`，

```css
border-radius: 50%;
```

:::tip
为什么叫 border-radius？

可能有人会奇怪， border-radius 到底由何得名。这个属性并不需要边框来参与工作，似乎把它叫作
corner-radius 更贴切一些。这个名字乍听起来确实让人摸不着头脑，其实原因在于 border-radius 是
对元素的 border box 进行切圆角处理的。当元素没有边框时，可能还看不出差异；当它有边框时，则
以边框外侧的拐角作为切圆角的基准。边框内侧的圆角会稍小一些（严格来说内角半径将是 max(0,
border-radius-border-width)
:::

## 半椭圆

可以为元素的每个角指定不同的值， 而且还有两种方法可以做到这一点。

- 使用各个展开式属性

  - border-top-left-radius
  - border-top-right-radius
  - border-bottom-right-radius
  - border-bottom-left-radius

- 用空格分开的多个值指定，如果我们传给它四个值， 这四个值就会被分别从左上角开始以顺时针顺序应用到元素的各个拐角 如果我们提供的值少于四个， 则它们会以 CSS 的常规方式重复， 类似于 borderwidth 的值。 如果只提供了三个值， 则意味着第四个值与第二值相同； 如果只有两个值， 则意味着第三个值与第一个相同。

[DEMO](play.csssecrets.io/half-ellipse)
