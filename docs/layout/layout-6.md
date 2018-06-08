# 紧贴底部的页脚

:::tip
有一个具有块级样式的页脚（比如它设置了背景或阴影）， 当页面内容足够长时它一切正常， 而当页面较短时（比如错误信息页面） 就会出现问题
:::

## 效果

<br>
<layout-6></layout-6>

[DEMO](http://dabblet.com/gist/b10c3eb3b7078711a588)

```css
div {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer {
  padding: 0.5em calc(50% - 400px);
}
```

:::tip
这 个 flex 属 性 实 际 上 是 flex-grow、 flex-shrink 和 flex-basis 的 简 写 语 法。 任 何元 素 只 要 设 置 了 一 个 大 于 0 的 flex 值，就将获得可伸缩的特性； flex 的值负责控制多个可伸缩元素之间的尺寸分配比例。举例来说，在我们眼前的这个例子中， 如 果 `<main>`是 flex: 2 而`<footer>` 是 flex: 1，那么内容区块的高度将是页脚高度的两倍。如果把它们的值从 2 和 1 改为 4 和 2，结果也是一样的，因为真正起作用的是它们的数值比例。
:::
