//tipos de dados
// String"", Number 01, object {}, Boolean true or false, Array []"//




//create map
const map = L.map('mapid').setView([-27.2108626,-49.6559162], 16);


//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);




//create icon
const icon = L.icon({
iconUrl: "/images/map-marker.svg",
iconSize: [58, 68],
iconAncor: [29, 68],
popupAncor: [170, 2]

})


function addMarker({id, name, lat, lng}){
    
//create popup orverlay | popup config
const popup = L.popup({
    closeButton:false,
    className:"map-popup",
    minWidth:240,
    minHeight:240
}).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg" > </a>`)


//create and add marker

L
.marker([lat, lng], { icon })
.addTo(map)
.bindPopup(popup)


}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
console.log(orphanagesSpan)
orphanagesSpan.forEach( span =>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,


    }

    //console.log(span.dataset.lat)
    //console.log(span.dataset.lng)

    
    addMarker(orphanage)


})
