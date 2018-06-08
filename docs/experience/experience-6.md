# 滚动提示

:::tip
纯 css 实现滚动提示
:::

## 效果

<br>
<experience-6></experience-6>

[DEMO](http://dabblet.com/gist/20205b5fcdd834461e80)

## 思路

如果指定了 `background-image` ，那么 `background-attachment` 决定背景是在视口中固定的还是随包含它的区块滚动的。

[背景与边框（第三版](http://w3.org/TR/css3background/#-local0) 为 `background-attachment` 属性增加了一个新的关键字， 叫作 local

```css
/* 核心代码 */
background: linear-gradient(white 15px, hsla(0, 0%, 100%, 0)) 0 0 / 100% 50px, radial-gradient(
      at top,
      rgba(0, 0, 0, 0.2),
      transparent 70%
    ) 0 0 / 100% 15px,
  linear-gradient(to top, white 15px, hsla(0, 0%, 100%, 0)) bottom / 100% 50px, radial-gradient(
      at bottom,
      rgba(0, 0, 0, 0.2),
      transparent 70%
    ) bottom / 100% 15px;
background-repeat: no-repeat;
background-attachment: local, scroll, local, scroll;
```
