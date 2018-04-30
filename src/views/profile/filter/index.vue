<template>
<div class="row">
    <div class="container col-md-12">
        <div class="card">
            <div class="card-header">
                <h4>필터 조건 -> profile_description</h4>
            </div>

            <div class="card-content">
                <div style="margin-top: 20px">
                    <el-select v-model="this.cctv" placeholder="CCTV 선택">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                        <el-option label="Zone three" value="Chungdoo"></el-option>
                    </el-select>

                    <el-select v-model="this.cctv" placeholder="구간 선택">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                        <el-option label="Zone three" value="Chungdoo"></el-option>
                    </el-select>

                    <el-select v-model="this.cctv" placeholder="요일 선택">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                        <el-option label="Zone three" value="Chungdoo"></el-option>
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
            cctv : []
        }
    }
}
</script>