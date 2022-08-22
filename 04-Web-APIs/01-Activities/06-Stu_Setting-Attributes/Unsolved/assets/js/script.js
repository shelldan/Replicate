var site1 = document.querySelector('.site1') //select the entire parent <div> element
var site2 = document.querySelector('.site2')
var site3 = document.querySelector('.site3')

site1.children[0].textContent='Site 1';
//console.log(site1.children[1].children[0]).setAttribute("src","./assets/images/image_1.jpg")//Cannot read property 'setAttribute' of null error occurs when trying to call the setAttribute method on a null value
site1.children[1].children[0].setAttribute("src","./assets/images/image_1.jpg")
site1.children[1].children[0].setAttribute("alt","man working")
site1.children[1].children[0].setAttribute("style","padding: 10px")

