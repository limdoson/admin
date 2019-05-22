import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        config : {
            isAgent : true,//是否开启代理
        }
    },
    mutations : {},
    actions : {}
})
