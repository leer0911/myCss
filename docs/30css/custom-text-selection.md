# 自定义文本选择

改变文本选择的样式

## HTML

```html
<p class="custom-text-selection">Select some of this text.</p>
```

## CSS

```css
::selection {
  background: aquamarine;
  color: black;
}
.custom-text-selection::selection {
  background: deeppink;
  color: white;
}
```

## Demo

<div class="snippet-demo">
  <p class="snippet-demo__custom-text-selection">Select some of this text.</p>
</div>

<style>
.snippet-demo__custom-text-selection::selection {
  background: deeppink;
  color: white;
}
.snippet-demo__custom-text-selection::-moz-selection {
  background: deeppink;
  color: white;
}
</style>

## Explanation

`::selection` 定义伪选择器，以便在选定元素时设置选择中文本的样式。请注意，如果不组合任何其他选择器，则样式将作用于根元素下所有可选元素。

## Browser support

<span class="snippet__support-note">⚠️ 并非规范，需额外添加浏览器前缀来获得兼容性</span>

* https://caniuse.com/#feat=css-selection

<!-- tags: visual -->
