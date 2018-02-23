<template>
  	<div class="msg-header">
    	当前共 4 个账号，1个账号正在验证，1个账号验证未通过 立即查看
		<div class="pull-right search-main">
    		<v-input v-model="keyword"></v-input>
		
    		<v-button type="primary" class="pull-left" size="small" @click="searchHandler">搜索</v-button>
		</div>
  	</div>
</template>
<script lang="ts">
import "./messageHeader.scss"
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class messageHeader extends Vue {
	keyword: string = ''

	searchHandler(){
		this.$emit('search-back', this.keyword)
	}

}
</script>

