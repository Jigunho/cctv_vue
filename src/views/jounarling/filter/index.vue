<template>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <label>필터 조건</label>
            </div>
            <div class="card-content">
               
                <el-form ref="form" :model="form" label-width="120px">
                     <el-form-item label="집계 단위" required>
                        <label>  </label>
                        <el-radio-group v-model="form.resource">
                        <el-radio label="일 분"></el-radio>
                        <el-radio label="한 시간"></el-radio>
                        <el-radio label="하루"></el-radio>
                        <el-radio label="한달"></el-radio>
                        <el-radio label="기간 전체"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="기간 선택" required>
                        <el-col :span="4">
                            <el-date-picker type="date" placeholder="시작 날짜" v-model="form.sdate" style="width: 90%"></el-date-picker>
                        </el-col>

                        <el-col :span="4">
                            <el-date-picker type="date" placeholder="종료 날짜" v-model="form.edate" style="width: 90%"></el-date-picker>
                        </el-col>

                    </el-form-item>

                    <el-form-item label="필터 조건" required>
                        <label>  </label>
                        <el-radio-group v-model="form.resource">
                            <el-radio label="name"></el-radio>
                            <el-radio label="location"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="CCTV 선택" required>
                        <el-checkbox-group v-model="form.type">
                        <el-checkbox v-for="item in this.$store.state.cctvList" v-bind:key="item.id" :label="item.name" name="type"></el-checkbox>
                        <!-- <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                        <el-checkbox label="Offline activities" name="type"></el-checkbox>
                        <el-checkbox label="Simple brand exposure" name="type"></el-checkbox> -->
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
                    <!-- <el-form-item label="Start time">
                        <el-col :span="3">
                            <el-date-picker type="date" placeholder="Pick a date" v-model="form.sdate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="3">
                            <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.stime" style="width: 100%;"></el-time-picker>
                        </el-col>
            
                    </el-form-item>
                    <el-form-item label="End time">
                        <el-col :span="3">
                            <el-date-picker type="date" placeholder="Pick a date" v-model="form.edate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="3">
                            <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.etime" style="width: 100%;"></el-time-picker>
                        </el-col>     
                    </el-form-item>
                    <el-form-item label="Activity type">
                        <el-checkbox-group v-model="form.type">
                        <el-checkbox label="Online activities" name="type"></el-checkbox>
                        <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                        <el-checkbox label="Offline activities" name="type"></el-checkbox>
                        <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Resources">
                        <el-radio-group v-model="form.resource">
                        <el-radio label="Sponsor"></el-radio>
                        <el-radio label="Venue"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form> -->


                <el-button>적용</el-button>
            </div>
        </div>
    </div>

</div>
    
</template>
<script>
export default {
    name : 'jounarling_fiter',
    data () {
        return {
            ruleField : [],
            form: {
                name: '',
                region: '',
                sdate: '',
                stime: '',
                edate: '',
                etime: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods : {
        getFilterList : function(){
            this.$http.get('http://www.json-generator.com/api/json/get/bTLAhTZbdu?indent=2')
                .then((result) => {
                    this.ruleField = result.data.ruleField
               //    alert(this.ruleField.length)
                }).catch((err) =>{
                    alert(err)
                })

        }
    },
    created : function() {
        this.getFilterList()
    }
    
}
 

</script>
<style>

</style>