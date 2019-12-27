<template>
  <div id="app">
    <h2>-------------App 内容-------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">增加学生</button>

    <h2>-------------App 内容: getters相关信息-------------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(12) }}</h2>

    <h2>-------------HelloVuex 内容-------------</h2>
    <HelloVuex/>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'

import { INCREMENT, DECREMENT, INCREMENTCOUNT, ADDSTU, UPDATEINFO, AUPDATEINFO } from './store/mutations-types'

export default {
  name: 'App',
  data(){
    return {
      message: '我是App组件',
      
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    addition(){
      this.$store.commit(INCREMENT)
    },
    subtraction(){
      this.$store.commit(DECREMENT)
    },
    addCount(count){
      // count 传参叫 payload：载荷
      // 普通提交风格
      //this.$store.commit('incrementCount', count) // 到Mutaion时，就是count

      // 特殊提交风格
      this.$store.commit({
        type: INCREMENTCOUNT,
        count                                     // 到Mutaion时，是对象，叫payload更合适
      })
    },
    addStu(){
      const stu = {id: 114, name: 'Alan', age: 35}
      this.$store.commit(ADDSTU, stu)
    },
    updateInfo(){
      this.$store.dispatch(AUPDATEINFO)
    }
  }
}
</script>

<style>

</style>
