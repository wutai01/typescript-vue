<template>
    <div class="table-fixed-item">
        <div class="table-head">
            <table cellspacing="0" cellpadding="0" border="0" style="table-layout: fixed;" class="table table-bordered dataTable">
                <colgroup>
                    <col width="200" v-for="(item, index) in headDatas" :key="index"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th colspan="1" rowspan="1" :key="index" v-for="(item, index) in headDatas">{{item}}</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="table-body">
            <table cellspacing="0" cellpadding="0" border="0" style="table-layout: fixed;" class="table table-bordered dataTable">
                <colgroup>
                    <col width="200" v-for="(item, index) in headDatas" :key="index"></col>
                </colgroup>
            </table>
        </div>
    </div>
</template>
<script lang="ts">
import"./index.scss"
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ 
})
export default class TableFixed extends Vue {

    @Prop()
    lists: any[]

    @Prop()
    headDatas: string[]
}
</script>

