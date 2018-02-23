<template>
    <v-modal
        v-model="value"
        title="添加应用配置"
        @save="onSave">
        <div>请输入要添加账号的个数：</div>
        <div style="margin-top:10px;">
            <v-input v-model="numberVal"></v-input>
        </div>
    </v-modal>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({ 
})
export default class AddConfigModal extends Vue {

    @Prop()
    value : boolean

    numberVal: string = ''

    @Watch('value')
    onValueChange(val: string, oldVal: string){
        this.$emit('input', val)
    }

    onSave(){
        this.$emit('modal-save', this.numberVal)
    }
    
}
</script>
