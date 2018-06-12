# 高度过渡

使高度未知的元素的高度从 `0` 过渡到 `auto`。

## HTML

```html
<div class="trigger">
  Hover me to see a height transition.
  <div class="el">content</div>
</div>
```

## CSS

```css
.el {
  transition: max-height 0.5s;
  overflow: hidden;
  max-height: 0;
}

.trigger:hover > .el {
  max-height: var(--max-height);
}
```

## JavaScript

```js
var el = document.querySelector('.el');
var height = el.scrollHeight;
el.style.setProperty('--max-height', height + 'px');
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__height-transition">
    Hover me to see a height transition.
    <div class="snippet-demo__height-transition__el">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue placerat nunc a volutpat. Etiam placerat libero porttitor purus facilisis vehicula. Mauris risus mauris, varius ac consequat eget, iaculis non enim. Proin ut nunc ac massa iaculis sodales id mattis enim. Cras non diam ac quam pharetra fermentum vel ac nulla. Suspendisse ligula urna, porta non lobortis non, lobortis vel velit. Fusce lectus justo, aliquet eu fringilla auctor, sodales eu orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </div>
  </div>
</div>

<style>

.snippet-demo__height-transition__el {
  transition: max-height 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  max-height: 0;
}

.snippet-demo__height-transition:hover > .snippet-demo__height-transition__el {
  max-height: var(--max-height);
}
</style>

<script>
;(function () {
  var el = document.querySelector('.snippet-demo__height-transition__el')
  var height = el.scrollHeight
  el.style.setProperty('--max-height', height + 'px')
})()
</script>

## Explanation

### CSS

1.  `transition: max-height: 0.5s cubic-bezier(...)` 当 `max-height` 改变时会有 0.5 秒的过渡效果,用的是 `ease-out-quint` 时间函数。
2.  `overflow: hidden` 防止隐藏元素的内容溢出其容器。
3.  `max-height: 0` 默认初始高度为零。
4.  `.target:hover > .el` 在父元素上悬浮时 `.el` 会使用 JavaScript 生成的 `--max-height` 变量。

### JavaScript

1.  `el.scrollHeight` 元素的动态高度，包括溢出的内容。
2.  `el.style.setProperty(...)` 设置 `--max-height` CSS 变量，用于定义悬浮时元素的 `max-height` , 这样就可以得到高度从 0 过渡到内容高度的效果。

## Browser Support

<div class="snippet__requires-javascript">需要用到 JavaScript</div>
<span class="snippet__support-note">
  ⚠️ 由于每个动画帧会引起回流，如果元素下方有大量的元素高度发生变化，则回流将会滞后。
</span>

- https://caniuse.com/#feat=css-variables
- https://caniuse.com/#feat=css-transitions

<!-- tags: animation -->
