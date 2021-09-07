var numberOfsquares = 6;
var colors = generateRandomColors(numberOfsquares);

var squares = document.querySelectorAll(".square")
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numberOfsquares = 6;

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfsquares = 3;
    colors = generateRandomColors(numberOfsquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberOfsquares = 6;
    colors = generateRandomColors(numberOfsquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numberOfsquares);
    h1.style.backgroundColor = "steelblue";
    this.textContent = "New colors"
    messageDisplay.textContent = "";
    pickedColor = randomColor();
    for (var i = 0 ;squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    
})

colorDisplay.textContent = pickedColor;
for (var i=0; i< squares.length; i++){

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!";
           resetButton.textContent = "Play again!";
            h1.style.background = clickedColor;
           changeColors(clickedColor);
           
       }
       else{
           this.style.backgroundColor = "transparent";
           messageDisplay.textContent = "Try Again"
           
       }
    })
}

function changeColors(color){
    for(var i=0; squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function randomColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i<num; i++){
        arr.push(anotherRandomColor());
    }
    return arr;
}

function anotherRandomColor(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);

   return "rgb(" + r +", " + g + ", " + b + ")";
}

