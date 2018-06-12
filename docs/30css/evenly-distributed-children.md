# 均匀分布子元素

使父元素下的子元素均匀分布

## HTML

```html
<div class="evenly-distributed-children">
  <p>Item1</p>
  <p>Item2</p>
  <p>Item3</p>
</div>
```

## CSS

```css
.evenly-distributed-children {
  display: flex;
  justify-content: space-between;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__evenly-distributed-children">
    <p>Item1</p>
    <p>Item2</p>
    <p>Item3</p>
  </div>
</div>

<style>
.snippet-demo__evenly-distributed-children {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>

## Explanation

1.  `display: flex` 开启 flexbox 布局
2.  `justify-content: space-between` 均匀排列每个元素首个元素放置于起点，末尾元素放置于终点

或者, 用 `justify-content: space-around` 均匀排列每个元素每个元素周围分配相同的空间

## Browser support

<span class="snippet__support-note">⚠️ Needs prefixes for full support.</span>

- https://caniuse.com/#feat=flexbox

<!-- tags: layout -->
