<template>
    <div class="alipay-report-month">
        <v-title-box title="支付宝游戏汇总" :back-show = "true"></v-title-box>
        <div class="v-content">
            <year-month-head
                @change="changHandler"
            ></year-month-head>
            <div class="month-all-count">
                三月    |    总计：250,000.00元   
                
                <a class="pull-right curP">下载该报表</a>
                <a class="pull-right curP" style="margin-right:15px;">刷新</a>
            </div>
            <v-table 
                custom
                :loading="bLoading"
                :showCount = "false"
                :list="aList">
                <thead>
                    <tr>
                        <th>账号</th>
                        <th>部门</th>
                        <th class="no-padding">
                            <!--游戏-入账金额-->
                            <div class="table-div clearfix">
                                <div class="table-div-left">游戏</div>
                                <div class="table-div-right">入账金额</div>
                            </div>
                        </th>
                        <th>小计</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in aList" :key = "index">
                        <td>{{item.account}}</td>
                        <td>{{item.department}}</td>
                        <td class="no-padding">
                            <div class="table-div clearfix" v-for="(game, gameindex) in item.games" :key="gameindex">
                                <div class="table-div-left">{{game.name}}</div>
                                <div class="table-div-right">{{game.money}}</div>
                            </div>
                        </td>                       
                        <td>{{item.count}}</td>
                    </tr>
                </tbody>
            </v-table>
        </div>
    </div>
</template>
<script lang="ts">
import "./report.scss"
import { Getter, Action } from 'vuex-class'
import yearMonthHead from "../components/yearMonthHead/index.vue"
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({ 
    components: {
        yearMonthHead
    }
})
export default class AlipayReportMonth extends Vue {

    @Action('alipayReportLoadData') actionAlistLoad: Function
    @Getter('alipayReport') aList: any[]

    bLoading: boolean = false

    changHandler(val: string){
        console.log(val, '上面')
    }

    mounted(){
        this.actionAlistLoad({
            type: 'alipay'
        })
    }
}
</script>
