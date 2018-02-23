<template>
    <div class="v-table-fix">
        <div class="v-table-fix-container">
            <div class="v-table_fixed-main" style="overflow: hidden;position: relative;width: 3200px;">
                <table-fixed-item
                    :headDatas = "headDatas"
                    :lists = "lists"
                ></table-fixed-item>
            </div>
        </div>
        <div class="v-table__fixed">
                <table-fixed-item
                    :headDatas = "headDatas"
                    :lists = "lists"
                ></table-fixed-item>
        </div>
        <div class="v-table__fixed-right" v-bind:style="{height:fixedRightHeight}">
            <div style="position: absolute;left: auto;top: 0;z-index: 3;right:0;">
                <table-fixed-item
                    :headDatas = "headDatas"
                    :lists = "lists"
                ></table-fixed-item>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import"./index.scss"
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import tableFixedItem from "../tableFixedAllItem/index.vue"
@Component({ 
    components:{tableFixedItem}
})
export default class TableFixed extends Vue {
    headDatas: string[] = [ '账号', '受益部门', '游戏-NC', '一月', '二月', '三月', '四月','五月', '六月','七月','八月','九月','十月','十一月','十二月', '全年总计']
    
    fixedRightHeight = '0'
    @Action('alipayReportallLoad') listsLoad: Function

    @Getter('alipayReportAll') lists: any[]

    setfixedRightHeight(){
        let $target = document.getElementsByClassName('v-table__fixed-right')[0].getElementsByClassName('table-fixed-item')[0]
        let height = ($target as any).offsetHeight
        this.fixedRightHeight = height+'px'
    }

    @Watch('lists')
    onListsChange(newVal: string, oldVal: string){
        this.$nextTick(()=>{
            this.setfixedRightHeight()
        })  
    }
    deep: true
    immediate: true

    mounted(){
        this.listsLoad()
    }
}
</script>


