<template>
<div class="row">
    <div class="col-md-6" v-for="item in profile_list" v-bind:key="item.id" style="float : left">
        <div class="card" style="height : 300px;">
            <div class="card-header">
                <label>cctv list</label>
            </div>
            <div class="card-content">

            </div>
        
        </div>
    </div>
</div>
</template>


<script>
export default {
    name : 'profile_filter',
    data () {
        return {
            profile_list : [ {} , {}, {}]
        }
    },
    methods : {
        getProfileList() {
            this.$http.get('')
        }
    }
    
}
</script>