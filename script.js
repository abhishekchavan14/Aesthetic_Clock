setInterval(() => {
    d = new Date;
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    hrotation = (h*30) + (m/2);
    mrotation = 6*m;
    srotation = 6*s;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

let home_btn = document.getElementById("home_btn");
let rain_btn = document.getElementById("rain_btn");
let beach_btn = document.getElementById("beach_btn");
let tick_play_btn = document.getElementById("tick_play_btn");
// let tick_pause_btn = document.getElementById("tick_pause_btn");

let rain_video = document.getElementById("myrainVideo");
let beach_video = document.getElementById("mybeachVideo");
let beach_audio = document.getElementById("beach_audio");
let tick_audio = document.getElementById("tick_audio");

let func_rain_play = function(){
    rain_video.style.display = "block";
    rain_video.play();

    beach_video.style.display = "none";
    beach_video.pause();
    beach_video.currentTime = 0;
    beach_audio.pause();
    beach_audio.currentTime = 0;

    document.getElementById("nav").style.opacity = "20%";
    document.getElementById("clock_img").style.opacity = "30%";
    document.getElementById("clock_container").style.opacity = "100%";
    document.getElementById("footer").style.opacity = "0%";
}
let func_beach_play = function(){
    beach_video.style.display = "block";
    beach_video.play();
    beach_audio.play();
    beach_audio.volume = 0.3;
    rain_video.style.display = "none";
    rain_video.pause();
    rain_video.currentTime = 0;
    document.getElementById("nav").style.opacity = "20%";
    document.getElementById("clock_img").style.opacity = "30%";
    document.getElementById("clock_container").style.opacity = "100%";
    document.getElementById("footer").style.opacity = "0%";
}

let func_tick_play = function(){
    tick_audio.play();
    document.body.style.backgroundColor = "black";
    document.getElementById("footer").style.visibility = "hidden";
    rain_btn.style.visibility = "hidden";
    beach_btn.style.visibility = "hidden";
    tick_play_btn.style.visibility = "hidden";
    document.getElementById("nav_2").style.visibility="hidden";
    document.getElementById("hour").style.backgroundColor="white";
    document.getElementById("minute").style.backgroundColor="white";
    home_btn.style.color="white";
    home_btn.style.opacity="100%";
    beach_video.style.display = "none";
    beach_video.pause();
    beach_video.currentTime = 0;
    beach_audio.pause();
    beach_audio.currentTime = 0;
    rain_video.style.display = "none";
    rain_video.pause();
    rain_video.currentTime = 0;
}
home_btn.addEventListener('click',function() {
    location.reload();
})
rain_btn.addEventListener('click',func_rain_play);
beach_btn.addEventListener('click',func_beach_play);
tick_play_btn.addEventListener('click',func_tick_play);
home_btn.addEventListener('click',func_home);