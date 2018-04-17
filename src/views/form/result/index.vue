<template>

 <div class="app-container">
    <el-table :data="listData" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='카메라' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="길" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="평균속도" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
     </el-table>
  </div>

</template>


<script>

export default{
    name: 'Result',
    data() {
        return {
            listData: [
                { name: '남안산-송산' , route: 'a' , vel: 94.92 , cnt: 280568, size: 0},
                { name: '남원-북남원' , route: 'a' , vel: 100.02 , cnt: 150288, size: 0},
                { name: '청주-문의' , route: 'a' , vel: 90.92 , cnt: 35532, size: 0},
                { name: '청주-문의' , route: 'a' , vel: 87.92 , cnt: 381780, size: 0}
            ]
        }
    }

}

</script>