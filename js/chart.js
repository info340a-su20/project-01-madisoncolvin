'use strict';

//Madison Colvin

/* followed along with tutorials from this website to help visualize my data https://www.chartjs.org/docs/latest/charts/bar.html */
/* Data extracted from https://www.kaggle.com/kwullum/fatal-police-shootings-in-the-us?select=PoliceKillingsUS.csv/ */

async function chartData(){
   let data = await fileData();
   let charts = document.getElementById('chart').getContext('2d');
   new Chart(charts, {
   type: 'bar',
   data: {
      labels: data.xlabels,
      datasets: [{
            label: 'Killings by Police Across the US in 2017',
            data: data.ylabels,
            backgroundColor: 'rgb(0, 131, 214)',
            borderColor: 'rgb(0, 63, 135)',
            borderWidth: 1
      }]
   },
   /* styling from chart tutorial https://www.chartjs.org/docs/latest/charts/bar.html*/
   options: {
      scales: {
            yAxes: [{
               ticks: {
                  beginAtZero: true
               }
            }]
      }
   }
});
};

async function fileData(){
   let xlabels = [];
   let ylabels = [];

   let response = await fetch("PoliceKillings.csv");
   let data = await response.text();
   console.log(data);

   /*splits by rows of data and gets rid of header row*/
   let table = data.split('\n').slice(1);
   table.forEach( row => {
      let columns = row.split(',');
      let state = columns[0];
      //adds the state to the array to be added on the x-axis
      xlabels.push(state);

      let killing = columns[1];
      //adds the num deaths to the array to be added on the y-axis
      ylabels.push(killing);
      console.log(state, killing);
   });
   return{xlabels, ylabels};
}
