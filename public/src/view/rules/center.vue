<template>
    <div class="alipay-report-all"> 
        <v-title-box title="规则" :back-show = "true"></v-title-box>
        <div class="v-content no-padding">
            <v-tabs
                v-model="activeIdx"
                type="blue">
                <v-tab-item nav = "配置规则">
                    <transition name="fade-in">
                        <rules-list v-show="activeIdx == 0"></rules-list>
                    </transition>
                </v-tab-item>
                <v-tab-item nav = "订单冲突">
                    <transition name="fade-in">
                        <order-bug v-show="activeIdx == 1"></order-bug>
                    </transition>
                </v-tab-item>
            </v-tabs>
        </div>
    </div>
</template>
<script lang="ts">
import "./rules.scss"
import rulesList from "./rulesList.vue"
import orderBug from "./orderBug.vue"
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: { rulesList, orderBug }
})
export default class RulesCenter extends Vue {
    activeIdx: number = 0
}
</script>
