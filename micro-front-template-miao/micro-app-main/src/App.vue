<template>
  <div id="app">
    <!-- 菜单栏 -->
    <div class="cns-menu-wrapper">
      <Menu :menus="menus"></Menu>
    </div>

    <div class="cns-frame-wrapper">
      <!-- 主应用渲染区：用于挂载主应用路由触发的组件 -->
      <router-view class="mainCon" v-show="$route.name" />
      
      <!-- 子应用渲染区：用于挂载子应用节点 -->
      <div class="childNode" v-show="!$route.name" id="frame">子应用节点</div>
    </div>
  </div>
</template>

<script>
import Menu from './components/menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  },
  data() {
   return {
    menus: [
        {
          key: "Home",
          title: "主页",
          path: "/"
        },
        {
          key: "VueMicroApp",
          title: "Vue 主页",
          path: "/vue"
        },
        {
          key: "VueMicroAppList",
          title: "Vue 列表页",
          path: "/vue/list"
        },
        {
          key: "ReactMicroApp",
          title: "React 主页",
          path: "/react"
        },
        {
          key: "ReactMicroAppList",
          title: "React 列表页",
          path: "/react/list"
        },
        {
          key: "AngularMicroApp",
          title: "Angular 主页",
          path: "/angular"
        },
        {
          key: "AngularMicroAppList",
          title: "Angular 列表页",
          path: "/angular/list"
        },
        {
          key: "StaticMicroApp",
          title: "Static 微应用",
          path: "/static"
        }
    ]
   }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  position: relative; 
  height: 100%;
}
.cns-menu-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 40;
  width: 172px;
  overflow-x: hidden;
  overflow-y: auto;
}
.cns-nav-wrapper {
  position: fixed;
  width: 100%;
  min-width: 1060px;
  padding-left: 172px;
  left: 0;
  top: 0;
  z-index: 30;
}
.cns-frame-wrapper {
  padding-left: 172px;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  position: relative;
}
.mainCon {
  background: beige;
  height: 100%;
}

.childNode {
  background: yellow;
}

#cns-frame {
  width: 100%;
  height: 100%;
   /* :first-child {
    height: 100%;
  } */
}
</style>
