# 说明

> 本站内容为 [css 揭秘](https://github.com/cssmagic/CSS-Secrets) 阅读笔记，仅供学习使用。若有侵犯，请及时联系 445220716@qq.com

为让读者更快融入，特介绍笔记风格：

## 标题

第一步，发布挑战：

:::tip
描述挑战的内容，即要实现的效果
:::

## 效果

第二步，基于 vuepress 的 Component 生成的例子。在 `.vuepress/component` 目录下。

<br>
<bdg-1></bdg-1>

接着一般会给出 css 揭秘官方 DEMO

[DEMO](http://dabblet.com/gist/012289cc14106a1bd7a5)

## 思路

第四步，根据例子会给出核心思路，如下：

* 透明颜色可使用 `rgba` 或 `hsla`

* 通过 `background-clip` 修改背景裁剪位置，默认是 `border-box`。

```css
border: 10px solid hsla(0, 0%, 100%, 0.5);
background-clip: padding-box;
```

# 随书相关链接

## 规范

* [CSS 内部与外部尺寸模型](http://w3.org/TR/css3-sizing)
* [CSS 伸缩盒布局模型](http://w3.org/TR/css-flexbox)
* [CSS 变形](http://w3.org/TR/css-transforms)
* [CSS 盒对齐模型](http://w3.org/TR/css-align)
* [CSS 过渡](http://w3.org/TR/css-transitions)
* [CSS 动画](http://w3.org/TR/css-animations)
* [CSS 值与单位](http://w3.org/TR/css-values)
* [CSS 图像](http://w3.org/TR/css4-images)
* [可缩放矢量图形（SVG）](http://w3.org/TR/SVG)
* [混合模式](https://www.w3.org/TR/compositing-1/)
* [CSS 基本 UI 特性](http://w3.org/TR/css3-ui)
* [选择符](http://w3.org/TR/selectors)
* [全屏 API](http://fullscreen.spec.whatwg.org/#::backdrop-pseudo-element)
* [滤镜效果](http://w3.org/TR/filter-effects)
* [图像混合效果](http://w3.org/TR/compositing)
* [CSS 背景与边框](http://w3.org/TR/css-backgrounds)
* [CSS 背景与边框（第四版）](http://dev.w3.org/csswg/css-backgrounds-4)
* [CSS 遮罩](http://w3.org/TR/css-masking)
* [CSS 文本](http://w3.org/TR/css-text)
* [CSS 文本（第四版）](http://dev.w3.org/csswg/css-text-4)
* [CSS 字体](http://w3.org/TR/css-fonts)
* [CSS 文本装饰](http://w3.org/TR/css-text-decor)

## 工具

* [caniuse](http://caniuse.com)
* [webplatform](http://webplatform.org)
* [MDN](http://developer.mozilla.org)
* [modernizr](http://modernizr.com/)
* [color](http://color.adobe.com)

### 预编译

* [stylus](http://stylus-lang.com/)
* [less](http://lesscss.org)
* [sass](http://sass-lang.com)
* [compass](http://compass-style.org) 工具

## 博客

* [sitepoint](http://sitepoint.com/)
* [meyerweb](http://meyerweb.com)
* [simurai](http://simurai.com/)
* [demosthenes](http://demosthenes.info)
* [nicolasgallagher](http://nicolasgallagher.com/)
* [allinthehead](http://allinthehead.com)
* [lea](http://lea.verou.me/2012/01/why-tabs-are-clearly-superior)
* [24ways](http://24ways.org/)
* [aresluna](http://www.aresluna.org)
* [medium](http://medium.com/)
* [thecssninja](http://thecssninja.com)
* [hakim](http://hakim.se)
* [css-tricks](http://css-tricks.com)
* [philipwalton](http://philipwalton.com)
