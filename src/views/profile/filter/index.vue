<template>
<div class="row">
    <div class="container col-md-12">
        <div class="card">
            <div class="card-header">
                <h4>필터 조건 -> profile_description</h4>
            </div>

            <div class="card-content">
                <div style="margin-top: 20px">
                    <el-select v-model="selected" placeholder="CCTV 선택">
                        <el-option v-for="item in this.cctvList" v-bind:key="item.id" :label="item.name" :value="item.cameraid"></el-option>
                    </el-select>

                    <el-select v-model="this.cctv" placeholder="구간 선택">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                        <el-option label="Zone three" value="Chungdoo"></el-option>
                    </el-select>

                    <el-select v-model="selected" placeholder="요일 선택">
                        <el-option v-for="item in dayzone" v-bind:key="item.id" :value="item.name"></el-option>
                    </el-select>


                    <el-select v-model="this.cctv" placeholder="시간 선택">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                        <el-option label="Zone three" value="Chungdoo"></el-option>
                    </el-select>
                </div>
                <div align="right" style="margin-top : 20px">
                    <el-button>적용</el-button>
                </div>

            </div>
            
        </div>
        
    </div>
</div>
</template>
<script>

export default {
    name: 'profile_fitler',
    data () {
        return {
            cctv : [],
            selected : '',
            dayzone : [{name:'일'},{name:'월'},{name:'화'},{name:'수'},{name:'목'},{name:'금'},{name:'토'}]
        }
    },
    computed : {
        cctvList : function(){
            return this.$store.state.cctvList
        }
    }
}
</script>