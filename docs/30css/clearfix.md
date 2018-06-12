# 清除浮动

清除子元素浮动

注: 只有使用浮动布局时才有效，现代了浏览器建议使用弹性布局或栅格布局。

## HTML

```html
<div class="clearfix">
  <div class="floated">float a</div>
  <div class="floated">float b</div>
  <div class="floated">float c</div>
</div>
```

## CSS

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

.floated {
  float: left;
}
```

## Demo

<div class="snippet-demo">
  <div class="snippet-demo__clearfix">
    <div class="snippet-demo__floated">float a</div>
    <div class="snippet-demo__floated">float b</div>
    <div class="snippet-demo__floated">float c</div>
  </div>
</div>

<style>
.snippet-demo__clearfix::after {
  content: '';
  display: block;
  clear: both;
}

.snippet-demo__floated {
  float: left;
}
</style>

## Explanation

1. `.clearfix::after` 定义伪元素。
2. `content: ''` 允许为元素影响布局。
3. `clear: both` 清除两侧浮动，让元素的两侧不能与块级上下文中已浮动元素相邻。

## Browser support

<span class="snippet__support-note">⚠️ 这段代码正常运行需要在容器内所有子元素都浮动的情况下，并且在同一格式上下文中已清除浮动的容器前面没有浮动元素。</span>

## clear

clear CSS 属性指定一个元素是否可以在它之前的浮动元素旁边，或者必须向下移动(清除浮动) 在它的下面。clear 属性适用于浮动和非浮动元素。

当应用于非浮动块时，它将非浮动块的边框边界移动到所有相关浮动元素外边界的下方。这个行为作用时会导致margin collapsing不起作用。

当应用于浮动元素时，它将元素的外边界移动到所有相关的浮动元素外边界的下方。这会影响后面浮动元素的布局，后面的浮动元素的位置无法高于它之前的元素。

要被清除的相关浮动元素指 在相同块级格式化上下文中的前置浮动。

注释:如果你想要一个元素将所有浮动元素包含在内，你既可以将这个容器设置为浮动，又可以通过 ::after 伪元素设置clear属性作为替代。

## margin collapsing

块级元素的上外边距和下外边距有时会合并（或折叠）为一个外边距，其大小取其中的最大者，这种行为称为外边距折叠（margin collapsing），有时也翻译为外边距合并。注意浮动元素和绝对定位元素的外边距不会折叠（因为这里触发了 块格式化上下文 Block Formatting Context， BFC）。

下面列出了会发生外边距折叠的三种基本情况：

### 相邻元素之间

毗邻的两个元素之间的外边距会折叠（除非后一个元素需要清除之前的浮动）。

### 父元素与其第一个或最后一个子元素之间

如果在父元素与其第一个子元素之间不存在边框、内边距、行内内容，也没有创建块格式化上下文、或者清除浮动将两者的 margin-top 分开；或者在父元素与其最后一个子元素之间不存在边框、内边距、行内内容、height、min-height、max-height将两者的 margin-bottom 分开，那么这两对外边距之间会产生折叠。此时子元素的外边距会“溢出”到父元素的外面。

### 空的块级元素

如果一个块级元素中不包含任何内容，并且在其 margin-top 与 margin-bottom 之间没有边框、内边距、行内内容、height、min-height 将两者分开，则该元素的上下外边距会折叠。

一些需要注意的地方：

- 上述情况的组合会产生更复杂的外边距折叠。

- 即使某一外边距为0，这些规则仍然适用。因此就算父元素的外边距是0，第一个或最后一个子元素的外边距仍然会“溢出”到父元素的外面。

- 如果参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和。

- 如果所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值。这一规则适用于相邻元素和嵌套元素。

## BFC

块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

下列方式会创建块格式化上下文：

- 根元素或包含根元素的元素
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素（元素的 display 为 inline-block）
- 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
- 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
- overflow 值不为 visible 的块元素
- display 值为 flow-root 的元素
- contain 值为 layout、content或 strict 的元素
- 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
- 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
- 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
- column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

创建了块格式化上下文的元素中的所有内容都会被包含到该BFC中。

块格式化上下文对浮动定位（参见 float）与清除浮动（参见 clear）都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（Margin collapsing）也只会发生在属于同一BFC的块级元素之间。
