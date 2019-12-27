<template>
    <div>
        <h2>我是Home</h2>
        <p>哈哈哈</p>

        <router-link to="/home/message">消息</router-link>
        <router-link to="/home/news">新闻</router-link>
        <router-view></router-view>
        
    </div>
</template>

<script>
    export default {
        date(){
            return {
                message: '你好啊',
            }
        },
        created(){

        },
        mounted(){

        },
        updated(){

        },
        // 这两个函数只有在该组件被保持了状态使用了keep-alve时，才是有效的
        activated(){        // 活跃的

        },
        deactivated(){      // 不活跃的

        },
    }
</script>

<style scoped>

</style>