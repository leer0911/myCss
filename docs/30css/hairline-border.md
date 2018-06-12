# 细线边框

设置 1 物理像素的边框，让其看起来非常精致。

## HTML

```html
<div class="hairline-border">text</div>
```

## CSS

```css
.hairline-border {
  box-shadow: 0 0 0 1px;
}

@media (min-resolution: 2dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.5px;
  }
}

@media (min-resolution: 3dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.33333333px;
  }
}

@media (min-resolution: 4dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.25px;
  }
}
```

## Demo

<div class="snippet-demo">
  <p class="snippet-demo__hairline-border">Text with a hairline border around it.</p>
</div>

<style>
.snippet-demo__hairline-border {
  box-shadow: 0 0 0 1px;
}

@media (min-resolution: 2dppx) {
  .snippet-demo__hairline-border {
    box-shadow: 0 0 0 0.5px;
  }
}

@media (min-resolution: 3dppx) {
  .snippet-demo__hairline-border {
    box-shadow: 0 0 0 0.33333333px;
  }
}

@media (min-resolution: 4dppx) {
  .snippet-demo__hairline-border {
    box-shadow: 0 0 0 0.25px;
  }
}
</style>

## Explanation

1.  `box-shadow`, 来实现伪边框效果。
2.  使用 `@media (min-resolution: ...)` 解决分辨率问题 (`1dppx` 等于 96 DPI),将 `box-shadow` 设置为 `1 / dppx`。

## Browser Support

<span class="snippet__support-note">⚠️ 需要用 JavaScript 检测设备，以使用特定备用语法</span>

- https://caniuse.com/#feat=css-boxshadow
- https://caniuse.com/#feat=css-media-resolution

<hr>

谷歌不支持边框子像素，Safari 不支持 `box-shadow` 上的子像素。Firefox 均支持。

<!-- tags: visual -->
