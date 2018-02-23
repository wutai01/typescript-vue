<template>
    <v-modal
        v-model="value"
        title="修改匹配规则"
        width="1100"
        @save="onSave">
        <div class="add-rules-modal-title">
            所属部门与游戏
        </div>
        <div class="add-rules-modal-main clearfix">
            <div class="col-sm-4">
                <div class="form-group">
                  <label class="col-sm-3 control-label text-right" style="line-height:34px;">部门：</label>
                  <div class="col-sm-9">
                    <v-input v-model="department"></v-input>
                  </div>
                </div>   
            </div>
            <div class="col-sm-8">
                <div class="form-group">
                  <label class="col-sm-2 control-label text-right" style="line-height:34px;">游戏：</label>
                  <div class="col-sm-10">
                        <v-multiselect 
                            multiple
                            :options="aGames"
                            v-model="gameSelect"
                            taggable
                            :searchable="true"
                            @select="selectTag"
                            @tag="addTag"
                            @remove-tag = "removeTag"
                            :selectedWithClear="true"
                            label="name"
                            track-by="id"
                            placeholder="请输入内容">
                        </v-multiselect>
                  </div>
                </div>   
            </div>
        </div>
        <div class="add-rules-modal-title">
            订单匹配条件
        </div>
        <div class="add-rules-game-item clearfix" :key="index" v-for="(gamesRules, index) in gamesRules">
            <div style="padding:15px 15px 0px 15px;">{{gamesRules.name}}</div>
            <div class="col-sm-6" style="margin-top:15px;" :key="ruleIndex" v-for="(rule, ruleIndex) in gamesRules.rules">
                <div>条件{{ruleIndex+1}}</div>
                <div class="col-sm-8 no-padding add-rules-game-item-select">
                    <select class="form-control" v-model="rule.id"> 
                        <option v-for="(option, optionIndex) in rulesOption" :value="option.id" :key="optionIndex">{{option.text}}</option>
                    </select>
                </div>
                <div class="col-sm-3 no-padding add-rules-game-item-input">
                    <input type="text" placeholder="请输入" v-model="rule.value">
                </div>
                <div class="col-sm-1 add-rules-game-item-close curP" @click="removeGameRule(index, ruleIndex)">
                    ×
                </div>
            </div>
            <div class="col-sm-12" style="margin-top:15px;">
                <a class="curP" @click="addGameRule(index)">添加条件</a>
            </div>
        </div>    
    </v-modal>
</template>
<script lang="ts">
import "./index.scss"
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
const vMessage = (window as any).vMessage
interface TagGame{
    name: string,
    id: number
}
@Component({ 
})
export default class AddRulesModal extends Vue {

    
    department: string = ''
    gameSelect: any[] = [{
        name: '游戏1',
        id: 1
    }]
    aGames: any[] = []
    /* 
        Hummer对应的AppID等于
        订单中商品名称包含
        订单中商品名称前缀
        订单中商品名称后缀
        商品名称满足正则表达式
        订单号满足正则表达式
    */
    rulesOption = [{
        id:1,
        text:'Hummer对应的AppID等于'
    },{
        id: 2,
        text: '订单中商品名称包含'  
    },{
        id: 3,
        text: '订单中商品名称前缀'
    },{
        id: 4,
        text: '订单中商品名称后缀'
    },{
        id: 5,
        text: '商品名称满足正则表达式'
    },{
        id: 6,
        text: '订单号满足正则表达式'
    }]
    gamesRules = [
        {
            name: '游戏1', 
            id:1,
            rules: [{
               id: '1',
               value: '333'
            },{
               id: '3',
               value: 'test'
            }]
        }

    ]

    @Prop()
    value: boolean

    @Watch('value')
    onValueChange(newVal: string, oldVal: string){
        this.$emit('input', newVal)
    }
    selectTag(tag: any){
        this.gamesRules.push({
            name: tag.name,
            id: tag.id,
            rules: [{
                id: '',
                value: ''
            }]
        })
    }

    addTag(newTag: string){
        let tag: TagGame = {
          name: newTag,
          id: this.gamesRules.length + 1
        }
        this.aGames.push(tag)
        this.gameSelect.push(tag)

        this.gamesRules.push({
            name: newTag,
            id: this.gamesRules.length + 1,
            rules: [{
                id: '',
                value: ''
            }]
        })

    }

    removeTag(item:any){
        this.gamesRules.forEach((el, index)=>{
            if(el.id == item.id){
                this.gamesRules.splice(index,1)
                return
            }
        })
        return
    }

    addGameRule(index: number){
        if(this.gamesRules[index].rules.length > 5 ){
            vMessage.error('至多6个规则')
            return false
        }
        this.gamesRules[index].rules.push({
            id:'',
            value:''
        })
    }

    removeGameRule(index1: number, index2: number){
        this.gamesRules[index1].rules.splice(index2, 1)
    }

    
}
</script>
