/*JSC.Chart('chartDiv', {
    type: 'horizontal column',
    title_label_text: 
      'Number of Police Shootings in the US in 2017',
    series: [
       {
          points: [
             {x: 'Apples', y: 50},
             {x: 'Oranges', y: 42}
          ]
       }
    ]
 });*/

getData()

async function getData(){
    const response = await fetch('PoliceKillings.csv');
    const data = await response.text();
    /*console.log(data);*/

    /*splits by rows of data and gets rid of header row*/
    const table = data.split('\n').slice(1);
    table.forEach( row => {
        const columns = row.split(',');
        const state = columns[0];
        const killing = columns[1];
        console.log(year, temp);
    });
    console.log(rows);
} 

