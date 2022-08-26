import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );
function graph() {
    const years = [
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021'
      ];
    const config = {
        type: 'line',
        data: 
            {
                labels: years,
                datasets: [{
                    label: 'Проходной балл',
                    fill: true,
                    backgroundColor: 'rgba(171, 200, 234, 0.6)',
                    borderColor: 'rgba(171, 200, 234, 0.6)',
                    data: [120, 200, 100, 230, 170, 140, 200, 165, 1, 200],
                }]
            },
        options: {
          plugins: {
            legend: {
              display: false
            }
          }
        }
    };
    const wrapper = document.querySelector('#myChart');
    const myChart = new Chart(wrapper,config);
}

export default graph;