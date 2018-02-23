<template>
    <div class="order-bug">
        <v-table 
            :loading="bLoading"
            :showCount = "false"
            :list="errorOrderList">
            <v-table-column prop="app_name" label="应用账号" width="120"></v-table-column>
            <v-table-column prop="financial_flow" label="财务流水"></v-table-column>
            <v-table-column prop="business_flow" label="业务流水号"></v-table-column>
            <v-table-column prop="merchant_order" label="商户订单号"></v-table-column>
            <v-table-column prop="commodity_name" label="商品名称"></v-table-column>
            <v-table-column prop="error_content" label="异常情况（点击游戏名称修改规则）"></v-table-column>       
            <v-table-column label="操作" width="160">
                <template slot="cell" slot-scope="scope">
                    <v-button @click="handleEdit(scope)" inline type="success">重新匹配</v-button>
                </template>
            </v-table-column>
        </v-table>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

@Component
export default class OrderBug extends Vue {
    bLoading = false
    @Action('errorOrderLoad') errorOrderLoad: Function

    @Getter('errorOrderList') errorOrderList: any[]

    mounted(){
       this.errorOrderLoad() 
    }
}
</script>
