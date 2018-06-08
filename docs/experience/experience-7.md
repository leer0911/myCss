# 交互式的图片对比控件

:::tip
纯 css 交互式的图片对比控件
:::

## 效果

<br>
<experience-7></experience-7>

[DEMO](http://dabblet.com/gist/20205b5fcdd834461e80)

## 思路

关键代码在于 `resize: horizontal;`在利用伪元素添加鼠标自释性，即改变大小的提示。

```css
.image-slider > div {
  resize: horizontal;
  /* ...其他样式 */
}

.image-slider > div:before {
  cursor: ew-resize;
  /* ...其他样式 */
}
```
