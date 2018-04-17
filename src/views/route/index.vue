<template>
    
    <div class="app-container" id="jounarling-container">
    
        <table>
            <thead>
                <tr>
                   <th>id</th>
                   <th>name</th>
                </tr>

            </thead>
            <tbody>

                <tr v-for="post of posts" v-bind:key="post.id">
                      <td>{{  post.id }}</td>
                      <td>{{  post.name }}</td>

                </tr>
               

            </tbody>

        </table>

    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  methods: {
    getList : function() {
      axios.get('http://www.json-generator.com/api/json/get/bOiLYWIHSa?indent=2')
      .then((result) => {
        this.posts = result.data
      }).catch((e) =>{
        this.posts = [{id : 1, name :';;'}]
      })
    }
  },
  // Fetches posts when the component is created.
  created () {
    this.getList()
  }
}
</script>

<style>

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

</style>