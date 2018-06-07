# 染色效果

:::tip
为一幅灰度图片添加染色效果
:::

## 效果

<br>
<effects-3></effects-3>

## 基于滤镜的方案

[DEMO](http://dabblet.com/gist/b338c9940a31b727b7a9)

```css
filter: sepia() saturate(4) hue-rotate(295deg);
```

## 基于混合模式的方案

[DEMO](http://dabblet.com/gist/0dced2852818c0f555e9)

```css
background-blend-mode: luminosity;
```
