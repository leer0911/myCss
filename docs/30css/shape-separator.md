# 形状分隔

用 SVG 形状分隔两个不用的块，与标准水平分隔相比，可以创建更有趣的视觉外观。

## HTML

```html
<div class="shape-separator"></div>
```

## CSS

```css
.shape-separator {
  position: relative;
  height: 48px;
  background: #333;
}
.shape-separator::after {
  content: '';
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEyIDEybDEyIDEySDBsMTItMTJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
  position: absolute;
  width: 100%;
  height: 24px;
  bottom: 0;
}
```

## Demo

<div class="snippet-demo is-distinct">
  <div class="snippet-demo__shape-separator"></div>
</div>

<style>
.snippet-demo__shape-separator {
  position: relative;
  height: 48px;
  margin: -0.75rem -1.25rem;
}
.snippet-demo__shape-separator::after {
  content: '';
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEyIDEybDEyIDEySDBsMTItMTJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
  position: absolute;
  width: 100%;
  height: 24px;
  bottom: 0;
}
</style>

## Explanation

1.  `position: relative` 为伪元素创建笛卡尔坐标系统。
2.  `::after` 定义一个伪元素。
3.  `background-image: url(...)` 添加 svg 形状 (base64 格式的 24x24 三角形) 作为伪元素的背景图，默认情况下重复，且必须与要分隔的块颜色相同。
4.  `position: absolute` 使伪元素脱离正常文档流，并且使其相对于父元素定位。
5.  `width: 100%` 跟父元素同宽。
6.  `height: 24px` 跟形状相同的高度。
7.  `bottom: 0` 伪元素位于父级的底部。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=svg

<!-- tags: visual -->
