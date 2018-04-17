<template>

 <div id="app">
   <section class="container">
      <div class="column">
        <h3>평균 속도</h3>
            <line-chart :data="chartData"></line-chart>
      </div>
    
      <div class="column">
        <h3>지나간 차량 수</h3>
            <line-chart :data="chartData"></line-chart>
      </div>

      <div class="column">
        <h3>평균 사이즈</h3>
            <line-chart :data="chartData"></line-chart>
      </div>
    
  </section>
</div>
</template>

<script>

export default({
   name: 'app',
   data () {
      return {
         chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]]
      }  
   }
});
</script>

<style>
h1 {
   text-align: center;
   margin-top: 20px;
   margin-bottom: 30px;
}
.container {
   padding: 20px;
}
</style>