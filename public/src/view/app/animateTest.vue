<template>
    <div>
        <button @click="clickHandler">clickTest</button>
        <!-- <transition name="bounce">
            <p v-if="showControl" style="border:solid 1px #999;height:150px;overflow:hidden;background:#fff;color:#000;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, 
                at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, 
                at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
            </p>
        </transition> -->

        <transition name="fade-out-left">
            <p v-if="showControl" style="border:solid 1px #999;height:150px;overflow:hidden;background:#fff;color:#000;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, 
                at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, 
                at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
            </p>
        </transition>

        <!-- <span v-show="showControl" v-transition="bounce">Look at me!</span> -->
        <!-- <transition name="fade"> -->
            <!-- <div v-if="showControl" transition="expand" style="width:200px;height:200px;border:solid 1px #999;">hello</div> -->
            <!-- <div v-show="showControl" style="width:200px;height:200px;border:solid 1px #999;">9888</div> -->
        <!-- </transition> -->
    </div>  
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({ 
  components: {
  }
})
export default class AppIndex extends Vue {
    showControl = true

    clickHandler(){
        this.showControl = !this.showControl
    }
}
</script>
<style scoped>
    /* 必需 */
    .expand-transition {
        transition: all .3s ease;
        height: 30px;
        padding: 10px;
        border:solid 1px #999;
        background-color: #eee;
        overflow: hidden;
    }

    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .expand-enter{
        height: 0;
        padding: 0 10px;
        opacity: 0;
    }
    .expand-leave {
        height: 0;
        padding: 0 10px;
        opacity: 0;
    }

    .bounce-enter-active {
        animation: bounce-in 0.8s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.8s reverse;
    }
    @keyframes bounce-in {
        0% {
            height: 0px;
            /* transform: scale(0); */
        }

        100% {
            height: 150px;
            /* transform: scale(1); */
        }
    }


    .fade-out-left-enter-active {
        
        /* animation: fadeOutLeft 0.8s reverse; */
    }
    .fade-out-left-leave-active  {
        animation: fadeOutLeft 0.6s;
    }
    @-webkit-keyframes fadeOutLeft {
        0% {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        100% {
            opacity: 0;
            -webkit-transform: translateX(-140px);
            transform: translateX(-140px);
        }
    }
</style>


