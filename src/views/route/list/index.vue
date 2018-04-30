<template>
<div class="col-md-12">
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>자세히</th>
      </tr>

      </thead>
      <tbody>
        <tr v-for="post of posts" v-bind:key="post.id">
          <td>{{  post.id }}</td>
          <td>{{  post.name }}</td>
          <td><el-button @click="showModal" >이미지 보기</el-button></td>                      
        </tr>             
      </tbody>
  </table>

  <div v-if="this.$store.state.routeModal">
    <route_modal></route_modal>
  </div>
</div>

</template>

<script>
import route_modal from '../modal/index.vue'
export default {
  data() {
    return {
        posts: [],
        errors: []
    }
  },
  components : {
      'route_modal' : route_modal
  },

  methods: {
    getList : function() {
      this.$http.get('http://www.json-generator.com/api/json/get/bOiLYWIHSa?indent=2')
      .then((result) => {
        this.posts = result.data
      }).catch((e) =>{
        this.posts = [{id : 1, name :';;'}]
      })
    },
  
    test(evt){
      evt.preventDefault()
      this.clearGrid()
      this.$refs.modal.hide()
    },
    showModal : function(){
      this.$store.state.routeModal = true
    }


  },
  // Fetches posts when the component is created.
  created () {
    this.getList()
  }
}
</script>
<style>


</style>
