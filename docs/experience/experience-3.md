# 自定义复选框

:::tip
如果对用户体验感兴趣， 那你很可能听说过 Fitts 法则。 它是由美国心理学家 Paul Fitts 于 1954 年首次提出的。 Fitts 法则认为， 人类移动到某个目标区域所需的最短时间是由目标距离与目标宽度之比所构成的对数函数。
:::

## 效果

<br>
<experience-3></experience-3>

[DEMO](http://dabblet.com/gist/e269f10328615254e29e)

## 思路

在选择符（第三版）（http://w3.org/TR/css3-selectors） 中， 我们得到了一个新的伪类 :checked。 这个伪类只在复选框被勾选时才会匹配， 不论这个勾选状态是由用户交互触发， 还是由脚本触发。

可以基于复选框的勾选状态借助组合选择符来给其他元素设置样式

```css
input[type='checkbox'] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

input[type='checkbox'] + label::before {
  content: '\a0';
  display: inline-block;
  vertical-align: 0.2em;
  width: 0.8em;
  height: 0.8em;
  margin-right: 0.2em;
  border-radius: 0.2em;
  background: silver;
  text-indent: 0.15em;
  line-height: 0.65;
}
```

:::tip
你是否还在为伪类选择符 :checked 和属性选择符[checked] 之间的区别感到疑惑？后者是不会根据用户的交互行为进行更新的，因为用户的交互并不会影响到 HTML 标签上的属性。
:::
