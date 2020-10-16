//tipos de dados
// String"", Number 01, object {}, Boolean true or false, Array []"//


const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false,
}

//get values from html 

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//create map
const map = L.map('mapid', options).setView([lat,lng], 15);


//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);




//create icon
const icon = L.icon({
iconUrl: "/images/map-marker.svg",
iconSize: [58, 68],
iconAncor: [29, 68],
popupAncor: [170, 2],

})


//create and add marker
L
.marker([lat,lng], { icon })
.addTo(map)

/*image galery */

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    //remover todas as classes .active
const buttons = document.querySelectorAll(".images button")
buttons.forEach(removeActiveClass)

function removeActiveClass(button) {
    
}
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para este botão
    button.classList.add('active')
}