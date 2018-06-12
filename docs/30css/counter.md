# 计数器

计数器本质上是由CSS维护的变量，可以通过CSS规则递增来记录它们的使用次数。

## HTML

```html
<ul>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```

## CSS

```css
ul {
  counter-reset: counter;
}

li::before {
  counter-increment: counter;
  content: counters(counter, '.') ' ';
}
```

## Demo

<div class="snippet-demo">
	<div class="snippet-demo__countable-section">
    <ul>
      <li>List item</li>
      <li>List item</li>
      <li>
        List item
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<style>
  .snippet-demo__countable-section ul {
    counter-reset: counter;
    list-style-type: none;
  }

  .snippet-demo__countable-section li::before {
    counter-increment: counter;
    content: counters(counter, '.') ' ';
  }
</style>

## Explanation

可以使用任何类型的 HTML 创建有序列表。

1. `counter-reset` 初始化计数器，值为计数器的名称。默认从0开始。也可以更改为任何特定数字。

2. `counter-increment` 用于可计数的元素中. 一旦 `counter-reset` 初始化后, 计数器便可以增加或减少。

3. `counter(name, style)` 显示计数器的值. 通常用于 `content` 属性. 这个方法接收两个参数，第一个是计数器名称，第二个可以是 `decimal` 或 `upper-roman` (默认为 `decimal`)。

4. `counters(counter, string, style)` 跟 `counter(name, style)` 类似. 但它可以接收三个参数， 第一个是计数器名称，第二个可以指定跟在 content 后面的字符串最后一个是 `decimal` 或 `upper-roman` (默认为 `decimal`)。

5. CSS计数器对于生成大纲列表特别有用，因为计数器会在子元素中自动创建。使用counters() 函数，可以在不同级别的嵌套计数器中插入分隔文本。

## Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-counters

<!-- tags: visual, other -->
