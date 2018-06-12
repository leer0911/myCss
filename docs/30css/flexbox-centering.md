# 弹性居中

用 `flexbox` 实现水平垂直居中

## HTML

```html
<div class="flexbox-centering">
  <div class="child">Centered content.</div>
</div>
```

## CSS

```css
.flexbox-centering {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__flexbox-centering">
    <p class="snippet-demo__flexbox-centering__child">Centered content.</p>
  </div>
</div>

<style>
.snippet-demo__flexbox-centering {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>

## Explanation

1.  `display: flex` 开启 flexbox 布局
2.  `justify-content: center` 水平居中
3.  `align-items: center` 垂直居中

## Browser support

<span class="snippet__support-note">⚠️ Needs prefixes for full support.</span>

- https://caniuse.com/#feat=flexbox

<!-- tags: layout -->
