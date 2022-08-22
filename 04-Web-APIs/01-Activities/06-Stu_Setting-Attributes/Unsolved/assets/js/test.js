// * It's done when all the `<h4>` elements are selected and stored in a single variable.

// * It's done when the text of each `<h4>` is set to `blue`, the font size is `30px`, and the text is `bold`.

// * It's done when the padding to the left of the title is set to `10px` and the margin is set to `0`.

var h4Elements = document.querySelectorAll('h4'); //select all 3 <4> elements 
console.log(h4Elements); // all 3 <h4> elements 
console.log(h4Elements.length) //3

// h4Elements.setAttribute("style","color:blue; font-size: 30px, font-weight: bold; padding-left: 10px; margin: 0;"); //Uncaught TypeError: h4Elments.setAttribute is not a function


//When using querySelectorAll(), treat this as an array, you need a for loop to step through the different elements.
for(i=0; i<h4Elements.length;i++){
   h4Elements[i].setAttribute("style","color:blue; font-size: 30px; font-weight: bold; padding-left: 10px; margin:0;");
}

//If there is a specific element that you want to select, use getElementById
var testing = document.getElementById('testing');
testing.setAttribute("style","color:red") //method 1
//testing.style.color='red' //method 2

//you could use child/parent relationship to style a specific element (if there are multilple same element)
h4Elements[1].setAttribute("style","color: green; font-size: 30px; font-weight: bold; padding-left: 10px; margin: 0;")


var example1=document.getElementById('example 1')
example1.textContent="Example 1" // adding text 
example1.style.color='lightblue'