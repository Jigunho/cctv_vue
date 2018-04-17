import { Scatter } from './BaseCharts'

export default {
  extends: Scatter,
  mounted () {
    this.renderChart({
      datasets: [{
        label: 'Scatter Dataset 1',
        fill: true,
        borderColor: '#f87979',
        backgroundColor: '#f87979',
        data: [{
          x: -2,
          y: 4
        }, {
          x: -1,
          y: 1
        }, {
          x: 0,
          y: 0
        }, {
          x: 1,
          y: 1
        }, {
          x: 2,
          y: 4
        }]
      },
      {
        label: 'Scatter Dataset 2',
        fill: true,
        borderColor: '#7acbf9',
        backgroundColor: '#7acbf9',
        data: [{
          x: -2,
          y: -4
        }, {
          x: -1,
          y: -1
        }, {
          x: 0,
          y: 1
        }, {
          x: 1,
          y: -1
        }, {
          x: 2,
          y: -4
        }],
        options: {
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom'
              }]
          }
      }
      }]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
