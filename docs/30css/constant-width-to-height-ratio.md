# 保持等高宽比

给定可变宽度，让高度按比例响应式变化（即，保证元素宽高比例不变）

## HTML

```html
<div class="constant-width-to-height-ratio"></div>
```

## CSS

```css
.constant-width-to-height-ratio {
  background: #333;
  width: 50%;
}
.constant-width-to-height-ratio::before {
  content: '';
  padding-top: 100%;
  float: left;
}
.constant-width-to-height-ratio::after {
  content: '';
  display: block;
  clear: both;
}
```

## Demo

改变浏览器窗口大小观察元素宽高比例是否一致

<div class="snippet-demo">
  <div class="snippet-demo__constant-width-to-height-ratio"></div>
</div>

<style>
.snippet-demo__constant-width-to-height-ratio {
  background: #333;
  width: 50%;
}
.snippet-demo__constant-width-to-height-ratio::before {
  content: '';
  padding-top: 100%;
  float: left;
}
.snippet-demo__constant-width-to-height-ratio::after {
  content: '';
  display: block;
  clear: both;
}
</style>

## Explanation

设置 `padding-top` 让 `::before` 伪元素的高度等于宽度的比率。 设置为 `100%` 高度等于宽度的 `100%` 相当于一个响应式的正方形。

此方法还运行内容放置在元素内部。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

<!-- tags: layout -->
