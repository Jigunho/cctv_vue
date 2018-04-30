<template>
<div class="container">
    <div class="col-md-12">
        <jounarling_filter></jounarling_filter>
    </div>
    <div class="col-md-12">
        <jounarling_graph></jounarling_graph>
    </div>

</div>
    
</template>
<script>
import jounarling_filter from './filter/index.vue'
import jounarling_graph from './graph/index.vue'
export default {
    name : 'jounarling',
    components : {
        'jounarling_filter' : jounarling_filter,
        'jounarling_graph' : jounarling_graph
    }
}
 

</script>
<style>

</style>