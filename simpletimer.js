let roomTotalTime = 130;


const countdown = setInterval(function(){

  let seconds = 60;
  let minutes = 60;

  let minutesLeft = Math.trunc(roomTotalTime / minutes)
  
  let secondsLeft = Math.trunc(roomTotalTime % minutes)
  
  // let minutesLeft = Math.trunc(roomTotalTime % minutes);
  
   // let secondsLeft = (roomTotalTime / minutes) / seconds;

  //Forget CUP, let's modify directly for time
  // document.querySelector('#minutes').innerHTML = minutesLeft + ' Minutes';

  // document.querySelector('#seconds').innerHTML = secondsLeft + ' Seconds';
console.log(minutesLeft);
  console.log(secondsLeft);

roomTotalTime--;

if(roomTotalTime < 0 ){
clearInterval(countdown);
}

},1000)