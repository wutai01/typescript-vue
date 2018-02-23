<template>
  <div class="wrapper">
    <v-side-bar :userInfo="userInfo" :menuTitle="menuTitle"></v-side-bar>
    <div class="content-wrapper">
      <transition name="transition-slide-fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script lang = "ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {

  menuTitle: object = {
    show: true,
    name: '财务报表'
  }

  userInfo: any = {
    name: '财务报表',
    userInfo: {
      account: 'XXX',
      nickName: 'XXX'
    },
    menu: [
      {
        url: '/app',
        name: '应用列表',
        isHref: true,
        icon: 'cubes',
      },
      {
        url: '/rules',
        name: '配置规则',
        isHref: true,
        icon: 'cogs',
        // children:[
        //   {
        //     url: '/rule/add',
        //     name: '添加规则',
        //     isHref: true,
        //     icon: 'home',
        //   }
        // ]
      }
    ]
  }
}
</script>

