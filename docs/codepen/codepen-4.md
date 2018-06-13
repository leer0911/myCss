# bolb 加载效果

水滴聚集的加载效果

## 效果

<br>

<codepen-4></codepen-4>

## 思路

可全局 `transform-style: preserve-3d;` 开启硬件加速，提升性能。

bolb 动画做了两个动作,一是缩放，二是平移。所以只需要对应帧修改对应变换值 `transform: scale(0) translate(x, y);` 即可。

黏合效果（水滴聚集）思路

```xml
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic"
        stdDeviation="10"
        result="blur" />
      <feColorMatrix in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
        result="goo" />
      <feBlend in="SourceGraphic"
        in2="goo" />
    </filter>
  </defs>
</svg>
```

```css
.blobs {
  filter: url(#goo);
}
```

为什么这样就可以实现黏合效果了?

[0 学习成本实现 HTML 元素粘滞融合效果](http://www.zhangxinxu.com/wordpress/2017/12/svg-filter-fuse-gooey-effect/)

- `feGaussianBlur` 用于模糊，减少图形锯齿。
- `feColorMatrix` 滤镜增加 alpha 透明通道的对比度，于是可以把高斯模糊重合的部分进行合并，形成融合效果
- `feBlend` 滤镜把两个对象组合在一起，使它们受特定的混合模式控制。这类似于图像编辑软件中混合两个图层。该模式由属性 mode 定义。结果是让原始的图形在上面显示

[带有融合粘滞效果的分享小交互 demo](http://www.zhangxinxu.com/study/201712/gooey-share.html)

scss 设置动画延迟的技巧

```scss
@for $i from 1 to 6 {
  &:nth-child(#{$i}) {
    animation-delay: $i * 0.2 + s;
  }
}
```
