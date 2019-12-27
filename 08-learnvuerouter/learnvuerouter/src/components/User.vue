<template>
    <div>
        <h2>我是User</h2>
        <p>嘿嘿嘿</p>
        {{userId}}
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    export default {
        name: 'User',
        computed: {
            userId(){
                return this.$route.params.userId
            }
        },
        methods: {
            btnClick(){
                console.log(this.$router)
                console.log(this.$route)
            }
        }
    }
</script>

<style scoped>

</style>