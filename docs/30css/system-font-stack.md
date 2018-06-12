# 系统字体

使用操作系统原生字体以获得原生应用视觉体验

## HTML

```html
<p class="system-font-stack">This text uses the system font.</p>
```

## CSS

```css
.system-font-stack {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
}
```

## Demo

<div class="snippet-demo">
  <p class="snippet-demo__system-font-stack">This text uses the system font.</p>
</div>

<style>
.snippet-demo__system-font-stack {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>

## Explanation

浏览器对字体选择具有降级处理，即从第一个字体开始逐级往下找。选用第一个找到的字体(在系统上或在 css 中定义)。

1.  `-apple-system` 用于 ios 和 macOs (非 Chrome)
2.  `BlinkMacSystemFont` 用于 macOS Chrome
3.  `Segoe UI` 用于 Windows 10
4.  `Roboto` 用于 Android
5.  `Oxygen-Sans` 用于 GNU+Linux
6.  `Ubuntu` 用于 Linux
7.  `"Helvetica Neue"` 和 `Helvetica` 用于 macOS 10.10 及以下版本 (因为有空格，所以用引号括起来)
8.  `Arial` 是所有操作系统都广泛支持的字体
9.  `sans-serif` 如果没有支持的字体，则用备用无衬线字体

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

<!-- tags: visual -->
