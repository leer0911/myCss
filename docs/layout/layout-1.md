# 自适应内部元素

## 效果

<br>
<layout-1></layout-1>

[DEMO](http://dabblet.com/gist/82eb1575806f6eff9c37)

## 思路

CSS 内部与外部尺寸模型（第三版）（http://w3.org/TR/css3-sizing） 是一个相对较新的规范， 它为 width 和 height 属性定义了一些新的关键字，其中最有用的应该就是 min-content 了。 这个关键字将解析为这个容器内部最大的不可断行元素的宽度（即最宽的单词、 图片或具有固定宽度的盒元素）1①。

:::tip
其他的值还有 max-content， 它的行为类似于我们在前面看到的 display: inlineblock； 而 fit-content 的行为与浮动元素是相同的（和 min-content 的效果通常一致，但也有例外）
:::
