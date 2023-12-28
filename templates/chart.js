const chartData={
  labels: ['anger','anticipation','disgust','fear','joy','love','optimism','pessimism','sadness', 'surprise','trust'],
  data: [1, 4, 3, 5, 2, 3,6,7,8,9,10],
};



const ctx = document.getElementById('barchart');
const ul=document.querySelector(".container .details ul")

  const barchart =new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.labels,
      datasets: [{
        label: '# of emotion',
        data: chartData.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 195, 64, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 195, 64, 0.2)'
        ],
        borderColor :[
          'rgba(255, 195, 123, 1)',
          'rgba(255, 195, 235, 1)',
          'rgba(255, 195, 86, 1)',
          'rgba(255, 195, 192, 1)',
          'rgba(255, 195, 255, 1)',
          'rgba(255, 195, 64, 1)',
          'rgba(255, 195, 235, 1)',
          'rgba(255, 195, 86, 1)',
          'rgba(255, 195, 192, 1)',
          'rgba(255, 195, 123, 1)',
          'rgba(255, 195, 255, 1)'
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const populateUl=() => {
  chartData.labels.forEach((l,i) => {
    let li = document.createElement("li");
    li.innerHTML=`${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();