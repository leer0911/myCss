# 两层边框

:::tip
实现缝边效果
:::

## 效果

<br>
<bdg-3></bdg-3>

## 思路

* 可以先设置一层常规边框， 再加上 outline（描边）属性来产生外层的边框。

* box-shadow 方案只能模拟实线边框，所以只能用 outline

* 通过 outline-offset 属性来控制它跟元素边缘之间的间距， 这个属性甚至可以接受负值。

```css
outline: 1px dashed #fff;
outline-offset: -10px;
```