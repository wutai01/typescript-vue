<template>
    <div class="rules-list">
        <div class="department-select clearfix" style="margin-bottom:15px;">
            <div style="float:left;height:34px;line-height:34px;padding-right:10px;">部门：</div>
            <div style="width:200px;float:left">
                <v-multiselect 
                    :options="departments"
                    v-model="departmentSelect"
                    :searchable="true"
                    label="name"
                    track-by="value"
                    placeholder="请选择"
                ></v-multiselect>
            </div>
            <v-button type="primary" class="pull-right" @click="addRulesModalShow = true">添加部门</v-button>
        </div>
        <rules-list-item
            @add-back = "addCallback"
        ></rules-list-item>
        <add-rules-modal
            v-model="addRulesModalShow"
        ></add-rules-modal>
    </div>
</template>
<script lang="ts">
import rulesListItem from "../components/rulesListItem/index.vue"
import addRulesModal from "../components/addRulesModal/index.vue"
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: { rulesListItem, addRulesModal }
})
export default class RulesList extends Vue {
    addRulesModalShow: boolean = false
    departments = [{
        name: '迅猛龙',
        value: 'xumenglong'
    },{
        name: '神盾局',
        value: 'shendunju'
    }]
    departmentSelect = {name: '迅猛龙', value: 'xumenglong'}

    addCallback(){
        this.addRulesModalShow = true
    }
}
</script>