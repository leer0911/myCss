# 文本行的斑马条纹

:::tip
实现文本行的斑马条纹
:::

## 效果

<br>
<types-3></types-3>

[DEMO](http://dabblet.com/gist/cf30f5d442533b32600d)

## 思路

```css
line-height: 1.5;
background: hsl(20, 50%, 95%);
background-image: linear-gradient(rgba(120, 0, 0, 0.1) 50%, transparent 0);
background-size: auto 3em;
background-origin: content-box;
```

:::warning
唯一可能破坏效果的情况可能就是在改变 line-height 时忘了相应地调整 background-size。
:::
