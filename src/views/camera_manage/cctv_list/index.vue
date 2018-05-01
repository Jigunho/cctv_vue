<template>
<div class="container">
    <div class="card">
        <div class="card-header"  data-background-color="green">
            <label>cctv list</label>
        </div>
            
        <div class="card-content">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>지역</th>
                        <th>설명</th>
                        <th>자세히 보기</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-for="(item, index) in list" v-bind:key="item.id">
                        <td>{{index+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.location}}</td>
                        <td>{{item.description}}</td>
                        <td><button>보기</button> </td>

                    </tr>

                </tbody>

            </table>

        </div>
    </div>
        
</div>

</template>
<style>
table{
    text-align: center;
    width: 100%
}
</style>
<script>
export default {
    name : 'cctv_list',
    data () {
        return {
            // list : []
        }
    },
    computed: {
        list: function(){
            return this.$store.state.cctvList
        }
    },

    methods : {
       
    },

    created () {

    }

}
</script>