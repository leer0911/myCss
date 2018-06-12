# 渐变文本

让文本渐变色

## HTML

```html
<p class="gradient-text">Gradient text</p>
```

## CSS

```css
.gradient-text {
  background: -webkit-linear-gradient(pink, red);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
```

## Demo

<div class="snippet-demo">
  <p class="snippet-demo__gradient-text">
    Gradient text
  </p>
</div>

<style>
.snippet-demo__gradient-text {
  background: -webkit-linear-gradient(pink, red);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}
</style>

## Explanation

1.  `background: -webkit-linear-gradient(...)` 设置文本元素渐变背景。
2.  `webkit-text-fill-color: transparent` 让文本透明。
3.  `webkit-background-clip: text` 用文本剪辑背景，使得渐变背景作为颜色填充文本。

## Browser support

<span class="snippet__support-note">⚠️ 使用非标准属性。</span>

- https://caniuse.com/#feat=text-stroke

<!-- tags: visual -->
