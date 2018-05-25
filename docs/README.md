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

* [css-backgrounds](http://w3.org/TR/css-backgrounds)
* [selectors](http://w3.org/TR/selectors)
* [SVG](http://w3.org/TR/SVG)
* [css-syntax-3](http://w3.org/TR/css-syntax-3)
* [css-cascade-3](http://w3.org/TR/css-cascade-3)
* [css3-color](http://w3.org/TR/css3-color)
* [css3-background](http://w3.org/TR/css3-background)
* [css-values-3](http://w3.org/TR/css-values-3)
* [css-text-3](http://w3.org/TR/css-text-3)
* [css-text-decor-3](http://w3.org/TR/css-text-decor-3)
* [css3-fonts](http://w3.org/TR/css3-fonts)
* [css3-ui](http://w3.org/TR/css3-ui)
* [css-transforms-1](http://w3.org/TR/css-transforms-1)
* [compositing-1](http://w3.org/TR/compositing-1)
* [ﬁlter-effects-1](http://w3.org/TR/ﬁlter-effects-1)
* [css-masking-1](http://w3.org/TR/css-masking-1)
* [css-ﬂexbox-1](http://w3.org/TR/css-ﬂexbox-1)
* [css-grid-1](http://w3.org/TR/css-grid-1)
* [css-variables-1](http://w3.org/TR/css-variables-1)
* [css-color](http://dev.w3.org/csswg/css-color)
* [css-values](http://w3.org/TR/css-values)
* [css3-images](http://w3.org/TR/css3-images)
* [css4-images](http://w3.org/TR/css4-images)
* [css-images](http://w3.org/TR/css-images)
* [svg](http://www.w3.org/2000/svg)
* [css-transforms](http://w3.org/TR/css-transforms)
* [css-masking](http://w3.org/TR/css-masking)
* [css-transitions](http://w3.org/TR/css-transitions)
* [css-backgrounds-4](http://dev.w3.org/csswg/css-backgrounds-4)
* [css-animations](http://w3.org/TR/css-animations)
* [attr-notation](http://w3.org/TR/css3-values/#attr-notation)
* [ﬁlter-effects](http://w3.org/TR/ﬁlter-effects)
* [compositing](http://w3.org/TR/compositing)
* [css-text](http://w3.org/TR/css-text)
* [css-text-4](http://dev.w3.org/csswg/css-text-4)
* [css-fonts](http://w3.org/TR/css-fonts)
* [css-text-decor](http://w3.org/TR/css-text-decor)
* [xlink](http://www.w3.org/1999/xlink)
* [cursor](http://w3.org/TR/css3-ui/#cursor)
* [css3-selectors](http://w3.org/TR/css3-selectors)
* [viewport-relative-](http://w3.org/TR/css-values/#viewport-relative-)
* [TR](http://w3.org/TR)
* [backdrop-pseudo-element](http://fullscreen.spec.whatwg.org/#::backdrop-pseudo-element)
* [local0](http://w3.org/TR/css3background/#-local0)
* [css3-](http://w3.org/TR/css3-)
* [css3-sizing](http://w3.org/TR/css3-sizing)
* [calc](http://w3.org/TR/css-values-3/#calc)
* [viewport](http://w3.org/TR/css-values-3/#viewport-)
* [w3c](http://w3.org/)
* [css-align-3](http://w3.org/TR/css-align-3)
* [css-ﬂexbox](http://w3.org/TR/css-ﬂexbox)
* [css-align](http://w3.org/TR/css-align)
* [css-animations](http://w3.org/TR/css-animations)
* [css3-values](http://w3.org/TR/css3-values)

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
