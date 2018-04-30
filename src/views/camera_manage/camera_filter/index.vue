<template>
    <div class="container" style="height : 500px;" >
      <div class="row" >
        <label>CCTV 선택 </label>
        <!-- <el-select v-model="cc" placeholder="please select your zone">
          <el-option v-for="item in cctvList" v-bind:key="item.id" label="item.name" value="item.name"></el-option>
        </el-select> -->
        <select class="selectpicker" v-model="selected">
            <option v-for="item in cctvList" v-bind:key="item.id">{{item.name}}</option>
        </select>

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
      selected : 'dda'
    }
  },
  computed: {
      cctvList : function(){
          return this.$store.state.cctvList
      }
  },
  methods: {

  },
  created() {

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

