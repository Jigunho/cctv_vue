<template>

<div class="container">
    <div class="row">
        <h1>camera data filed 추가 -</h1>
    </div>
 
    
    <div class="row">
        <List></List>
    </div>
</div>
</template>
<script>


import List from './camera_list/index.vue'

export default{
    name: 'camera_enroll',
    data() {
        return {

        }
    },

    components: {
        'List': List
    },
}



</script>

<style>
.container{
    margin-top : 10px;
    margin-left : 10px;
}
</style>