# 条纹背景

:::tip
实现条纹渐变背景,垂直条纹,斜向条纹,同色系条纹
:::

## 效果

<br>
<bdg-6></bdg-6>

[DEMO](http://dabblet.com/gist/119dbf7f0c76dba7b7ee)

## 思路

* `background:linear-gradient` 实现渐变

* `background-size` 调整尺寸

```css
background: linear-gradient(#fb3 50%, #58a 0);
background-size: 100% 30px;
```

## 垂直条纹

```css
background: linear-gradient(to right, /* 或 90deg */
 #fb3 50%, #58a 0);
background-size: 30px 100%;
```

## 斜向条纹

```css
background: repeating-linear-gradient(60deg,
 #fb3, #fb3 15px, #58a 0, #58a 30px);
```

## 灵活的同色系条纹

使用 `background-image` 配合 `hsla` 实现同色系。

```css
background: #58a;
background-image: repeating-linear-gradient(30deg,
 hsla(0,0%,100%,.1),
 hsla(0,0%,100%,.1) 15px,
 transparent 0, transparent 30px);
```

