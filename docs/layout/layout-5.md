# 垂直居中

:::tip
“44 年前我们就把人类送上月球了， 但现在我们仍然无法在 CSS 中实现垂直居中。”

——James Anderson
:::

## 效果

<br>
<layout-5></layout-5>

## 基于绝对定位的解决方案

[DEMO](http://dabblet.com/gist/cd12fac0e18bb27fb62d)

CSS 值与单位（第三版）（http://w3.org/TR/css-values-3/#calc） 定义了一个 calc() 函数， 它允许我们在 CSS 中直接以这种简单的算式来指定属性的值。

:::tip
别忘了在 `calc()` 函数中用空白符把 - 和 + 隔起来，否则会产生解析错误！这个看似怪异的规则是为了向前兼容：在未来，calc() 可能会允许使用标识符，而这些标识符本身可能会包含连字符，容易与减号混淆。
:::

```css
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

## 基于视口单位的解决方案

[DEMO](http://dabblet.com/gist/bf12b39d8f5da2b6e5b6)

```css
margin: 50vh auto 0;
transform: translateY(-50%);
```

## 基于 Flexbox 的解决方案

[DEMO](http://dabblet.com/gist/8aa9aa04ee57f479c513)

```css
display: flex;
min-height: 100vh;
```

:::tip
根据盒对齐模型（第三版）（http://w3.org/TR/css-align-3）的计划，在未来，对于简单的垂直居中需求，我们完全不需要动用特殊的布局模式了。因为只需要下面这行代码就可以搞定：
`align-self: center;`
:::
