# 扩大可点击区域

:::tip
如果对用户体验感兴趣， 那你很可能听说过 Fitts 法则。 它是由美国心理学家 Paul Fitts 于 1954 年首次提出的。 Fitts 法则认为， 人类移动到某个目标区域所需的最短时间是由目标距离与目标宽度之比所构成的对数函数。
:::

## 效果

<br>
<experience-2></experience-2>

[DEMO](http://dabblet.com/gist/d76ac0acc80923d47106)

## 思路

伪元素可以代表其宿主元素来响应鼠标交互，通过 top,right,left,bottom 设置为负值显示

```css
.experience-2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #333;
  cursor: pointer;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    left: -10px;
    bottom: -10px;
  }
}
```

:::tip
在可用性领域中，“自释性”是控件的一种属性， 表示它能以视觉的方式来提示我们如何与之进行交互。 举例来说， 一个按钮的立体感暗示着它可以被按下， 一个门把手的形状就在引导用户去拉动或旋动。
:::
