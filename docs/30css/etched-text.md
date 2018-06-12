# 雕刻文本效果

实现文字雕刻进背景的效果

## HTML

```html
<p class="etched-text">I appear etched into the background.</p>
```

## CSS

```css
.etched-text {
  text-shadow: 0 2px white;
  font-size: 1.5rem;
  font-weight: bold;
  color: #b8bec5;
}
```

## Demo

<div class="snippet-demo">
  <p class="snippet-demo__etched-text">I appear etched into the background.</p>
</div>

<style>
.snippet-demo__etched-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #b8bec5;
  text-shadow: 0 2px 0 white;
}
</style>

## Explanation

`text-shadow: 0 2px white` 相对于原点生成一个水平偏移 `0px` 垂直偏移 `2px` 的白色阴影。

背景色必须比阴影深色才会有效果。

文本颜色稍微淡一点，这样看起来才像是刻在背景上的。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=css-textshadow

<!-- tags: visual -->
