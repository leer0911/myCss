# 缓动效果

## 弹跳动画

<br>
<animation-1></animation-1>

[DEMO](http://dabblet.com/gist/1b37089310d0a5a2d8e6)

CSS 提供了一个 `cubic-bezier()` 函数，允许我们指定自定义的调速函数。它接受四个参数，分别代表两个控 制锚点的坐标值，我们通过这两个控制锚点来指定想要的贝塞尔曲线。语 法形式是这样的:`cubic-bezier(x1, y1, x2, y2)`，其中 (x1, y1) 表示第一 个控制锚点的坐标，而 (x2, y2) 是第二个。曲线片断的两个端点分别固定在 (0,0) 和 (1,1)，前者是整个过渡的起点(时间进度为零，动画进度为零)， 后者是终点(时间进度为 100%，动画进度为 100%)。

```css
@keyframes bounce {
  60%,
  80%,
  to {
    transform: translateY(400px);
    animation-timing-function: ease;
  }
  70% {
    transform: translateY(300px);
  }
  90% {
    transform: translateY(360px);
  }
}
.ball {
    animation: bounce 2s cubic-bezier(0.1, 0.25, 1, 0.25) forwards;
}
```

## 弹跳过渡

<animation-1-1></animation-1-1>

[DEMO](http://dabblet.com/gist/6cf33228089efef8a5ac)

```css
input:not(:focus) + .callout:not(:hover) {
    transform: scale(0);
    transition: 0.25s transform;
}

.callout {
    transition: 0.5s cubic-bezier(0.25, 0.1, 0.3, 1.5) transform;
    transform-origin: 1.4em -0.4em;
}
```

:::tip
说到把过渡的作用范围限制在特定属性上，你甚至可以通过transition-delay属性把各个属性的过渡过程排成列队，这个属性的值实际上就是transition简写属性中的第二个时间值。举例来说，如果width和height都需要过渡效果，而且你希望高度先变化然后宽度再变化(很多弹出框脚本库已经把这种动画效果推广开来了)，就可以这样写:transition:.5s height, .8s .5s width;(也就是说，让width过渡的延时正好等于height过渡的持续时间)。
:::