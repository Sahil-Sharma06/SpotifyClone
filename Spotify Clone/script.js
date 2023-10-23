console.log("Welcome to spotify");
 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName : "Warriyo - Mortals" , filePath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName : "Cielo - Huma Huma" , filePath : "songs/2.mp3" , coverPath : "covers/2.jpg"},
    {songName : "DEAF KEV - Invincible" , filePath : "songs/3.mp3" , coverPath : "covers/3.jpg"},
    {songName : "Different Heaven & EHIDE - My Heart" , filePath : "songs/4.mp3" , coverPath : "covers/4.jpg"},
    {songName : "Janji Heroes - Tonight" , filePath : "songs/5.mp3" , coverPath : "covers/5.jpg"},
    {songName : "Better - Khalid" , filePath : "songs/6.mp3" , coverPath : "covers/6.jpg"},
    {songName : "Counting Stars - OneRepublic" , filePath : "songs/7.mp3" , coverPath : "covers/7.jpg"},
    {songName : "On my way - Alan Walker" , filePath : "songs/8.mp3" , coverPath : "covers/8.jpg"},
    {songName : "Die for you - Valorant" , filePath : "songs/9.mp3" , coverPath : "covers/9.jpg"},
    {songName : "Shape of you - Ed Sheeran" , filePath : "songs/10.mp3" , coverPath : "covers/10.jpg"}
]

songItems.forEach((element,i)=>{
      element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
      element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Listen to events 

// Handle play/pause click 

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// myProgressBar handling 
audioElement.addEventListener('timeupdate',()=>{
    // Update seek bar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

}) 

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration/100);
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlay();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    })
})



