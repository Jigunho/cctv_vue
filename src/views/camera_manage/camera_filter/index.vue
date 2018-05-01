<template>
    <div class="container" style="height : 500px;" >
      <div class="row" >
        <label>CCTV 선택 </label>
        <!-- <el-select v-model="cc" placeholder="please select your zone">
          <el-option v-for="item in cctvList" v-bind:key="item.id" label="item.name" value="item.name"></el-option>
        </el-select> -->
        <span style="width: 20px;"></span>
        <el-select v-model="selected" placeholder="CCTV 선택" @change="fetchProfileList(selected)">
            <el-option v-for="item in cctvList" v-bind:key="item.id" :value="item.cameraid" :label="item.name"></el-option>
        </el-select>

      </div>
      <div class="card-content" style="max-height: 430px; margin-top : 20px; overflow-y: scroll;">
          <table class="table table-hover">
              <thead>
                  <tr>
                      <td>번호</td>
                      <td>description</td>
                      <td>자세히</td>
                  </tr>
              </thead>
              <tbody>
                  
                  <tr v-for="item in cctvList" v-bind:key="item.id">
                      <td>{{ item.name }}</td>
                      <td>{{ item.location }}</td>
                      <td><button>이미지 보기</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
    
  </div>
</template>

<script>
export default {
  name : 'camera_filter',
  data() {
    return {
      selected : ''
    }
  },
  computed: {
      cctvList : function(){
          return this.$store.state.cctvList
      }
  },
  methods: {
    fetchList(){
        this.$http.get('http://www.json-generator.com/api/json/get/cgjAWWiaDC?indent=2')
            .then((rows) => {
                // this.cctvList = rows.data.context.cctvList
                this.$store.state.cctvList = rows.data.context.cctvList
            })
    },
    fetchProfileList(camera_id){
        alert(camera_id)
        // this.$http.get('')
        //     .then((rows) => {
        //         this.cctvList = rows.data.context.cctvList
        //     })
    }
  },
  created() {
      this.fetchList()
  }
}

  
</script>

<style scoped>
.line{
  text-align: center;
}
td{
    text-align: center;
}
table{
  width: 100%;
}
</style>

