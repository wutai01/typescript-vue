<template>
    <div class="alipay-report-all">
        <v-title-box title="支付宝年度报表" :back-show = "true"></v-title-box>
        <div class="v-content">          
            <table-fixed></table-fixed>
        </div>
    </div>
</template>
<script lang="ts">
import tableFixed from "../components/tableFixedYear/index.vue"
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components:{
        tableFixed
    } 
})
export default class AlipayReportAll extends Vue {
}
</script>
