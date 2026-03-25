// --------------------

var map = L.map('map').setView([20,0],2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution:'OpenStreetMap'
}).addTo(map);

L.marker([44,-78]).addTo(map).bindPopup("Canada");
L.marker([40,-3.7]).addTo(map).bindPopup("Spain");


// --------------------

const ctx = document.getElementById('chart');

new Chart(ctx,{
  type:'bar',

  data:{
    labels:['Landfill','Recycling','Compost'],
    datasets:[{
      label:'Waste Data',
      data:[120,80,40],   // ← CHANGE DASHBOARD NUMBERS HERE
      backgroundColor:['brown','yellow','green']
    }]
  }
});


// --------------------

const counters = document.querySelectorAll(".counter h2");

// CHANGE THESE NUMBERS
const targets = [2,25,2];

counters.forEach((counter, index) => {

  let count = 0;
  const target = targets[index];

  const updateCounter = () => {

    if(count < target){
      count++;
      counter.innerText = count;
      setTimeout(updateCounter,50);
    } else {
      counter.innerText = target;
    }

  };

  updateCounter();

});
