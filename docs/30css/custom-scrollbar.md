# 自定义滚动条

在WebKit平台上自定义文档或元素的滚动条样式。

## HTML

```html
<div class="custom-scrollbar">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
</div>
```

## CSS

```css
/* Document scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

/* Scrollable element */
.some-element::webkit-scrollbar {
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__custom-scrollbar">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?
    </p>
  </div>
</div>

<style>
.snippet-demo__custom-scrollbar {
  height: 100px;
  overflow: auto;
}

.snippet-demo__custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.snippet-demo__custom-scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.snippet-demo__custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>

## Explanation

1. `::-webkit-scrollbar` 整个滚动条。
2. `::-webkit-scrollbar-track` 滚动条轨道。
3. `::-webkit-scrollbar-thumb` 滚动条滑块。

访问 [WebKit Blog](https://webkit.org/blog/363/styling-scrollbars/) 获取更多关于滚动条伪元素的知识。

## Browser support

<span class="snippet__support-note">⚠️ 滚动条样式在各浏览器存在兼容差异</span>

* https://caniuse.com/#feat=css-scrollbar

<!-- tags: visual -->

## 其他

你可以使用以下伪元素选择器去修改各式webkit浏览器的滚动条样式:

- ::-webkit-scrollbar — 整个滚动条.
- ::-webkit-scrollbar-button — 滚动条上的按钮 (上下箭头).
- ::-webkit-scrollbar-thumb — 滚动条上的滚动滑块.
- ::-webkit-scrollbar-track — 滚动条轨道.
- ::-webkit-scrollbar-track-piece — 滚动条没有滑块的轨道部分.
- ::-webkit-scrollbar-corner — 当同时有垂直滚动条和水平滚动条时交汇的部分.
- ::-webkit-resizer — 某些元素的corner部分的部分样式(例:textarea的可拖动按钮).
