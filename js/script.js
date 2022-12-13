//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

/*next.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    //incremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi

    //Vado a cambiare nome alla variabile in modo tale da poi poter togliere la classe active e aggiungerla all'altra

    const lastActiveItem = items[itemActive]
    const lastCircleActive = circles[itemActive]

    // se itemActive è a 4 ==> itemactive = 0
    // altrimenti ==> itemActive = itemActive + 1

    if(itemActive == (items.length - 1)){
       
        itemActive = 0
    }
    else{
        
        itemActive = itemActive + 1;
    }
    
    const ActiveItem = items[itemActive]
    const CircleActive = circles[itemActive]

    // aggiungo e rimuovo la classe active

    ActiveItem.classList.add('active')
    lastActiveItem.classList.remove('active')

    CircleActive.classList.add('active')
    lastCircleActive.classList.remove('active')


})*/


/*prev.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    //decremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi


    const lastActiveItem = items[itemActive]
    const lastCircleActive = circles[itemActive]

    if(itemActive == 0){
       
        itemActive = items.length - 1
    }
    else{
        
        itemActive = itemActive - 1;
    }
    

    const ActiveItem = items[itemActive]
    const CircleActive = circles[itemActive]

    ActiveItem.classList.add('active')
    lastActiveItem.classList.remove('active')

    CircleActive.classList.add('active')
    lastCircleActive.classList.remove('active')

})*/



function autoplay(){
    const lastActiveItem = items[itemActive]
    const lastCircleActive = circles[itemActive]
    
    if(itemActive == (items.length - 1)){
        itemActive = 0
    }
    else{
        itemActive = itemActive + 1
    }
    
    const ActiveItem = items[itemActive]
    const CircleActive = circles[itemActive]
    
    ActiveItem.classList.add('active')
    lastActiveItem.classList.remove('active')
    CircleActive.classList.add('active')
    lastCircleActive.classList.remove('active')
}

let myInterval = setInterval(autoplay,1000)

document.getElementById('play').addEventListener('click',function(){

   myInterval = setInterval(autoplay,1000)
    
})

document.getElementById('stop').addEventListener('click',function(){

    clearInterval(myInterval)
    
})






