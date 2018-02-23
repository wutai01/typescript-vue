

  import * as lodash from 'lodash'
  
  declare module "*.vue" {
    import Vue from "vue"
    export default Vue
  }
  
  // 全局变量设置
  declare global {
    const _: typeof lodash
  }

  