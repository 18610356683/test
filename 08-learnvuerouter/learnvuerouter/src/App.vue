<template>
  <div id="app">
    <!-- 默认为a标签，tag修改；  -->
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace  active-class="active">关于</router-link>
    <!-- 用router-link跳转 -->
    <!-- <router-link :to="'/user/'+userId" replace  active-class="active">用户</router-link> -->
    <!-- <router-link to="/profile" replace  active-class="active">档案</router-link> -->
    <!-- <router-link :to="{path: '/profile', query:{name: 'Mario', age: '18', height: '1.88'}}" replace  active-class="active">档案</router-link> -->

    <!-- 用button跳转 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>



    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <keep-alive>
      <!-- Profile,User   是组件的name ， 且User之前不可以加空格-->
      <router-view exclude="Profile,User"></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // push == pushState
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log('home');
      
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('about');
      
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query:  {
          name: "Mario", 
          age: 18, 
          height: "1.88"
        }
      })
    },
  }
}
</script>

<style>
.active{
  color: red;
}
</style>
