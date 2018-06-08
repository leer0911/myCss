# 沿环形路径平移的动画

## 效果

<br>
<animation-6></animation-6>

[DEMO](http://dabblet.com/gist/6c647a5599dc11145f2c)

## 思路

:::tip
“transform-origin 只是一个语法糖而已。实际上你总是可以用 translate() 来代替它。”

——Aryeh Gregor
:::

每个变形函数并不是只对这个元素进行变 形，而且会把整个元素的坐标系统进行变形，从而影响所有后续的变形操 作。这也说明了为什么变形函数的顺序是很重要的，变形属性中不同函数的 顺序如果被打乱，可能会产生完全不同的结果。

```css
  @keyframes spin {
    from {
      transform: rotate(0turn) translateY(-150px) translateY(50%) rotate(1turn);
    }
    to {
      transform: rotate(1turn) translateY(-150px) translateY(50%) rotate(0turn);
    }
  }
  .avatar {
    animation: spin 3s infinite linear;
  }

```