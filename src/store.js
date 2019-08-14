import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex);

//state在Vuex中用于存储数据
var state = { //要设置的全局访问的state对象
    item_id: 0,
    nav: 0
}

//mutations里面放的是方法，方法主要用于改变state里面的数据
var mutations = {
    item_id: function(state, id) {
        state.item_id = id
    },
    nav: function(px) {
        state.nav = px
    },
}

//vuex 实例化vuex.store
const store = new Vuex.Store({
    state,
    mutations: mutations
})

//暴露
export default store;