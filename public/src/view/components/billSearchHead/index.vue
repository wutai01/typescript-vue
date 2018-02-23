<template>
    <div class="bill-search-head">
        <div class="account-select clearfix">
            <div class="search-head-item-title">账号选择：</div>
            <div class="account-select-item clearfix">
                <div class="col-sm-4" :key="index" v-for="(item, index) in accounts" v-if="index < moreShow">
                    <span :class="{'span-active': checkActiveAccount(index)}" @click="accountClick(index)">{{item}}</span>
                </div>
                <transition name="bounce">
                    <div class="col-sm-12 no-padding" v-show="openStatus" v-bind:style="{'height':  Math.ceil((accounts.length-3)/3)*50+'px'}" style="overflow:hidden;">
                        <div class="col-sm-4" :key="index" v-for="(item, index) in accounts" v-if="index >= moreShow">
                            <span :class="{'span-active': checkActiveAccount(index)}" @click="accountClick(index)">{{item}}</span>
                        </div>
                    </div>
                </transition>
            </div>
                <span  class="right-btn">
                    <span @click="openHandler">{{openStatus?'收起':'展开'}}&nbsp&nbsp<i class="fa" :class="openStatus?'fa-angle-up':'fa-angle-down'"></i></span>
                    <transition name="widthOpen">
                        <div v-show="openStatus" class="control-btns">
                            <div style="width:100px;" class="control-btns-main">
                                <span>清空&nbsp|&nbsp</span>
                                <span>全选&nbsp|&nbsp</span>
                            </div>
                        </div>
                    </transition>
                   
                </span>

        </div>
        <div class="time-select clearfix">
            <div class="search-head-item-title">时间选择：</div>
            <div class="time-select-item">
                <div class="col-sm-3">
                    <v-date-range-picker
                        v-model="timeValue"
                        type="daterange"
                        placeholder="选择日期范围"
                        align = "left"
                        :picker-options="pickerOptions3"
                        @first-back = "firstBack"
                        @change = "timeChange">
                    </v-date-range-picker>
                </div>
            </div>
        </div>
        <div class="select-result clearfix">
            <div class="search-head-item-title">筛选结果：</div>
            <div class="select-result-item"></div>
        </div>
    </div>
</template>
<script lang="ts">
import "./index.scss"
import { Component, Vue } from 'vue-property-decorator'
interface MinMax{
    minDate: string,
    maxDate: string
}
const moment = (window as any)['moment']
@Component
export default class BillSearchHead extends Vue {
    maxDate: string = moment().subtract(1, 'days').format('YYYY-MM-DD')
    
    timeValue: string = ''
    activeMonth: string = moment().subtract(1, 'days').format('YYYY-MM-DD')
    activeAccount: number[] = []
    pickerOptions3 =  {
        disabledDate : this.computedTime,
        shortcuts: [{
          text: '当月',
          onClick(picker: any) {
            const end = moment().subtract(1, 'days').format('YYYY-MM-DD')
            const start = moment().startOf('month').format('YYYY-MM-DD')
            picker.$emit('pick', [start, end]);
          }
        },{
          text: '上个月',
          onClick(picker: any) {
            const end = moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD')
            const start = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')
            picker.$emit('pick', [start, end]);
          }
        }]
    }

    accounts = [
        '我是支付宝账号0', '我是支付宝账号1', '我是支付宝账号2',
        '我是支付宝账号3', '我是支付宝账号4', '我是支付宝账号5',
        '我是支付宝账号3', '我是支付宝账号4', '我是支付宝账号5',
        '我是支付宝账号3', '我是支付宝账号4', '我是支付宝账号5'
    ]
    openStatus: boolean = false

    get moreShow () {
        // if( this.openStatus ) return this.accounts.length
        return 3
    }

    computedTime(time : any){
        return time.getTime() > Date.parse(this.activeMonth)
    }

    firstBack(val: MinMax){
        let minDate = moment(val.minDate).endOf('month').format('YYYY-MM-DD')
        let today = moment().subtract(1, 'days').format('YYYY-MM-DD')
        if(Date.parse(minDate) > Date.parse(today)){
            this.activeMonth = today 
        }else{
            this.activeMonth = minDate
        }
    }

    timeChange(time: any){
        if( !time ){
            this.activeMonth = moment().subtract(1, 'days').format('YYYY-MM-DD')
        }
    }

    /*
    * 账号选择点击 
    * 如果已经选择就取消 把这项从activeAccount中删掉
    * 没选择就 把这项push到activeAccount
    */
    accountClick(index: number){
        let targetObj = this.checkActiveAccount(index, true)
        if( (targetObj as any).target ){
            this.activeAccount.splice((targetObj as any).index, 1)
        }else{
            this.activeAccount.push(index)
        }
    }

    // 账号选择校验
    checkActiveAccount(val:any, neeIndex: boolean){
        let $target = false, targetIndex = null
        this.activeAccount.forEach( (element, index)=>{
            if( element === val){
                $target = true
                targetIndex = index
            }
        })
        if(neeIndex){
            return {
                target: $target,
                index: targetIndex
            }
        }
        return $target
    }

    openHandler(){
        this.openStatus = !this.openStatus
    }

    mounted(){
        console.log( this.maxDate , 871)
        var tt = (document as any).styleSheets[0];
        // tt.deleteRule(6);//清除之前写入的动画样式
        // console.log(tt);
        var height = Math.ceil(( this.accounts.length-3 )/3)*50
        tt.insertRule("@keyframes bounce-in{0%{ height: 0px; } 100%{ height: "+height+"px; }",6);//写入样式
    }
}
</script>

