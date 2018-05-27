# 边框内圆角

:::tip
给容器内侧添加圆角效果
:::

## 效果

<br>
<bdg-5></bdg-5>

[DEMO](http://dabblet.com/gist/170fe436f290083cc24c)

## 思路

* `border-radius` 实现圆角

* `outline` 描边并不会跟着元素的圆角走，所以会有空隙。但 `box-shadow` 会。因此，如果我们 把这两者叠加到一起，box-shadow 会刚好填补描边和容器圆角之间的空隙

```css
box-shadow: 0 0 0 10px #333;
outline: 10px solid #333;
border-radius: 10px;
```

:::warning
为 box-shadow 属性指定的扩张值并不一定等于 outlint 描边的宽度，我们只需要指定一个足够填补“空隙”的扩张值就可以了。事实上，指定一个等于描边宽度的扩张值在某些浏览器中可能会得到渲染异常，因此我推荐一个稍小些的值。

当我们的圆角半径是 r 时，从圆 角的圆心到描边顶角的长度就是 r&radic;2，这意味着投影的扩张值不 能小于 r&radic;2 - r = (&radic;2 − 1)r 
:::

