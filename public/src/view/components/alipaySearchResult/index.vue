<template>
  <div class="alipay-search-result">
      <div class="col-sm-4">
        {{data.account}}
      </div>
      <div class="col-sm-4">
        {{data.count}}
      </div>
      <div class="col-sm-4">
        <a>下载</a>
      </div>
  </div>
</template>
<script lang="ts">
import "./index.scss"
import { Component, Prop, Vue } from 'vue-property-decorator'
interface Data{
  account: string,
  count: number,
  id: any
}
@Component({ 
})
export default class AlipaySearchResult extends Vue {

  @Prop()
  data: Data
}
</script>
