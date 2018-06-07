# 不规则投影

:::tip
通过 css 美化过的元素无法完美地渲染 box-shadow，实现不规则投影
:::

## 效果

<br>
<effects-2></effects-2>

[DEMO](play.csssecrets.io/drop-shadow)

## 思路

使用 `drop-shadow()`即可， 滤镜可接受的参数基本上跟 box-shadow 属性是一样的， 但不包括扩张半径， 不包括 inset 关键字， 也不支持逗号分割的多层投影语法。

```css
filter: drop-shadow(0.1em 0.1em 0.1em rgba(0, 0, 0, 0.5));
```
