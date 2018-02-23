<template>
    <div class="app-item" v-bind:class="{'no-config': status == 2, 'no-support': status == 3}">
      <i :class="icon"></i>
      <span class="app-item-title">{{title}}</span>
      <div class="warning syncing" v-if="status == 1">
        <i class="fa fa-warning"></i>
        <span>当前应用正在进行账号验证初始化</span>
      </div>
      <div class="new-info" v-if="status == 1">
        <i class="fa fa-info-circle"></i>
        <span :title="textText" v-html="compuntedHtml(textText)"></span>
      </div>
      <div class="have-config clearfix" v-if="status == 1">
        <span class="curP" @click="routeGo('/app/alipay')">账单</span>
        <span class="curP" @click="routeGo('/app/alipay/report/month')">汇总</span>
        <span class="curP" @click="routeGo('/app/alipay/report/all')">报表</span>
        <span class="curP" @click="routeGo('/app/config')">配置</span>      
      </div>
      <div class="no-config-text curP"  v-if="status == 2">配置此应用</div>
      <div class="no-open-text"  v-if="status == 3">暂不支持</div>
    </div>
</template>
<script lang="ts">
  import "./appItem.scss"
  import { Component, Prop, Vue } from 'vue-property-decorator'
  @Component
  export default class AppItem extends Vue {
    textText = '某年某月的账单完成下载解析用户可以进行下载查看等信息某年某月的账单完成下载解析用户可以进行下载查看等信息某年某月的账单完成下载解析用户可以进行下载查看等信息'

    // 初始化数据
    msg = 123

    @Prop()
    icon: string

    @Prop()
    title: string

    @Prop({ default: 1})
    status: number

    compuntedHtml(val: string){
      if(val.length>40){
        return val.substring(0, 40)+'...'
      }else{
        return val
      }
    }

    routeGo(val: string){
      this.$router.push({
        path:val
      })
    }
  }
</script>

