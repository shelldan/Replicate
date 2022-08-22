//Please link the js file to the html first!!!! 

//structure
{/* <body>
    <div>
        <h1>Welcome to my page</h1>
        <img></img>
        <h2>This is my kitten</h2>
        <p>His name is Jax</p>
    </div>

    <div>
        <h3>My favorite foods are:</h3>
        <ol>
            <li>1. lutefisk</li>
            <li>2. menudo</li>
            <li>3. haggis</li>
            <li>4. vegemite</li>
        </ol>
    </div>

</body> */}

var body = document.body
//console.log(body) // empty, because there is nothing there currently 
var bioDiv = document.createElement("div") //to this diguish this div with other div, we use setAttribute method
var h1El = document.createElement("h1"); //how to ensure that this is under <body>? appendChild
var imgEl = document.createElement("img")
var h2El = document.createElement("h2")
var paraEl = document.createElement("p")
var infoDiv = document.createElement("div")
var h3El = document.createElement("h3")
var orderList = document.createElement("ol")
var list1 = document.createElement("li")
var list2 = document.createElement("li")
var list3 = document.createElement("li")
var list4 = document.createElement("li")

//setAttribute 
bioDiv.setAttribute("id","bioDiv")
imgEl.setAttribute("src","http://placekitten.com/200/300")
imgEl.setAttribute("alt","Kitten")
infoDiv.setAttribute("id","infoDiv")

//styling, with setAttribute
h1El.setAttribute("style","text-align:center")
imgEl.setAttribute("style","display:block; margin-right:auto; margin-left:auto;")
h2El.setAttribute("style","text-align:center")
paraEl.setAttribute("style","text-align:center; font-size:20px;")

h3El.setAttribute("style","font-size:25px; font-weight:bold;")
orderList.setAttribute("style","background-color:grey; margin:10px; padding:20px; ")

//add textContent 
h1El.textContent = "Welcome to my page!" //why it is not showing on the webpage? but I could see it in console.log(), becuase you need to append it under <body>
h2El.textContent = "This is my Kitten"
paraEl.textContent = "His name is Jax."
h3El.textContent = "My favorite foods are:"


// appendChild
body.appendChild(bioDiv)
bioDiv.appendChild(h1El);
bioDiv.appendChild(imgEl);
bioDiv.appendChild(h2El);
bioDiv.appendChild(paraEl);

body.appendChild(infoDiv);
infoDiv.appendChild(h3El)
infoDiv.appendChild(orderList);

var food = ['lutefish','menudo','haggis','vegemite']
var color = ['red','green','blue','aqua']
console.log(food.length) // 4 

// add foodList(lutefish) to listElement
// add variable to store all the food list? variable.textContent=food[i]
// but before that, we need to create the element firstvariable.createElement("li")

for (i=0; i<food.length; i++){
    var foodList = document.createElement("li");
    foodList.textContent = food[i];
    foodList.setAttribute("style","background-color: "+ color[i]); //need to add "background-color: "
    orderList.appendChild(foodList);
}
