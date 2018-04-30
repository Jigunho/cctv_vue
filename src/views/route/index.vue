<template>
 
<div class="container">
  <route_filter></route_filter>
  <route_list></route_list>
</div>

  
</template>

<script>
import route_list from './list/index.vue'
import route_filter from './filter/index.vue'
export default {
  components: {
    'route_filter' : route_filter,
    'route_list' : route_list
  }
}
</script>

<style>

</style>