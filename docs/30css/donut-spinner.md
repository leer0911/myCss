# Donut spinner 加载效果

创建 donut spinner 加载效果

## HTML

```html
<div class="donut"></div>
```

## CSS

```css
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.donut {
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__donut-spinner"></div>
</div>

<style>
@keyframes snippet-demo__donut-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg);}
}
.snippet-demo__donut-spinner {
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: snippet-demo__donut-spin 1.2s linear infinite;
}
</style>

## Explanation

通过给元素边框设置透明，除了作为加载效果的那一侧。然后用 `animation` 来旋转元素。

## Browser support

<span class="snippet__support-note">⚠️ 需要添加浏览器前缀来获取兼容性。</span>

- https://caniuse.com/#feat=css-animation
- https://caniuse.com/#feat=transforms2d

<!-- tags: animation -->
