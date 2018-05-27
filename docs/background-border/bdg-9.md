# 连续的图像边框

:::tip
实现连续的图像边框,老式信封样式的边框,蚂蚁行军边框
:::

## 效果

<br>
<bdg-9></bdg-9>

[连续边框](http://dabblet.com/gist/55b5f131c45702a55684)

[老式信封样式的边框](http://dabblet.com/gist/e3cfcb094e65d85df847)

[蚂蚁行军边框](http://dabblet.com/gist/f26dddc71730c3847153)

## 连续背景图

* 在背景图片之上，再叠加一层纯白的实色背景。

* `background-size` 设置为 `cover`

* `background-clip` 裁剪背景

```css
border: 1em solid transparent;
background: linear-gradient(white, white),
 url(stone-art.jpg);
background-size: cover;
background-clip: padding-box, border-box;
```

## 老式信封样式的边框

```css
padding: 1em;
border: 1em solid transparent;
background: linear-gradient(white, white) padding-box,
 repeating-linear-gradient(-45deg,
 red 0, red 12.5%,
 transparent 0, transparent 25%,
 #58a 0, #58a 37.5%,
 transparent 0, transparent 50%)
 0 / 5em 5em;
```

## 蚂蚁行军边框

```css
@keyframes ants { to { background-position: 100% } }
.marching-ants {
 padding: 1em;
 border: 1px solid transparent;
 background:
 linear-gradient(white, white) padding-box,
 repeating-linear-gradient(-45deg,
 black 0, black 25%, white 0, white 50%
 ) 0 / .6em .6em;
 animation: ants 12s linear infinite;
}
```

:::tip
`border-image`原理基本上就是九宫格伸缩法：把图片切割成九块，然后把它们应用到元素边框相应的边和角。
:::
