<template>
    <div class="bill-alipay">
        <v-title-box title="支付宝账单" :back-show = "true"></v-title-box>
        <div class="v-content">
            <bill-search-head
                @change="changeHandler"
            ></bill-search-head>
            <div class="alipay-search-result-head">
                <div class="col-sm-4">
                    账号
                </div>
                <div class="col-sm-4">
                    充值金额
                </div>
                <div class="col-sm-4">
                    操作
                </div>
            </div>
            <alipay-search-result
                v-for = "item in lists"
                :key = "item.id"
                :data = "item"
            ></alipay-search-result>
        </div>
    </div>
</template>
<script lang="ts">
import { Getter, Action } from 'vuex-class'
import billSearchHead from "../components/billSearchHead/index.vue"
import alipaySearchResult from "../components/alipaySearchResult/index.vue"
import { Component,Vue } from 'vue-property-decorator'

interface AlipayLists{
    account: string,
    count: number,
    id: any

}
@Component({ 
    components: {
        billSearchHead, alipaySearchResult
    }
})
export default class Alipay extends Vue {

    @Action('alipayLoadData') actionAlipayLoad: Function

    @Getter('alipayLists') lists: AlipayLists[]

    changeHandler(){
        
    }

    mounted(){
        this.actionAlipayLoad()
    }
}
</script>
