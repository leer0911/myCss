# 打字动画

## 效果

<br>
<animation-4></animation-4>

[DEMO](http://dabblet.com/gist/b04ab9f41084b0a66960)

## 思路

核心思路就是让容器的宽度成为动画的主体:把所有文本包裹在这个容 器中，然后让它的宽度从 0 开始以步进动画的方式、一个字一个字地扩张到 它应有的宽度。你可能已经察觉到了，这个方法是有局限的:它并不适用于 多行文本 11 。然而幸运的是，在绝大多数情况下，我们把这种效果应用在类似 标题的单行文本上。

边框模拟闪烁光标

```css
  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes caret {
    50% {
      border-right-color: transparent;
    }
  }
  
border-right: 0.05em solid;
animation: typing 8s steps(15), caret 1s steps(1) infinite;
```