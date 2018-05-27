# 半透明边框

:::tip
实现半透明边框。
:::

## 效果

<br>
<bdg-1></bdg-1>

[DEMO](http://dabblet.com/gist/012289cc14106a1bd7a5)

## 思路

* 透明颜色可使用 `rgba` 或 `hsla`

* 通过 `background-clip` 修改背景裁剪位置，默认是 `border-box`。

```css
border: 10px solid hsla(0, 0%, 100%, 0.5);
background-clip: padding-box;
```