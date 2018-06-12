# 重置所有样式

用一个属性来重置所有样式，这个不会影响 `direction` 和 `unicode-bidi` 属性。

## HTML

```html
<div class="reset-all-styles">
  <h4>Title</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
</div>
```

## CSS

```css
.reset-all-styles {
  all: initial;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__reset-all-styles">
    <h3>Title</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
  </div>
</div>

<style>
.snippet-demo__reset-all-styles {
  all: initial;
}
</style>

## Explanation

`all` 属性允许你重置所有样式为默认值（不管是否是继承过来的）

## Browser support

<span class="snippet__support-note">⚠️ 正在兼容 MS Edge</span>

- https://caniuse.com/#feat=css-all

<!-- tags: visual -->
