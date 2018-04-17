import { Line } from './BaseCharts'

export default {
  extends: Line,
  
  data () {
    return {
      datacollection: {
      //Data to be represented on x-axis
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'UNIQLO',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 60, 40]
          },
          {
            label: 'ZARA',
            backgroundColor: '#3f12ff',
            data: [10,20,30,40,50,60,70]
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
    
  },
  mounted (){
    //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
  }
}
