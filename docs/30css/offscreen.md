# Offscreen

一种隐藏 DOM 可见性和位置的优雅方式，JavaScript 和屏幕阅读器仍然可以获取该元素。所以这种方法非常适合提高可访问性([ADA](https://adata.org/learn-about-ada))，比如一个隐藏的阅读更多的详情内容。可用于替换 `display: none` 这种屏幕阅读器无法获取隐藏元素的方法或者 `visibility: hidden` 这种仍然占用 DOM 空间的方法。

## HTML

```html
<a class="button" href="http://pantswebsite.com">
  Learn More
  <span class="offscreen"> about pants</span>
</a>
```

## CSS

```css
.offscreen {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

## Demo

<div class="snippet-demo">
  <a class="button" href="javascript:;">
    Learn More
    <span class="offscreen"> about pants</span>
  </a>
</div>

<style>
.snippet-demo__button {
  -webkit-appearance: none;
  appearance: none;
  background-color: #7983ff;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: sans-serif;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
  width: auto;
}
.snippet-demo__button:hover { background-color: #717aef; }
.snippet-demo__offscreen {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
</style>

## Explanation

1.  不要边框。
2.  用 `clip` 隐藏元素。
3.  设置元素高宽为 1px。
4.  使用 `margin: -1px`。
5.  对元素里的内容超出隐藏。
6.  不要内边距。
7.  使用绝对定位，这样就不会占用 DOM 空间了

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

( `clip` 技术过时了, `clip-path` 浏览器兼容性不佳。)

- https://caniuse.com/#search=clip

<!-- tags: layout, visual -->
