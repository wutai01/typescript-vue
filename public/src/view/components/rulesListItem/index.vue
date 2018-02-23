<template>
  	<div class="rules-list-item">
        <div class="rules-list-item-head">
            <span class="department">部门：</span><span class="department-text">迅猛龙</span>
            <span class="games">游戏：</span><span>5个</span>
        </div>
        <div class="rules-list-item-games">
            <span :class="{'active-games': index == activeGamesIndex}" v-for="(item, index) in games" :key="index">{{item}}</span>
            <span @click="addRule"><i class="fa fa-plus"></i></span>
        </div>
        <div class="rules-list-item-main">
            <span v-for = "(item, index) in rules" :key="index">
                {{index+1}}. {{item}}
            </span>
            <div class="rules-list-item-add">
                <a class="curP" @click="addRule">添加条件</a>
            </div>
        </div>
  	</div>
</template>
<script lang="ts">
import "./index.scss"
import { Component, Emit, Vue } from 'vue-property-decorator'

@Component
export default class RulesListItem extends Vue {

    activeGamesIndex: number = 0
    games = ['茶苑-斗牛', '茶苑-三公', '杭牌圈', '瑞安茶苑', '掼蛋']
    rules = ['Hummer中对应的AppID为：1001', '商品名称包含:茶苑斗牛']

    addRule(){
        console.log(777777)
        this.$emit('add-back')
    }
}
</script>

