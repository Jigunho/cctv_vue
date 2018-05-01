<template>
<div>
      <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
               header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <div style="position: relative;">
                    <canvas id="frameImage" width="510px;" height="350px"></canvas>

                    <img src="/static/img/grid.png" width="510px" height="350px">
                </div>
                <div>
                  <input type="text" style="margin-top: 10px; height: 100px; width: 100%;" value="description 자리">
                </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            <button @click="drawGrid('101_202_303')">grid 그리기</button>

              <button class="modal-default-button" @click="hideModal">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
    methods : {
        hideModal : function(){
            this.$store.state.routeModal = false
        },

        clearGrid : function() {

        var canvas = document.getElementById("frameImage");
        var context = canvas.getContext("2d");
        context.clearRect(0,0,canvas.width,canvas.height);

        },

        drawGrid(grid_list){

            var gridList = grid_list.split('_');   
            var canvas = document.getElementById("frameImage");
            var context = canvas.getContext("2d");
            
            var x,y, xx = canvas.width , yy = canvas.height , nx = 10, ny = 10;
            context.beginPath();
            context.moveTo(0,0);
            context.lineTo(xx,0);
            for (x = 0; x <= nx; x++) {
                y = xx * x / nx;
                context.moveTo(y,0);
            context.lineTo(y, yy);
            }
            context.closePath();
            context.lineWidth = 2;
            context.strokeStyle = "#000000";
            context.stroke();
            context.beginPath();
            for( y = 0; y<= ny ; y++){
                x = yy * y / ny;
                context.moveTo(0,x);
                context.lineTo(xx,x);
            }
        
            context.closePath();
            context.lineWidth = 2;
            context.strokeStyle = "#000000";
            context.stroke();
            for(var i=0;i<gridList.length;i++){
                var grid = gridList[i];
                var x_y = grid.split('0');
                context.beginPath();
                var startX = parseInt(x_y[0]) - 1;
                var startY = parseInt(x_y[1]) -1; 
                context.rect( startX * xx/nx , startY * yy/ny , xx/nx ,  yy/ny );
                context.fillStyle =  "rgba(255, 0, 0, 0.5)";
                context.fill();

            }
        }

    },
    created () {

    }
    
  
}
</script>

<style>
#frameImage{
  position: absolute;
  left: 0;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
