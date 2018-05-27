# 灵活的背景定位

:::tip
让背景图在右下角显示
:::

<br>
<bdg-4></bdg-4>

[DEMO](http://dabblet.com/gist/0f226e63595d1bef88cb)

## background-position 方案

* `background-position` 属性已经得到扩展，它允许我们指定背景图片距离任意角的偏移量， 只要我们在偏移量前面指定关键字。

* 在不支持 `background-position` 扩展语法的浏览器中， 把老套的 bottom right 定位值写进 background 的简写属性中

```css
background: url(code-pirate.svg) no-repeat bottom right #58a;
background-position: right 20px bottom 10px;
```

## background-origin 方案

:::tip
让背景图偏移量与容器的内边距一致。
:::

不够优雅的方式：(每次改动内边距的值时， 我们都需要在三个地方更新这个值！)

```css
padding: 10px;
background: url(code-pirate.svg) no-repeat #58a;
background-position: right 10px bottom 10px;
```

默认情况下， `background-position` 是以 padding box 为准的， 这样边框才不会遮住背景图片。

把`background-origin`的值改成 `content-box`（参见下面的代码）， 我们在 `background-position` 属性中使用的边角关键字将会以内容区的边缘作为基准（也就是说， 此时背景图片距离边角的偏移量就跟内边距保持一致了）

```css
padding: 10px;
background: url('code-pirate.svg') no-repeat #58a bottom right; /* 或 100% 100% */
background-origin: content-box;
```

## calc() 方案

如果我们仍然以左上角偏移的思路来考虑， 其实 就是希望它有一个 `100% - 20px` 的水平偏移量， 以及 `100% - 10px` 的垂直 偏移量。 谢天谢地， `calc()` 函数允许我们执行此类运算， 它可以完美地在 `background-position` 属性中使用

```css
background: url('code-pirate.svg') no-repeat;
background-position: calc(100% - 20px) calc(100% - 10px);
```

[DEMO](http://dabblet.com/gist/b5fcb42d055427ab6c1a)

:::warning
请不要忘记在 `calc()` 函数 内部的 - 和 + 运算符的两侧各加 一个空白符，否则会产生解析错 误！这个规则如此怪异，是为了 向前兼容：未来，在 `calc()` 内部 可能会允许使用关键字，而这些 关键字可能会包含连字符（即减 号）。
:::
