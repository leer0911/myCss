# Transform 居中

用 `position: absolute` 和 `transform: translate()` 实现垂直水平居中 (作为 `flexbox` 或 `display: table` 的替换方法). 类似于 `flexbox` ，这种方法不需要知道元素的高宽，所以非常适合响应式布局。

## HTML

```html
<div class="parent">
  <div class="child">Centered content</div>
</div>
```

## CSS

```css
.parent {
  border: 1px solid #333;
  height: 250px;
  position: relative;
  width: 250px;
}

.child {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__parent">
    <div class="snippet-demo__child">Centered content</div>
  </div>
</div>

<style>
.snippet-demo__parent {
  border: 1px solid #333;
  height: 250px;
  position: relative;
  width: 250px;
}
.snippet-demo__child {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

## Explanation

1.  `position: absolute` 让子元素基于容器布局
2.  `left: 50%` 和 `top: 50%` 让子元素相对父容器左上角偏移 50%
3.  `transform: translate(-50%, -50%)` 让子元素方向偏移自身宽高，刚好垂直水平居中。

注: 适用于父元素高宽固定的情况。

## Browser support

<span class="snippet__support-note">⚠️ 需要浏览器前缀来获取兼容性。</span>

- https://caniuse.com/#search=transform

<!-- tags: layout -->
