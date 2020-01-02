import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'

// import "./assets/index.less";
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer)
Viewer.setDefaults({
    Options: {
        'zIndex': 9999,
        'inline': true, // 启用 inline 模式
        'button': true, // 显示右上角关闭按钮
        'navbar': true, // 显示缩略图导航
        'title': true, // 显示当前图片的标题
        'toolbar': true, // 显示工具栏
        'tooltip': true, // 显示缩放百分比
        'movable': true, // 图片是否可移动
        'zoomable': true, // 图片是否可缩放
        'rotatable': true, // 图片是否可旋转
        'scalable': true, // 图片是否可翻转
        'transition': true, // 使用 CSS3 过度
        'fullscreen': true, // 播放时是否全屏
        'keyboard': true, // 是否支持键盘
        'url': 'data-source' // 设置大图片的 url
    }
})
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

if (window.HTMLElement) {
    if (Object.getOwnPropertyNames(HTMLElement.prototype).indexOf('dataset') === -1) {
        Object.defineProperty(HTMLElement.prototype, 'dataset', {
            get: function () {
                var attributes = this.attributes // 获取节点的所有属性
                var name = []
                var value = [] // 定义两个数组保存属性名和属性值
                var obj = {} // 定义一个空对象
                for (var i = 0; i < attributes.length; i++) { // 遍历节点的所有属性
                    if (attributes[i].nodeName.slice(0, 5) === 'data-') { // 如果属性名的前面5个字符符合"data-"
                        // 取出属性名的"data-"的后面的字符串放入name数组中
                        name.push(attributes[i].nodeName.slice(5))
                        // 取出对应的属性值放入value数组中
                        value.push(attributes[i].nodeValue)
                    }
                }
                for (var j = 0; j < name.length; j++) { // 遍历name和value数组
                    obj[name[j]] = value[j] // 将属性名和属性值保存到obj中
                }
                return obj // 返回对象
            }
        })
    }
}

// window.requestAnimationFrame多浏览器兼容问题补丁
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license

(function () {
    var lastTime = 0
    var vendors = ['ms', 'moz', 'webkit', 'o']
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
            window[vendors[x] + 'CancelRequestAnimationFrame']
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime()
            var timeToCall = Math.max(0, 16 - (currTime - lastTime))
            var id = window.setTimeout(function () { callback(currTime + timeToCall) },
                timeToCall)
            lastTime = currTime + timeToCall
            return id
        }
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id)
        }
    }
}())

if (!('classList' in document.documentElement)) {
    Object.defineProperty(HTMLElement.prototype, 'classList', {
        get: function () {
            var self = this
            function update (fn) {
                return function (value) {
                    var classes = self.className.split(/s+/g)
                    var index = classes.indexOf(value)
                    fn(classes, index, value)
                    self.className = classes.join(' ')
                }
            }
            return {
                add: update(function (classes, index, value) {
                    if (!~index) classes.push(value)
                }),
                remove: update(function (classes, index) {
                    if (~index) classes.splice(index, 1)
                }),
                toggle: update(function (classes, index, value) {
                    if (~index) { classes.splice(index, 1) } else { classes.push(value) }
                }),
                contains: function (value) {
                    return !!~self.className.split(/s+/g).indexOf(value)
                },
                item: function (i) {
                    return self.className.split(/s+/g)[i] || null
                }
            }
        }
    })
}
