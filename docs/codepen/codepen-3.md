# 轮播

## 效果

<br>

<codepen-3></codepen-3>

## 思路

图片的切换使用 `margin-left` 来实现，此处为了用 `translate` 性能会更好。

```css
@keyframes slide1 {
  0% {
    margin-left: 0;
  }
  23% {
    margin-left: 0;
  }
  33% {
    margin-left: -600px;
  }
  56% {
    margin-left: -600px;
  }
  66% {
    margin-left: -1200px;
  }
  90% {
    margin-left: -1200px;
  }
  100% {
    margin-left: 0;
  }
}
```

点击按钮用 input 的 `:checked` 状态，还需指定三种动画，轮播多了略麻烦...

```css
#l01:checked ~ #wrap #slider {
  animation-name: slide1;
}
```
