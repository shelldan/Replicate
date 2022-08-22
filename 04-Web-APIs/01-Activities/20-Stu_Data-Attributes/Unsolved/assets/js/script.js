var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  console.log(event);

  

  // TODO: Complete function

  // * It's done when I click on a card and the hidden number is revealed.

  // * It's done when the number is visible if the card is clicked. 

  if(element.matches(".box")){
    if(element.dataset.state === 'hidden'){
      element.setAttribute("data-state","banana"); // it doesn't matter what you call, you could call "show"
      element.textContent = element.dataset.number;
    } else{
      element.setAttribute("data-state","hidden");
      element.textContent = '';
    }
  }
});
