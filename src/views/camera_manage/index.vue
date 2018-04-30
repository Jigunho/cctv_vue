<template>
<div>
    <div class="row">
        <div class="col-md-6">
            <camera_filter></camera_filter>
            <!-- <map_form></map_form> -->

        </div>
        
        <div class="col-md-6">
            <map_form></map_form>
        </div>
    </div>


    <div class="row">
        <div class="col-md-12">
            <cctv_list></cctv_list>
        </div>

    </div>

</div>
</template>
<style>
.column_half{
    float: left;
    width: 50%;
}
</style>

<script>
import camera_filter from './camera_filter/index.vue'
import cctv_list from './cctv_list/index.vue'
import map_form from './map/index.vue'
export default {
    name : 'camera_manage',
    data() {
        return {

        }
    },
    components: {
        'camera_filter' : camera_filter,
        'cctv_list' : cctv_list,
        'map_form' : map_form
    }
}
</script>
