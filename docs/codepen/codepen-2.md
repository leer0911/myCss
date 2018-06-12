# 节点树

## 效果

<br>

<codepen-2></codepen-2>

## 思路

树拐角处用伪类来处理

```css
.codepen-2 .tree ul ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 1px solid #ccc;
  width: 0;
  height: 20px;
}
```

悬浮突显通过相邻选择符来实现

```css
.tree li a:hover,
.tree li a:hover + ul li a {
  background: #c8e4f8;
  color: #000;
  border: 1px solid #94a0b4;
}
```
