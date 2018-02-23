# shield

### 简介
脚手架工具

### 目录结构
```javascript
├── AdminLTE
│      ├── bootstrap    // 包含bootstrap的css和js
│      ├── font
│      ├── theme        // Adminlte皮肤
│
│
│── lib
│    ├── jquery   
│    ├── shield   // 包含组件库css和js
│    ├── 第三方插件    
│
├── src
│   ├── app.js  // 入口文件
│   ├── app.vue  // 入口文件
│   ├── view // 存放文件夹，以模块问单位
│   ├── components // 项目公共组件
│   │       ├── header.vue
│   │       ├── footer.vue
│   │       ├── navigation.vue
│   │
│   ├── config // 配置
│   │      ├── index.js
│   │      ├── urlConfig.js // 请求的url
│   │      ├── routers // 路由
│   │      │     ├── index.js
│   │      │       ├── 文件夹（以模块为单位）
│   │      │ 
│   │      ├── env  // webpack配置信息
│   │           ├── dev.js
│   │           ├── test.js
│   │           ├── prod.js 
│   │
│   ├── images // 图片库
│   │ 
│   ├── store // 状态管理
│   │     ├── index.js
│   │     ├── mutation-types.js
│   │     ├── modules
│   │            ├── index.js
│   │            ├── 文件夹（以模块为单位）
│   │
│   ├── style // 项目样式
│   │     ├── index.scss
│   │     ├── common.scss // 公共样式
│   │     ├── transition.scss // 过渡
│   │     ├── animation.scss // 动画
│   │
│   ├── utils // 工具（ajax、初始化）
│         ├── index.js
│         ├── ajax.js
│         ├── init.js
├── package.json
│ 
├── webpack.common.js
│
├── webpack.dev.js  // 开发环境，继承webpack.common.js
│
├── webpack.test.js // 调试环境，继承webpack.common.js
│ 
├── webpack.prod.js // 生产环境，继承webpack.common.js
│
├── .babelrc
│
├── postcss.config.js
│
├── template
│       ├── index.html
│  
├── build // 编译文件
│
├── node_modules
│
├── index.html // 编译文件
```

### 安装依赖
* 配置好 Node.js 和 npm 环境，其中 npm 需要 3.0 或以上版本，node版本需要6.0以上，8以下
* 安装全局webpack（建议2.0版本）: npm install -g webpack和webpack-dev-server: npm install -g webpack-dev-server
* 如果网络不是很理想，可以用国内镜像下载, 镜像配置：npm install -g cnpm --registry=https://registry.npm.taobao.org

### 开发调试
```shell
// 项目初始化，加载模块
npm run init
// 热更新（ajax模拟，使用rap.imeete.com）
npm run dev
```

### 与后端联调
```shell
npm run test
```

### 生产部署
```shell
npm run build
```