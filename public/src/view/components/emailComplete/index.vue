<template>
    <div class="email-complete" :id="'email-complete-'+id">
        <v-input 
            v-model = "value"
            @focus = "inputFocus"
            @blur = "inputBlur"
        ></v-input>
        <ul class="email-foots-main" v-show = "emailFootsShow">
            <li :key = "index" v-for = "(item, index) in emailFoots" @click="emailFootClick(item)">
                {{computedValue}}{{item}}
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import "./index.scss"
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
@Component
export default class EmailComplete extends Vue {
    emailFoots = ['@bianfeng.com', '@qq.com', '@sina.com', '@gmail.com', '@hotmail.com', '@163.com']
    emailFootsShow = false

    @Prop()
    value: string
    @Prop()
    id: string

    @Watch('value')
    onValueChange(val: string, oldVal: string){
        this.$emit('input', val)
    }

    get computedValue () {
      return this.value.split('@')[0]
    }

    inputFocus(){
        this.emailFootsShow = true
    }

    /*选择匹配的邮箱*/
    emailFootClick(item: string){
        this.emailFootsShow = false
        this.value = this.computedValue + item
    }
    /* 点击其他地方收起邮箱匹配 */
    emailFootsHide(e: any): void{
        let nodes = (document as any).getElementById('email-complete-' + this.id).getElementsByTagName('*'), titleJudge = 0
        for(var i=0;i<nodes.length;i++){
            if(e.target==nodes[i]){
                titleJudge = 1;
            }
        }
        if(titleJudge) return 
        this.emailFootsShow = false     
    }

    mounted(){
        document.body.addEventListener('click', this.emailFootsHide, false)
    }

    beforeDestroy(){
        document.body.removeEventListener('click', this.emailFootsHide, false)
    }
}
</script>
