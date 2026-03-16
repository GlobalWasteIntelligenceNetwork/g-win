var map = L.map('map').setView([20,0],2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'OpenStreetMap'
}).addTo(map);

L.marker([40.7,-74]).addTo(map).bindPopup("New York");

L.marker([51.5,-0.1]).addTo(map).bindPopup("London");

const ctx=document.getElementById('chart');

new Chart(ctx,{

type:'bar',

data:{
labels:['Landfill','Recycling','Compost'],
datasets:[{
label:'Waste Data',
data:[120,80,40],
backgroundColor:['red','blue','green']
}]
}

});