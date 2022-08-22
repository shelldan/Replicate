var decrementEl = document.getElementById("decrement")
var incrementEl = document.getElementById("increment")
var countEl = document.getElementById("count")

var count=0;



function countText (){
  countEl.textContent = count;
}

incrementEl.addEventListener("click",function(){
  count = count + 1;
  countText();
})

decrementEl.addEventListener("click",function(){
  if(count>0){
    count = count -1;
    countText()
  } else{
    count = 0;
  }
})