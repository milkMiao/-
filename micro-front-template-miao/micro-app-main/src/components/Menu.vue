<template>
    <div class="cns-main-menu">
        <!-- 菜单栏 -->
        <a-menu mode="inline" theme="dark" :selectedKeys="[selectKey]">
            <a-menu-item v-for="item in menus" :key="item.key" @click="changeMenu(item)">
                <router-link :to="{path: item.path }">
                    <a-icon v-if="item.icon" :type="item.icon" />
                    <span>{{item.title}}</span>
                </router-link>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    props: {
        menus: {
            type: Array,
            default: function () { return [] }
        }
    },
    data(){
        return {
            selectKey: '',
        }
    },
    watch: {
        
    },
    methods: {
        handleClick (){
            console.log('打印---handleClick')
        },
        titleClick() {
            console.log('打印---titleClick')
        },
        changeMenu(item){
            console.log('打印---changeMenu',item)
        }
    }
}
</script>

<style lang="less" scoped>
.cns-main-menu {
  width: 100%;
  height: 100%;
  background: #001529;
  .cns-menu {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .cns-parent-title {
    font-size: 13px;
    color: rgba(233, 241, 255, 0.75);
  }
  .cns-child-title {
    font-size: 13px;
    color: #fff;
  }
  .cns-child-title:hover {
    color: #408fff;
  }
  /deep/ .cns-menu-sub {
    background: rgb(12, 28, 53);
  }
}
</style>