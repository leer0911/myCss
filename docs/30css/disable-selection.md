# 禁用选择

让内容不可选

## HTML

```html
<p>You can select me.</p>
<p class="unselectable">You can't select me!</p>
```

## CSS

```css
.unselectable {
  user-select: none;
}
```

## Demo

<div class="snippet-demo">
  <p>You can select me.</p>
  <p class="snippet-demo__disable-selection">You can't select me!</p>
</div>

<style>
.snippet-demo__disable-selection {
  user-select: none;
}
</style>

## Explanation

`user-select: none` 定义文本不能选中。

## Browser support

<span class="snippet__support-note">⚠️ 需要添加浏览器前缀来获取兼容性。</span>
<span class="snippet__support-note">⚠️ 并不能完全阻止用户复制内容。</span>

* https://caniuse.com/#feat=user-select-none

<!-- tags: interactivity -->
