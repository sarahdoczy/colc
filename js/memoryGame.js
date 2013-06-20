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
/*
 *red circle
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMnNomhV2XYrMq_PYSMbxo2WOUAWyKbiGSlzvc4s5avuG1w9C1
 green circle
    https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2iBp-aOe8wDmVCYTBCgkSLl40dZVr1NtLLjlC4a0f806NChCamw
 blue square
    https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTIU0x93US8zY9tUugl-1AhHSCF6YwaeWYYDx4fIPPJpIv28VCo
 purple square
    https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcKu6NIVz69tc2KFR-v1tBu2j5O3ac07ZM8wyofMH6vAlFguuB
 red triangle
    https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnvFypvwuuIUu8wI5kaDyiolld-6edHZaboZGa4uUaqyAyAlcLXw
 orange triangle
    https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGIXjM4gkUh1KKMdoVkNvKrEVuvPskUFql5eugw42p9WqM-FRe
 yellow diamond
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixsrnWOggm0pxC_JO_s8UflSacImaCrYqWejRDRw6TsUDbDv1Qg
 purple diamond
    https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPonbYrjBMITVwEoYk5BkR5rGyYMb7UkkAOGQpqVMbWReqOVezzA
 orange star
    https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkNTXcJX-o5WOJEQvdANlIZFGuT1_pgld3EzCY08gzmD-VvGVybg
 pink star
    https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1EV8IvV5N0pnVdixExBe_2g9959dffZEhP28Se5k5VdVMS-18Tw
 
 */

var arrayOfImages = new Array();

arrayOfImages.push({image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMnNomhV2XYrMq_PYSMbxo2WOUAWyKbiGSlzvc4s5avuG1w9C1',value: 'redCircle'},
                  {image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2iBp-aOe8wDmVCYTBCgkSLl40dZVr1NtLLjlC4a0f806NChCamw',value: 'greenCircle'},
                  {image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTIU0x93US8zY9tUugl-1AhHSCF6YwaeWYYDx4fIPPJpIv28VCo',value: 'blueSquare'},
                  {image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcKu6NIVz69tc2KFR-v1tBu2j5O3ac07ZM8wyofMH6vAlFguuB',value: 'purpleSquare'},
                  {image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnvFypvwuuIUu8wI5kaDyiolld-6edHZaboZGa4uUaqyAyAlcLXw',value: 'redTriangle'},
                  {image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGIXjM4gkUh1KKMdoVkNvKrEVuvPskUFql5eugw42p9WqM-FRe',value: 'orangeTriangle'},
                  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixsrnWOggm0pxC_JO_s8UflSacImaCrYqWejRDRw6TsUDbDv1Qg',value: 'yellowDiamond'},
                  {image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPonbYrjBMITVwEoYk5BkR5rGyYMb7UkkAOGQpqVMbWReqOVezzA',value: 'purpleDiamond'},
                  {image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkNTXcJX-o5WOJEQvdANlIZFGuT1_pgld3EzCY08gzmD-VvGVybg',value: 'orangeStar'},
                  {image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1EV8IvV5N0pnVdixExBe_2g9959dffZEhP28Se5k5VdVMS-18Tw',value: 'pinkStar'}
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



