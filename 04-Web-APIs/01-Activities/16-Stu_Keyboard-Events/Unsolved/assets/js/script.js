var key = document.getElementById("key")
var code = document.getElementById("code")
var status = document.getElementById("status")

function keydownAction (event){
  var keyPress = event.key;
  var keyCode = event.code;
  key.textContent = keyPress;
  code.textContent = keyCode;
  document.getElementById("status").textContent = "Keydown Event";
  console.log(event);
}

function keyupAction (event){
  document.getElementById("status").innerHTML = "KEYUP Event"
}

document.addEventListener("keydown",keydownAction);

document.addEventListener("keyup", keyupAction);