let song;

let sliderVolume;
let sliderRate;
let sliderPan;

let testButton;
let jumpButton;

let amp;


function preload() {
    
}

function setup() {
    createCanvas(200, 200);
    song = loadSound("rebirth_test.wav", loaded);
    song.setVolume(0.5);

    amp = new p5.Amplitude();

    jumpButton = createButton("jump");
    jumpButton.mousePressed(jumpSong);

    sliderRate = createSlider(0, 3, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0.5, 0.01);
    console.log("hooked");
    background(0);
    song.addCue(2, changeBackground, color(0,0,255));
    song.addCue(4, changeBackground, color(0,255,255));
    song.addCue(6, changeBackground, color(255,255,255));
    

}

function loaded() {
    console.log('loaded');

    testButton = createButton("playyyyy");
    testButton.mousePressed(togglePlaying);
}

function changeBackground(col){
    console.log("huh");
    background(col);
    // background(random(255), random(255), random(255));
}

function togglePlaying() {
    if(!song.isPlaying()) {
        song.play();
    } else {
        song.pause();
    }
    
}

function jumpSong(){
    let lengthOfSong = song.duration();
    let point = random(lengthOfSong);
    console.log(point);

    song.jump(point);
    // song.jump(lengthOfSong / 2);
}

const playButton = document.querySelector("#pressMe");
const stopButton = document.querySelector("#stopMe");

playButton.addEventListener("click", () => {

        if(song.isLoaded()){
            song.play();
        } 

        if(song.isPlaying()){
            song.stop();
            song.play();
        }

})

stopButton.addEventListener("click", () => {
    if(song.isPlaying()){
        song.stop();
    }
})


function draw() {
    background(51);

    let volume = amp.getLevel();
    let diameter = map(volume, 0, 0.5, 10, 200);

    fill(255,0,255);
    ellipse(width/2, height/2, diameter, diameter);

    // song.setVolume(slider.value());
    song.pan(sliderRate.value());
    song.rate(sliderPan.value());


    // background(song.currentTime() * 10,0,255);
}