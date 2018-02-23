<template>
    <div class="v-table-fix" style="">
        <div class="v-table-fix-container">
            <div class="v-table_fixed-main" style="overflow: hidden;position: relative;width: 3200px;">
                <table-fixed-year-item
                    :headDatas = "headDatas"
                    :lists = "lists"
                ></table-fixed-year-item>
            </div>
        </div>
        <div class="v-table__fixed">
            <table-fixed-year-item
                :headDatas = "headDatas"
                :lists = "lists"
            ></table-fixed-year-item>
        </div>
    </div>
</template>
<script lang="ts">
import"./index.scss"
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import tableFixedYearItem from "../tableFixedYearItem/index.vue"
@Component({ 
    components:{ tableFixedYearItem }
})
export default class TableFixed extends Vue {
    headDatas: string[] = [ '账号', '类型', '总计', '一月', '二月', '三月', '四月','五月', '六月','七月','八月','九月','十月','十一月','十二月']

    fixedRightHeight = '0'
    @Action('alipayReportallLoad') listsLoad: Function

    @Getter('alipayReportAll') lists: any[]

    mounted(){
        this.listsLoad()
    }
}
</script>


