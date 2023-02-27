
import NProgress from "nprogress"
import "nprogress/nprogress.css"

//乾坤微服务
import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from "qiankun"
import { message } from "ant-design-vue"

//子应用注册信息
import apps from "./apps"

/**
 * 1、注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
    // qiankun 生命周期钩子 - 加载前
    beforeLoad: (app)=>{
        NProgress.start();//加载子应用前，加载进度条
        console.log('beforeLoad', app.name);
        return Promise.resolve();
    },
    beforeMount: (app)=>{
        NProgress.done(); //加载子应用前，进度条加载完成
        console.log('beforeMount', app.name);
        return Promise.resolve();
    }
});

/**
 * 2、添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event)=>{
    console.log('event', event);
    const { msg } = event;
    if(msg && msg.includes("died in status LOADING_SOURCE_CODE")){
        message.error("子应用加载失败，请检查应用是否可运行；")
    }
});

/**
 * 3、导出 qiankun 的启动函数
 */
export default start;
