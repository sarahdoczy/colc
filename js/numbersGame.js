/*On page load, an image appears with a certain number of items (1-10).
have 3 pics of each number (3 x 10 = 30).
A randon picture appears on page load.

User is asked to select "How many items are in the picture".
If user selects correct number, a message appears "Congratulations. That's right! There are 10 dogs".
User then clicks button to get a new image.

If user selects incorrect number, a message appears "Sorry, try again". */


// 2 pictures of each 'number' of objects

// CONSTANTS
//var _RESULTS = "results";
//


// GLOBAL VARIABLES
var randomNumber = 0;
var arrayOfImages = new Array();
// 

arrayOfImages.push({image:'images/numberGameImages/1_bee.png',value: 1, description: 'bee'},
                  {image:'images/numberGameImages/1_pony.png',value: 1, description: 'pony'},
                  {image:'images/numberGameImages/2_candles.png',value: 2, description: 'candles'},
                  {image:'images/numberGameImages/2_redSocks.png',value: 2, description: 'red socks'},
                  {image:'images/numberGameImages/3_IceCreams.png',value: 3, description: 'ice cream cones'},
                  {image:'images/numberGameImages/3_tulips.png',value: 3, description: 'tulips'},
                  {image:'images/numberGameImages/4_owls.png',value: 4, description: 'owls'},
                  {image:'images/numberGameImages/4_ponys.png',value: 4, description: 'ponys'},
                  {image:'images/numberGameImages/5_butterflies.png',value: 5, description: 'butterflies'},
                  {image:'images/numberGameImages/5_muffins.png',value: 5, description: 'muffins'},
                  {image:'images/numberGameImages/6_hearts.png',value: 6, description: 'hearts'},
                  {image:'images/numberGameImages/6_Trees.png',value: 6, description: 'trees'},
                  {image:'images/numberGameImages/7_balloons.png',value: 7, description: 'balloons'},
                  {image:'images/numberGameImages/7_lipstick_colors.png',value: 7, description: 'lipstick colors'},
                  {image:'images/numberGameImages/8_buttons.png',value: 8, description: 'buttons'},
                  {image:'images/numberGameImages/8_ribbons.png',value: 8, description: 'ribbons'},
                  {image:'images/numberGameImages/9_colored_pencils.png',value: 9, description: 'colored pencils'},
                  {image:'images/numberGameImages/9_squares.png',value: 9, description: 'squares'},
                  {image:'images/numberGameImages/10_eastereggs',value: 10, description: 'Easter eggs'},
                  {image:'images/numberGameImages/10_squares.png',value: 10, description: 'squares'}
                  );


var getRandomNumber = function() {
    return Math.floor(Math.random()*arrayOfImages.length)
}

var getImage = function(index){
    return arrayOfImages[index].image; // getRandomNumber is called here to grab a random image from the array. It's returning an image to this var.
}

//get the value tied to the image that is being set
var getImageValue = function(index){
    return arrayOfImages[index].value;
}

//get the description tied to the image that is being set
var getImageDescription = function(index){
    return arrayOfImages[index].description;    
}

var setImage = function(image) {
    document.getElementById("image").src = image;
}

var createButtons = function() {
    var div;
    var addText;
    var id;
    var numberSelection;
    
    for (var i=0;i<arrayOfImages.length/2;i++) {  //divide by 2 because currently there are 2 images of each *number*
        div=document.createElement("div"); 
        addText = document.createTextNode(i+1); 
        div.className='number';
        id = div.id = i+1;
        div.addEventListener('click', onButtonClick, false);
        div.appendChild(addText); //appends text to the new div
        numberSelection = document.getElementById("numberSelection"); // gets the parent div
        numberSelection.appendChild(div); // adds new div to the parent div"numberSelection"
    }
}

//the number id is tied to the button Click event
var onButtonClick = function(event) {
    var numID = parseInt(event.target.id);
    var imageValue = getImageValue(randomNumber);
    var description =  getImageDescription(randomNumber);
    var results = document.getElementById("results");
  
    resultsDropDown();
    if (numID === imageValue && imageValue == 1) {
        results.innerHTML = "<h2>HURRAY!</h2> <p>That's right, there is "+ imageValue + " " + description+"!</p>";
    }else if (numID === imageValue) {
        results.innerHTML = "<h2>HURRAY!</h2><p>That's right, there are "+ imageValue + " " + description+"!</p>";
    }else {
        results.innerHTML = "<h1>Try Again!</h1>";
        removeRefreshButton();
    }
    removeDropInClass(); 
}

var resultsDropDown = function(){
    var numID = parseInt(event.target.id);
    var imageValue = getImageValue(randomNumber);
    if (numID === imageValue) {
        $("#resultBox").slideDown(400);
        keepScore();
        addRefreshButton();
    }else {
        $("#resultBox").slideDown(400).delay(1300).slideUp(400);
    }
}

var setResultHTML = function(text){
    document.getElementById("results").innerHTML = text;
}

var addDropInClass = function(){
    document.getElementById("image").className = "dropIn";
    
}
var removeDropInClass = function() {
    document.getElementById("image").className = "";
}

var addRefreshButton = function() {
    $('#reset').delay(300).fadeIn(900);
}
var removeRefreshButton = function(){
    $('#reset').hide();
}
var refresh = function(){
    randomNumber = getRandomNumber();
    setImage(getImage(randomNumber)); //getRandomImage is called to set the image in the HTML. 
    setResultHTML("");
    removeRefreshButton();
}

var onResetButtonClick = function(){
    addDropInClass();
    $("#resultBox").slideUp(500);
    refresh();
}

var score = 0;
var keepScore = function(){
    var numID = parseInt(event.target.id);
    var imageValue = getImageValue(randomNumber);

    if (numID === imageValue) {
        score++; 
        document.getElementById("score").innerHTML = "Score: "+score;  
    }
}

refresh();
createButtons();




