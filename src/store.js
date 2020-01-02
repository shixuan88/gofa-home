import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        AccessToken: sessionStorage.getItem('AccessToken') || '',
        isLeftShow: true
    },
    getters: {
        AccessToken: state => {
            return state.AccessToken
        }
    },
    mutations: {
        changeToken: (state, AccessToken) => {
            // 使用sessionStorage实现关闭窗口时清除本地缓存
            sessionStorage.setItem('AccessToken', AccessToken)
            state.AccessToken = AccessToken
        },
        updateFooterShow: (state, isLeftShow) => {
            state.isLeftShow = isLeftShow
        }
    },
    actions: {}
})
