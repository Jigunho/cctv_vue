<template>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <label>cctv 필터 조건</label>
            </div>
            <div class="card-content">
                <div>
                    <el-select placeholder="cctv선택">
                        <el-option v-for="item in cctvList" v-bind:key="item.id" :value="item.cameraid" :label="item.name"></el-option>
                    </el-select>
                    <el-select placeholder="profile 선택">
                        
                    </el-select>
                   
                </div>
                <div  align="right" style="margin-top: 20px">
                    <el-button>적용</el-button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : 'route_filter',
    computed : {
        cctvList: function(){
            return this.$store.state.cctvList
        },
        profileList: function(){
            return []      
        },
        filteredProfileList: function(){
            return profileList
        },
        routeList: function(){

        }
    },

    methods:{
        getRouteList: function(){
            this.$http.get('')
                .then((rows)=>{
                
                
            })
        }
    }
}
</script>