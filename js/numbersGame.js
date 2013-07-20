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

var addDropInClass = function(){
    document.getElementById("image").className = "dropIn";
    
}
var addRefreshButton = function() {
    $('#reset').delay(300).animate({"top": "270px"}).fadeIn(900);
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

var getImage = function(index){
    return arrayOfImages[index].image; // getRandomNumber is called here to grab a random image from the array. It's returning an image to this var.
}

var getImageDescription = function(index){
    return arrayOfImages[index].description;    
}

var getImageValue = function(index){
    return arrayOfImages[index].value;
}

var getRandomNumber = function() {
    return Math.floor(Math.random()*arrayOfImages.length)
}

var score = 0;
var keepScore = function(){
    var numID = parseInt(event.target.id);
    var imageValue = getImageValue(randomNumber);

    if (numID === imageValue) {
        score++; 
        document.getElementById("score").innerHTML = score;  
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

var onResetButtonClick = function(){
    addDropInClass();
    $("#resultBox").animate({"top": "-302px"}, 600);
    refresh();
}

var refresh = function(){
    randomNumber = getRandomNumber();
    setImage(getImage(randomNumber)); //getRandomImage is called to set the image in the HTML. 
    setResultHTML("");
    removeRefreshButton();
}

var removeDropInClass = function() {
    document.getElementById("image").className = "";
}

var removeRefreshButton = function(){
    $('#reset').hide();
}

var resultsDropDown = function(){
    var numID = parseInt(event.target.id);
    var imageValue = getImageValue(randomNumber);
    if (numID === imageValue) {
            $("#resultBox").animate({"top": "0px",}, 800);
        
        keepScore();
        addRefreshButton();
    }else {
        $("#resultBox").animate({"top": "0px"}, 800).delay(1300).animate({"top": "-302px"}, 600);
    }
}

var setImage = function(image) {
    document.getElementById("image").src = image;
}

var setResultHTML = function(text){
    document.getElementById("results").innerHTML = text;
}

refresh();
createButtons();




