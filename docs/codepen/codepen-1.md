# 文本切换

## 效果

<br>

<codepen-1></codepen-1>

## 思路

轮播等都可以通过 translate 平移来实现切换，通过百分比控制更优。`translate3d` 具有开启硬件加速的功能，性能更优。

```css
.list {
  animation: change 10s infinite;
}

@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}
```
