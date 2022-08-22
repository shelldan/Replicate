//Please link the js file to html

// need to show the timeLeft - countdown 
// set the timeleft = 5 seconds
// each second will 
var timerEl = document.getElementById("countdown")



// before the timeleft, we will hide the message (so we need a switch?)
// after the timeleft = 0, we will show the message 
// we will show the message on the paragraph
// we will split the message into words 
// each second will dsiplay a word 

var mainEl = document.getElementById("main");
mainEl.textContent // place-holder 

var message = "Alawys have eyes that see the best a heart that forgives the worst a mind that forgets the bad and a soul that never loses hope"
var word = message.split(' ')

//console.log(word)
//console.log(word.length)

// iteration function
// we need a display message function; inside the function, we want to display a word in a second 
// we will need setInterval function (to repeatly call the display message function) 
// we need a variable to iterate, start the variable count = 0; and then increment by 1





function callMessage (){
  var count = 0; 

  var msgInterval = setInterval(function(){
      if (word[count] === undefined){
        clearInterval(msgInterval)
      }else{
        mainEl.textContent = word[count];
        count++;
      }
  },1000);
}




// This function below demonstrate the setInterval()
// setInterval(function(){
//   console.log("Hi");
// },1000)


//we need a function; inside the function, we want to display the timeleft after each second 
// let say the timeLeft = 5s, then each second pass, it will decrease the timeLeft 
// and display the message of " ... seconds left"
// that means you will repeat the function, which will use setInterval 
// if the timeLeft = 0, we want to stop the repetition
// since clearInterval will takes parameter associate with the setInterval
// we need to set the variable to setInterval 
// we will display the message 

var timeLeft = 5;

var timeInterval = setInterval(countdown, 1000)


function countdown (){
  timeLeft --;
  timerEl.textContent=( timeLeft + " seconds left")

  if (timeLeft === 0){
    clearInterval(timeInterval)
    callMessage()
  }
}




//------------------Youtube: JavaScript Tutorial | setInterval & clearInterval (Anagh Tehcnologies Inc.)------------//

// declare the variable to 0
//var count = 0; 

// after every second, it will excute showMsg function 
//var obj = setInterval(showMsg, 1000) //now it is counting 

// create a function to display the variable, and we want to increment it by every second
// function showMsg(){
//   console.log(count);
//   count++;
//   if (count==6){
//     clearInterval(obj);
//   }
// }

// if you want to stop the interval, you need to clearInterval(), which takes the parameter/variable associate with setInterval 
// therefore we need to assign the varialbe to setInterval 
// if we want to clear it at specific time, we will put the if condition 