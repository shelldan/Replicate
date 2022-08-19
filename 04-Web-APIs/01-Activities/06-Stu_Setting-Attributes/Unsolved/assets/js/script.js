// * It's done when all the `<h4>` elements are selected and stored in a single variable.

// * It's done when the text of each `<h4>` is set to `blue`, the font size is `30px`, and the text is `bold`.

// * It's done when the padding to the left of the title is set to `10px` and the margin is set to `0`.

var h4Elements = document.querySelectorAll('h4');
console.log(h4Elements);

h4Elements.setAttribute("style","color:blue; font-size: 30px, font-weight: bold; padding-left: 10px; margin: 0;");
