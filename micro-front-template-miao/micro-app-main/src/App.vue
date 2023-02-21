<template>
    <div id="app">
      <!-- 菜单栏 -->
      <!-- <div class="cns-menu-wrapper">

      </div> -->

      <!-- 内容栏 -->
      <!-- <div class="cns-frame-wrapper"> -->
        <div id="nav">
          <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>

          <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
          <!-- <router-view v-show="$route.name" /> -->
          <!-- 子应用渲染区，用于挂载子应用节点 -->
          <!-- <div v-show="!$route.name" id="frame"></div> -->
        </div>
      <!-- </div> -->

    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
