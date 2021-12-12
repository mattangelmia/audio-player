const musicContainer = document.querySelector('.music-container')
const prevBtn = document.querySelector('#prev')
const playBtn= document.querySelector('#play')
const pauseBtn= document.querySelector('#pause')
const nextBtn = document.querySelector('#forward')
const audio = document.querySelector('#beat')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

const carouselImage = document.querySelector("#carousel-img")
const nextImage = document.querySelector(".next")
const previousImage = document.querySelector(".previous")


const carouselImages = [{
    name: 'image1',
    source: './carouselImages/image1.jpeg',

},
{
    name: 'image2',
    source: './carouselImages/image2.jpeg', 

},
{
    name: 'image3',
    source: './carouselImages/image3.jpeg' 
}]

let carouselIndex = 0
function loadCarouselImage(image){
carouselImage.src = image.source
}
loadCarouselImage(carouselImages[carouselIndex])


nextImage.addEventListener('click', function(){
    carouselIndex ++
    if(carouselIndex > carouselImages.length-1){
        carouselIndex = 0
    }
    console.log(carouselIndex)
    loadCarouselImage(carouselImages[carouselIndex])
})

// function loadImage(){
//     cover.src = `./covers/newimage.jpeg`
// }

// loadImage()
// beat names
const beats = ['beat1','beat2','beat3']
const tracks=  [
{
name: "beat1",
src: " ./Beats/beat1.mp3"
},

{
    name: "beat2",
    src: "./Beats/beat2.mp3"
}


]

// keep track of each beat

let beatIndex = 0
// load inital beat into DOM
// making a function that takes beats array with whatever beat index is
loadBeat(beats[beatIndex])

// update beat details
function loadBeat(beat){
title.innerText = beat
audio.src = `./Beats/${beat}.mp3`
cover.src = `./covers/${beat}.jpeg`
}
// make functions for pausing and playing
let isPlaying = false
function playBeat(){


}

function pauseBeat(){

}


// Listen for click event on play button 

playBtn.addEventListener("click", function(){

playBtn.style.display = "none"
pauseBtn.style.display = "inline"

audio.play()

})

pauseBtn.addEventListener("click", function(){

    playBtn.style.display = "inline"
    pauseBtn.style.display = "none"
    
    audio.pause()
    })

// pervious and next song events 

// decreases beat index by 1, checks if beat index is less than 0, if it is, it goes to the last song

prevBtn.addEventListener('click', function(){
    beatIndex--
    playBtn.style.display = "none"
    pauseBtn.style.display = "inline"
if(beatIndex < 0){
    beatIndex = beats.length - 1
}
console.log(beatIndex)
loadBeat(beats[beatIndex])
audio.play()
})


nextBtn.addEventListener('click', function(){
    beatIndex++
    playBtn.style.display = "none"
    pauseBtn.style.display = "inline"

    if(beatIndex > beats.length-1){
        beatIndex = 0
    }
    
    loadBeat(beats[beatIndex])
    audio.play()
console.log(beatIndex)

})