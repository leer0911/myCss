# 状态平滑的动画

:::tip
不是所有动画都是在页面一加载好就立即播放的。更常见的情况是， 我们想通过动画来响应用户的动作，比如用户的鼠标悬停在某个元素上 (:hover)，或者按住鼠标键(:active)，等等。在这种场景下，我们将无 法控制动画实际的循环次数，因为用户的动作会随时中断动画，而此时动画 不可能刚好插放到我们事先指定的循环次数。举例来说，用户的鼠标可能会 触发一个华丽的 :hover 动画，而在动画还没有播完的时候，鼠标就从元素
上移走了。在这种情况下，你觉得动画会如何收场呢?
:::

## 效果

<br>
<animation-5></animation-5>

[DEMO](http://dabblet.com/gist/b7b53efcc2f933ca6d54)

## 思路

有一个属性正好是为暂停动画的需求专门设计的: animation-play-state !

```css
@keyframes panoramic {
    to { background-position: 100% 0; }
}
.panoramic {
    width: 150px; height: 150px;
    background: url("img/naxos-greece.jpg"); background-size: auto 100%;
    animation: panoramic 10s linear infinite alternate; animation-play-state: paused;
}
.panoramic:hover, .panoramic:focus { 
    animation-play-state: running;
}
```