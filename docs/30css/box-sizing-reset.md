# 重置盒模型

重置盒模型，让 `width` 和 `height` 不受 `border` 和 `padding` 的影响。

## CSS

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__box-sizing-reset">Demo</div>
</div>

<style>
.snippet-demo__box-sizing-reset {
  box-sizing: border-box;
  width: 200px;
  padding: 1.5em;
  color: #7983ff;
  font-family: sans-serif;
  background-color: white;
  border: 5px solid;
}
</style>

## Explanation

1. `box-sizing: border-box` 可以让 `padding` 或 `border` 不影响元素的 `width` 或 `height`。
2. `box-sizing: inherit` 让元素继承父元素的 `box-sizing` 规则。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css3-boxsizing

<!-- tags: layout -->
