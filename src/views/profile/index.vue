<template>
<div class="container">
    <profile_filter></profile_filter>
    <profile_list></profile_list>
</div>
</template>


<script>
import profile_filter from './filter/index.vue'
import profile_list from './list/index.vue'
export default {
    name : 'profile_form',
    components : {
        'profile_filter' : profile_filter,
        'profile_list' : profile_list
    }
}
</script>

