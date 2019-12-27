import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT, DECREMENT, INCREMENTCOUNT, ADDSTU, UPDATEINFO, AUPDATEINFO } from './mutations-types'

// 安装插件
Vue.use(Vuex)

// 创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            {id: 110, name: 'Mario', age: 18},
            {id: 111, name: 'Kobe', age: 24},
            {id: 112, name: 'James', age: 30},
            {id: 113, name: 'Curry', age: 10},
        ],
        info: {name: 'Mario', age: 18}
    },
    mutations: {
        // 定义方法
        [INCREMENT](state){
            state.counter++
        },
        [DECREMENT](state){
            state.counter--
        },
        [INCREMENTCOUNT](state, payload){
            state.counter += payload.count
        },
        [ADDSTU](state, stu){
            state.students.push(stu)
        },
        [UPDATEINFO](state){
            state.info.name = 'Kobe'
        }
    },
    getters: {
        powerCounter(state){
            return state.counter * state.counter
        },
        more20stu(state){
            return state.students.filter(s => s.age > 20)
        },
        more20stuLength(state, getters){
            return getters.more20stu.length
        },
        moreAgeStu(state){
            // return function (age) {
            //     return state.students.filter(s => s.age > age)
            // }
            return age => state.students.filter(s => s.age > age)
        }
    },
    modules: {

    },
    actions: {
        // context: 上下文
        aUpdateInfo(context){
            setTimeout(() => {
                // 错误的，state只能通过mutation改变
                // context.state.students

                context.commit(UPDATEINFO)

            }, 1000)
        }
    }
})

// 导出仓库
export default store