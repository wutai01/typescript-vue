<template>
  <div class="">
    <v-title-box title="应用列表" :back-show = "false"></v-title-box>
    <div class="clearfix" style="">
        <div class="col-sm-3">
          <!-- 支付宝{{msg}} -->
          <app-item 
            icon="iconfont icon-alipay"
            title="支付宝"
            status = "1" 
          ></app-item>
        </div>
        <div class="col-sm-3">
          <app-item 
            icon="iconfont icon-weixinzhifu"
            title="微信"
            status = "2" 
          ></app-item>
        </div>
        <div class="col-sm-3">
          <app-item 
            icon="iconfont icon-pingguo"
            title="苹果"
            status = "3" 
          ></app-item>
        </div>
        <div class="col-sm-3">
          <app-item 
            icon="iconfont icon-ic_extension_px"
            title="爱呗"
            status = "3" 
          ></app-item>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import appItem from "../components/appitem/appItem.vue"

@Component({ 
  components: {
    appItem
  }
})
export default class AppIndex extends Vue {
}
</script>
