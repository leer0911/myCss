# 插入换行

:::tip
实现插入换行
:::

## 效果

<br>
<types-2></types-2>

[DEMO](http://dabblet.com/gist/7eb242f4e8f078cadbca)

## 思路

伪元素

```css
dd + dt::before {
  content: '\A';
  white-space: pre;
}
```

