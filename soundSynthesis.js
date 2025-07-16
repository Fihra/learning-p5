console.log("hello sound Synthesis");

let wave;

let slider;

let oscStartButton = document.querySelector("#oscStart");
let oscStopButton = document.querySelector("#oscStop");

let env;

oscStartButton.addEventListener("click", () => {
    // wave.start();
    wave.amp(env, 1);
    wave.freq(440);
});

oscStopButton.addEventListener("click" , () => {
    // wave.stop();
    wave.amp(0, 1);
});

function setup(){
    wave = new p5.Oscillator();
    wave.setType('triangle');
    
    env = new p5.Env();
    env.setADSR(0.5, 0.25, 0.5, 0.1);
    env.setRange(0.8, 0);

    slider = createSlider(100, 1200, 440);

}


function draw() {
    wave.freq(slider.value());
}