<template>
    <div class="app-config-alipay">
        <v-title-box title="支付宝 - 应用配置" :back-show = "true"></v-title-box>
        <div class="v-content">
            <msg-header @search-back="searchHandler"></msg-header>
            <v-table 
                custom
                :loading="bLoading"
                :list="alists"
                :showCount = "false"
                >
                <thead>
                    <tr>
                        <th>账号</th>
                        <th>密码(密钥等一些权限配置)</th>
                        <th>备注</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key = "index" v-for="(item, index) in alists">
                        <td>                           
                            <email-complete v-model="item.account" :id = "index" v-if="item.edit"></email-complete>
                            <template v-else>
                                <span class="">{{item.account}}</span>                    
                                <i class="fa fa-check-circle fa-my-success" v-if = " item.status == 1 " title="校验通过"></i>
                                <i class="fa fa-times-circle fa-my-error" v-if = " item.status == 2 " title="校验失败"></i>
                                <i class="fa fa-refresh fa-my-warning" v-if = " item.status == 3 " title="校验中"></i>
                            </template>
                        </td>
                        <td>
                            <span v-if = "!item.edit">{{item.password}}</span>
                            <v-input v-model="item.password" v-else></v-input>
                        </td>                       
                        <td>
                            <span v-if = "!item.edit">{{item.msg}}</span>
                            <v-input v-model="item.msg" v-else></v-input>
                        </td>
                        <td>
                            <v-button @click="handleSave(index)" v-show="item.edit" inline type="success">保存</v-button>
                            <v-button @click="handleEdit(index)" v-show="item.status == 2 && !item.edit" inline type="success">修改</v-button>
                            <v-button @click="handleDel(index)" v-show="item.status == 2 && !item.edit" inline type="danger">删除</v-button>
                            <v-button @click="handleSave(index)" v-show="item.edit" inline type="danger">取消</v-button>
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <div class="clearfix">
                <v-button class="pull-left"  @click=" modalSave(1) ">添加一行</v-button>
                <v-button class="pull-left" style="margin-right:20px;" @click=" addModelShow = true ">添加多行</v-button> 
                <v-button class="pull-right" type="primary">提交</v-button>              
            </div>
            
        </div>
        <add-config-modal
            v-model = "addModelShow"
            @modal-save = "modalSave"
        ></add-config-modal>
    </div>
</template>

<script lang="ts">
import msgHeader from "../components/messageHeader/messageHeader.vue"
import emailComplete from "../components/emailComplete/index.vue"
import { Getter, Action } from 'vuex-class'
import addConfigModal from "../components/addConfigModal/index.vue"
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

interface AccountLists {
    account: string,
    password: string,
    edit: boolean,
    status: number,
    msg: string
}
@Component({ 
    components: {
        msgHeader, emailComplete, addConfigModal
    }
})
export default class AppConfig extends Vue {
    
    bLoading: boolean = false
    addModelShow: boolean = false

    @Getter('accountList') alists: AccountLists[]

    @Action('loadData') actionLoadData: Function

    @Watch('alists')
    onAccountListChanged(val: string, oldVal: string) { 
        // console.log(val, oldVal, 776 )
    }
    deep: true

    handleEdit(index:number){
        this.$store.commit('SET_ACCOUNT_LIST_EDIT_OPEN', index)
    }

    searchHandler(val:string){
        this.actionLoadData({
            account: val
        })
    }

    handleSave(index:number){
        this.$store.commit('SET_ACCOUNT_LIST_EDIT_CLOSE', index)
    }

    modalSave(nmber:number){
        this.$store.commit('SET_ACCOUNT_LIST_ADD_NEW', nmber)
    }

    mounted(){
        this.actionLoadData()
    }
}

</script>
