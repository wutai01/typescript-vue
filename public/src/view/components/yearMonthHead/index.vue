<template>
    <div class="year-month-head clearfix">
        <span class="month-item">
            <select v-model = "yearSelect">
                <option v-for="(item, index) in years" :key = "index" :value="item">{{item}}年</option>
            </select>
        </span>
        <span class="month-item" 
            :class="{'month-active': index+1==monthSelect}" 
            v-for="(item, index) in months" :key="index" @click="monthChange(yearSelect,index)">
            {{item}}
        </span>
        <span class="month-item month-item-all" @click="routeGo">
            全年报表
        </span>
    </div>
</template>
<script lang="ts">
import "./index.scss"
import { Component, Vue, Watch } from 'vue-property-decorator'
const moment = (window as any)['moment']
@Component({ 
})
export default class YearMonthHead extends Vue {
    years = ['2017', '2016', '2015']
    months = ['一 月', '二 月', '三 月', '四 月', '五 月', '六 月', '七 月', '八 月', '九 月', '十 月', '十一月', '十二月']

    yearSelect: string = '2016'
    monthSelect: number = Number(moment().format('MM'))

    @Watch('yearSelect')
    onChangeYearSelect(newVal: string, oldVal: string){
        this.monthChange(newVal, this.monthSelect)
    }

    monthChange(year:string, index: number){
        let val = ''
        if(index+1 > 9){
            val = year+'-'+(index+1)
        }else{
            val = year+'-0'+(index+1)
        }
        this.monthSelect = index+1
        this.emitChange(val)
    }

    emitChange(val: string){
        this.$emit('change', val)
    }

    routeGo(){
        this.$router.push({
            path: '/app/alipay/report/year'
        })
    }
}
</script>
