/*
set number of cards 4 x 3 (6 images x 2)
random placement of images each time game is played.
user clicks 1 card, it turns over.
if the card is already face-up, it is inactive (user can't click it).
user can select up to 2 cards.
when 2 cards are visible, determine if 2 cards are a match.
if they match, cards stay flipped over.
if they match, there is some "glittery surprise" (animation).
if they don't match, cards flip back over and say "try again".
once all cards have been matched (flipped over), animation occurs and a message appears saying "CONGRATULATIONS! Play again?"

User clicks "Play Again" button.
game refreshes - all cards flip back over => should be the same function that is initialized the initial game
all cards are randomized again.


A. if user doesn't click anything for 2 minutes, a message appears "please click a card" or whatever bullshit you want.
B. should there be a hint button?
C. after so many incorrect tries, the js could help find a match.
D. time the game? => timer would start running as soon as the "Play Again" button is clicked.
*/



$(document).ready(function(){

        $('.hover').click(function(){
                $(this).addClass('flip');
        },function(){
                $(this).removeClass('flip');
        });
});


var arrayOfImages = new Array();

arrayOfImages.push({image:'images/memoryGameImages/black_rectangle.png',value: 'black rectangle'},
                  {image:'images/memoryGameImages/blue_circle.png',value: 'blue circle'},
                  {image:'images/memoryGameImages/blue_trapezoid.png',value: 'blue trapezoid'},
                  {image:'images/memoryGameImages/blue_triangle.png',value: 'blue triangle'},
                  {image:'images/memoryGameImages/brown_square.png',value: 'brown square'},
                  {image:'images/memoryGameImages/gold_triangle.png',value: 'gold triangle'},
                  {image:'images/memoryGameImages/green_diamond.png',value: 'green diamond'},
                  {image:'images/memoryGameImages/green_pentagon.png',value: 'green pentagon'},
                  {image:'images/memoryGameImages/green_rectangle.png',value: 'green rectangle'},
                  {image:'images/memoryGameImages/grey_octagon.png',value: 'grey octagon'},
                  {image:'images/memoryGameImages/orange_hexagon.png',value: 'orange hexagon'},
                  {image:'images/memoryGameImages/orange_oval.png',value: 'orange oval'},
                  {image:'images/memoryGameImages/pink_diamond.png',value: 'pink diamond'},
                  {image:'images/memoryGameImages/pink_pentagon.png',value: 'pink pentagon'},
                  {image:'images/memoryGameImages/pink_star.png',value: 'pink star'},
                  {image:'images/memoryGameImages/purple_oval.png',value: 'purple oval'},
                  {image:'images/memoryGameImages/purple_trapezoid.png',value: 'purple trapezoid'},
                  {image:'images/memoryGameImages/red_circle.png',value: 'red circle'},
                  {image:'images/memoryGameImages/red_octagon.png',value: 'red octagon'},
                  {image:'images/memoryGameImages/white_hexagon.png',value: 'white hexagon'},
                  {image:'images/memoryGameImages/yellow_square.png',value: 'yellow square'},
                  {image:'images/memoryGameImages/yellow_star.png',value: 'yellow star'}
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

var setImage = function(image) {
    //alert(image);
    var imageValue = getImageValue(randomNumber);
    document.getElementById("image").src = image;
    document.getElementById("image").alt = imageValue;
}

var refresh = function(){
    randomNumber = getRandomNumber();
    setImage(getImage(randomNumber)); //getRandomImage is called to set the image in the HTML.
}

refresh();



