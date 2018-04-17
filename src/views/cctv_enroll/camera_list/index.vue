<template>

<div>
    <div>
        <h1>camera 목록</h1>
    </div>
    <div id="list-table">
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rindex) of list">
                    <td>
                        {{ row.id }}
                    </td>

                    <td>
                        {{ row.name}}
                    </td>
                   
                </tr>
            </tbody>

        </table>
       <!-- <table>
           <tbody>
            <tr v-for="item in list" v-bind:key="list.id">

               <td>{{item.id}}</td>
               <td>{{item.name}}</td>
            </tr>
           </tbody>
       </table> -->
    </div>
    
</div>
</template>


<script>

import request from '../../../api/camera_enroll'
import axios from 'axios'
export default{

    name: 'camera_list',
    data () {

        return {
            list : [
                {id : 1, name : 'aa' },
                {id : 2, name : 'aa' },
                {id : 3, name : 'aa' }
            ]
        }
    },

    computed : {
        columns : function(){
            if(list.length == 0){
                return []
            }
            return Object.keys(this.list[0])
        }

    },


    methods : {
        makeTable : function() {
            var len = this.list.length
        },
        getList : function() {
        //   this.list = request.getCameraList()
            axios.get('http://www.json-generator.com/api/json/get/bOiLYWIHSa?indent=2')
            .then((result) => {
                this.list = result.data
            }).catch((e) => {
                alert(e)
            })
        }
    },

    created : function() {
        this.getList()
    }
}


</script>