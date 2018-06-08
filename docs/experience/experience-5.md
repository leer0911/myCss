# 通过模糊来弱化背景

:::tip
当我们的视线聚焦在距离较近的物体上时，远处的背景就是虚化的。
:::

## 效果

<br>
<experience-5></experience-5>

[DEMO](http://dabblet.com/gist/1326eb460b0dff91d638)

## 思路

- `filter: blur(3px);` 添加模糊效果

```css
main {
  transition: 0.6s;
  background: white;
}

main.de-emphasized {
  -webkit-filter: blur(3px);
  filter: blur(3px);
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 10em;
  padding: 2em;
  margin: -5em;
  border: 1px solid silver;
  border-radius: 0.5em;
  box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.5), 0 0 0 100vmax rgba(0, 0, 0, 0.2);
}

dialog:not([open]) {
  display: none;
}
```
