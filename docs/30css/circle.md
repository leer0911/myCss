# 圆形

用纯 css 实现圆形。

## HTML

```html
<div class="circle"></div>
```

## CSS

```css
.circle {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #333;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__circle"></div>
</div>

<style>
.snippet-demo__circle {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #333;
}
</style>

## Explanation

`border-radius: 50%` curves the borders of an element to create a circle.

由于圆的半径相同, 所以 `width` 和 `height` 必须一样，不同将生成椭圆。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=border-radius

<!-- tags: visual -->
