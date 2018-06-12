# 美化文本下划线

实现一种替代 `text-decoration: underline` 的下划线，效果是超出部分不会裁剪下划线，原生实现是 `text-decoration-skip-ink: auto` ，但其对下划线的可控性不足。

## HTML

```html
<p class="pretty-text-underline">Pretty text underline without clipping descending letters.</p>
```

## CSS

```css
.pretty-text-underline {
  display: inline;
  text-shadow: 1px 1px #f5f6f9, -1px 1px #f5f6f9, -1px -1px #f5f6f9, 1px -1px
      #f5f6f9;
  background-image: linear-gradient(90deg, currentColor 100%, transparent 100%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 1px;
}
.pretty-text-underline::-moz-selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}
.pretty-text-underline::selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}
```

## Demo

<div class="snippet-demo">
  <p class="snippet-demo__pretty-text-underline">Pretty text underline without clipping descending letters.</p>
</div>

<style>
.snippet-demo__pretty-text-underline {
  display: inline;
  text-shadow: 1px 1px 0 #f5f6f9,
    -1px 1px 0 #f5f6f9,
    -1px -1px 0 #f5f6f9,
    1px -1px 0 #f5f6f9;
  background-image: linear-gradient(90deg, currentColor 100%, transparent 100%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 1px;
}

.snippet-demo__pretty-text-underline::-moz-selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}

.snippet-demo__pretty-text-underline::selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}
</style>

## Explanation

1.  `text-shadow` 用 4 个偏移值，覆盖 4x4px 区域，以确保下划线具有厚阴影，该阴影覆盖裁剪后的下划线。使用与背景色匹配的颜色。对于较大字体，请使用较大值。
2.  `background-image: linear-gradient(...)` 使用当前文本颜色 (`currentColor`) 创建一个 90 度的渐变。
3.  `background-*` 等属性将渐变大小设置为 1x1px，并延 x 轴重复。
4.  `::selection` 伪类选择器用于确保文本阴影不会影响文本选择。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=css-textshadow
- https://caniuse.com/#feat=css-gradients

<!-- tags: visual -->
