# Vue 3 + Vite

- npm create vite@latest my-vue-app --template vue

### box-shadow

[box-shadow(盒子阴影)](https://www.cnblogs.com/libo-web/p/15705558.html)

```css
/* x偏移量 正右偏移负左偏移 | y偏移量 正下偏移负上偏移 | 阴影模糊半径值越大阴影越模糊 | 阴影颜色 */
box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
```

#### position: sticky; 粘性定位

#### transition: all 0.3s;

#### getBoundingClientRect()

![getBoundingClientRect图片](https://img-blog.csdn.net/20180518160417807)

- top：元素上边到视窗上边的距离;
- right：元素右边到视窗左边的距离;
- bottom：元素下边到视窗上边的距离;
- left：元素左边到视窗左边的距离;
- width：是元素自身的宽
- height 是元素自身的高

#### getComputedStyle('当前元素', null) 这个方法来获取元素当前的样式

#### Vite proxy 重写 rewrite: (path) => path.replace(/^\/api/, '')

#### vite 项目版本降级

- 安装最新 node 创建 vue 项目
- 运行老项目下包报错，node-sass 和 node 版本不一致， 之后降级 node，安装的 14.2
- 最终删除 package.json 中的 "type": "module", 解决报错
- 当 package.json 文件中有 'type: module' 时，您的源代码应该使用 import 语法。当你没有时，你应该使用 require 语法。

#### Intersection Observer API

- 判断 dom 是否在可视区域
  ![Intersection Observer API](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fc347b9d5b0461eb2499e2030744252~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

```js
//io 为 IntersectionObserver对象 - 由IntersectionObserver()构造器创建
var io = new IntersectionObserver((entries) => {
  //entries 为 IntersectionObserverEntry对像数组
  entries.forEach((item) => {
    //item 为 IntersectionObserverEntry对像
    // isIntersecting是一个Boolean值，判断目标元素当前是否可见
    if (item.isIntersecting) {
      //div 可见时 进行相关操作
      console.log(item.target.innerText)
      io.unobserve(item.target) //停止监听该div DOM节点
    }
  })
}) //不传options参数，默认根元素为浏览器视口
const divArr = [...document.querySelectorAll('.item')]
divArr.forEach((div) => io.observe(div)) // 遍历监听所有div DOM节点
```

#### teleport 指定组件挂载dom
```html
<teleport to="body"></teleport>
```

#### defineAsyncComponent 创建一个只有在需要时才会加载的异步组件


#### import.meta.glob函数从文件系统导入多个模块

#### entries  for of 和 for in