//Global Variables
var clueHoldTime = 800;
var cluePauseTime = 333;
var nextClueWaitTime = clueHoldTime;
var pattern = [];
for(let i=0;i<=8;i++){
    pattern.push(1 + getRandomInt(8));
}
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var failure = 0;

var time = 18000;
var s1 = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function start(){
  if(s1 == 0){
    time--;
    document.getElementById("time").innerHTML = time/100 + " second";
  }
  setTimeout("start();", 1);
}

function restart(){
  s1 = 0;
}

function pause(){
  s1 = 1;
}

function zero(){
  time = 18000;
  document.getElementById("time").innerHTML = time/100 + " second";
  pause();
}

function startGame(){
    //initialize game variables
    progress = 0;
    failure = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("doge").classList.remove("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    changeBackgroundcolorto();
    
    if(s1 == 0){
      start();
    }
    else{
      restart();
    }
    if(clueHoldTime != 800){
      clueHoldTime = 800;
    }
    playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("doge").classList.add("hidden");
  zero();
  changeBackgroundcolorback();
}

function changeBackgroundcolorto(){
  document.body.style.backgroundColor = "#344CB7";
}

function changeBackgroundcolorback(){
  document.body.style.backgroundColor = "#323232";
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.66,
  3: 329.62,
  4: 349.22,
  5: 391.99,
  6: 440,
  7: 493.88,
  8: 523
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function(){
    stopTone();
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 70;
  cluePauseTime -= 20;
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
        pause();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }
  else{
    failure += 1;
    if(failure == 3){
      zero();
      loseGame();
    }
    else{
      if(failure == 1){
        alert("Chance left: 2");
        playClueSequence();
        return;
      }
      if(failure == 2){
        alert("Chance left: 1");
        playClueSequence();
        return;
      }
    }
  }
}  