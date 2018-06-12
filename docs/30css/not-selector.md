# :not 选择器

`:not` 伪类选择器对于给一组元素(除了最后一个或指定元素)添加样式时非常有用。

## HTML

```html
<ul class="css-not-selector-shortcut">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

## CSS

```css
.css-not-selector-shortcut {
  display: flex;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0 0.75rem;
}

li:not(:last-child) {
  border-right: 2px solid #d2d5e4;
}
```

## Demo

<div class="snippet-demo">
  <ul class="snippet-demo__css-not-selector-shortcut">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
  </ul>
</div>

<style>
.snippet-demo__css-not-selector-shortcut {
  display: flex;
  padding: 0;
}

.snippet-demo__css-not-selector-shortcut li {
  list-style-type: none;
  margin: 0;
  padding: 0 0.75rem;
}

.snippet-demo__css-not-selector-shortcut li:not(:last-child) {
  border-right: 2px solid #d2d5e4
}
</style>

## Explanation

`li:not(:last-child)` 给所有 `li` 元素添加样式，除了 `:last-child` 最后一个。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=css-sel3

<!-- tags: visual -->
