// TODO: Which element is the following line of code selecting?
// div with the class name of carouselbox on line 16 of the HTML 
var carousel = document.querySelector(".carouselbox");

// TODO: Which element is the following line of code selecting?
// class next on line 20 of the HTML
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// when click on the image, go to the url of the image you clicked on 
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// goese to the next picture in the carousel
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // show it doesn't go to the picture's url 
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// Goes back one image in the carousel
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // it would go to the picture's url due to event bubbling
    // event.stopPropgation();
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
