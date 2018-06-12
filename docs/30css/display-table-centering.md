# 表格居中法

父元素使用 `display: table` （类似 `flexbox`）来让子元素垂直水平居中

## HTML

```html
<div class="container">
  <div class="center">
    <span>Centered content</span>
  </div>
</div>
```

## CSS

```css
.container {
  border: 1px solid #333;
  height: 250px;
  width: 250px;
}

.center {
  display: table;
  height: 100%;
  width: 100%;
}

.center > span {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__container">
    <div class="snippet-demo__center">
      <span>Centered content</span>
    </div>
  </div>
</div>

<style>
.snippet-demo__container {
  border: 1px solid #333;
  height: 250px;
  width: 250px;
}
.snippet-demo__center {
  display: table;
  height: 100%;
  width: 100%;
}
.snippet-demo__center > span {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
</style>

## Explanation

1.  `display: table` 作用于 '.center' ，使得元素具备 `<table>` 特性。
2.  '.center'设置为 100% 高宽，使其占满父容器。
3.  `display: table-cell` 作用于 '.center > span' ，使得元素具备 `<td>` 特性。
4.  `text-align: center` 作用于 '.center > span' 使其水平居中。
5.  `vertical-align: middle` 作用于 '.center > span' 使其垂直居中。

最外层父元素（在这里是 `.container`） 必须有固定高宽。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#search=display%3A%20table

<!-- tags: layout -->
