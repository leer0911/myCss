# 网格居中

用 `grid` 实现水平垂直居中。

## HTML

```html
<div class="grid-centering">
  <div class="child">Centered content.</div>
</div>
```

## CSS

```css
.grid-centering {
  display: grid;
  justify-content: center;
  align-items: center;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__grid-centering">
    <p class="snippet-demo__grid-centering__child">Centered content.</p>
  </div>
</div>

<style>
.snippet-demo__grid-centering {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>

## Explanation

1.  `display: grid` 开启网格布局。
2.  `justify-content: center` 水平居中。
3.  `align-items: center` 垂直居中。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=css-grid

<!-- tags: layout -->
