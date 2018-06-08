# 闪烁效果

:::tip
有一种常见的用户体验设计手法，就是通过数次闪烁(不超过三次)来 提示用户界面中有某处发生了变化，或者用来凸显出当前链接的目标(如果 页面中某元素的 ID 与 URL 中的 #hash 相匹配，则它就是链接的目标)。在 此类场景下使用闪烁，可以有效地把用户的注意力引导到某个特定区域。
:::

## 效果

<br>
<animation-3></animation-3>

[DEMO](http://dabblet.com/gist/46fe09e5f2b97d6f282d)

## 思路

- 添加transparent效果的动画

- `animation-direction: alternate;` 

```css
@keyframes blink-smooth { to { color: transparent } } .highlight { animation: 1s blink-smooth 3; }

animation: 0.5s blink-2 6;
animation-direction: alternate;
```