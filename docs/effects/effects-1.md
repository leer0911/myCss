# 单侧投影

:::tip
实现单边投影，邻边投影，双侧投影
:::

## 效果

<br>
<effects-1></effects-1>

## 单边投影

[DEMO](http://dabblet.com/gist/cc055dadf493c15723cf)

- `box-shadow` 第四个长度参数，称为扩张半径。这个参数会根据你指定的值去扩大或（当指定负值时）缩小投影的尺寸。

举例来说，一个-5px 的扩张半径会把投影的宽度和高度各减少 10px

```css
box-shadow: 0 5px 4px -4px black;
```

## 邻边投影

[DEMO](play.csssecrets.io/shadow-2-sides)

```css
box-shadow: 3px 3px 6px -3px black;
```

## 双侧投影

[DEMO](5px 0 5px -5px black;)

单侧投影技巧运用两次

```css
box-shadow: 5px 0 5px -5px black, -5px 0 5px -5px black;
```
