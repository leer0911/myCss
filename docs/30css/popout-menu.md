# 弹出菜单

悬浮时弹出菜单

## HTML

```html
<div class="reference">
  <div class="popout-menu">
    Popout menu
  </div>
</div>
```

## CSS

```css
.reference {
  position: relative;
}
.popout-menu {
  position: absolute;
  visibility: hidden;
  left: 100%;
}
.reference:hover > .popout-menu {
  visibility: visible;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__reference">
    <div class="snippet-demo__popout-menu">
      Popout menu
    </div>
  </div>
</div>

<style>
.snippet-demo__reference {
  background: linear-gradient(135deg, #ff4c9f, #ff7b74);
  height: 75px;
  width: 75px;
  position: relative;
  will-change: transform;
}
.snippet-demo__popout-menu {
  position: absolute;
  visibility: hidden;
  left: 100%;
  background: #333;
  color: white;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  width: 100px;
  text-align: center;
}
.snippet-demo__reference:hover > .snippet-demo__popout-menu {
  visibility: visible;
}
</style>

## Explanation

1.  `position: relative` 为子元素建立笛卡尔坐标系统。
2.  `position: absolute` 让菜单脱离文档流。
3.  `left: 100%` 让菜单向左偏移父元素 100% 的宽度。
4.  `visibility: hidden` 隐藏菜单，但可以变换 (不像 `display: none`).
5.  `.reference:hover > .popout-menu` 用于当鼠标悬浮在 `.reference` 时, 选中 `.popout-menu` 接着改变 `visibility` 为 `visible`。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

<!-- tags: interactivity -->
