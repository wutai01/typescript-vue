<template>
    <div class="alipay-report-all">
        <v-title-box title="支付宝游戏汇总" :back-show = "true"></v-title-box>
        <div class="v-content">     
            <table-fixed></table-fixed>
        </div>
    </div>
</template>
<script lang="ts">
import tableFixed from "../components/tableFixedAll/index.vue"
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    components:{
        tableFixed
    } 
})
export default class AlipayReportAll extends Vue {
  
}
</script>
