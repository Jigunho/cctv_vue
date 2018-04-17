<template>
    <div id="Form">
        <!-- <button v-on:click="isShow = !isShow" class="control">
            click me to toggle (show/hide) HTML element
        </button>
         -->
        <div class="btn">
            <el-button @click='isShow = !isShow' size="medium">{{changeMessage}}</el-button>
        </div>

        <div class="row" v-show="isShow">
            <FilterForm></FilterForm>
        </div> 
   
        <div class="row">
            <GraphForm></GraphForm>
        </div> 

        <div class="row">
            <Result></Result>
        </div>

    </div>

</template>

<script>
import FilterForm from "./filter/index.vue"
import ChartForm from "./chart/index.vue"
 import GraphForm from "./graph/index.vue"
import Result from "./result/index.vue"

export default {
    name: 'Form',
    data () {
        return {

            isShow: true,

        }
    },
    components: {
        'FilterForm': FilterForm,
        'ChartForm': ChartForm,
        'GraphForm': GraphForm,
        'Result': Result
    },
    methods: {
        
    },
    computed : {
        changeMessage : function() {
            if(this.isShow == true){
                return '검색조건  닫기'
            }else{
                return '검색조건 펼치기'
            }
        }
    }
}
 
</script>

<style>
.btn {
    margin-left : 10px;
    margin-top : 10px;
}
</style>