# 截断文本

当文本在某行中过长时，用 `...` 截断。

## HTML

```html
<p class="truncate-text">If I exceed one line's width, I will be truncated.</p>
```

## CSS

```css
.truncate-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 200px;
}
```

## Demo

<div class="snippet-demo">
  <p class="snippet-demo__truncate-text">
    This text will be truncated if it exceeds 200px in width.
  </p>
</div>

<style>
.snippet-demo__truncate-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 200px;
  margin: 0;
}
</style>

## Explanation

1.  `overflow: hidden` 防止文本溢出（比如块级元素，100%宽度和自动高度）
2.  `white-space: nowrap` 防止文本高度超过一行。
3.  `text-overflow: ellipsis` 当文本超出维度时以省略号结尾。
4.  `width: 200px;` 设定元素超出什么宽度时采用省略号。

## Browser support

<span class="snippet__support-note">⚠️ 只对单行元素有效。</span>

- https://caniuse.com/#feat=text-overflow

<!-- tags: layout -->
