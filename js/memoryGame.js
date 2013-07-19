var createCard = function(image) {

    var img = document.createElement("img");
    img.id="faceUpImage";
    img.src=image;

    var divFaceUp = document.createElement("div");
    divFaceUp.className = 'faceUp';
    divFaceUp.appendChild(img);

    var divFaceDown = document.createElement("div");
    divFaceDown.className = 'faceDown';

    var divPanel = document.createElement("div");
    divPanel.className = 'panel';
    divPanel.appendChild(divFaceDown);
    divPanel.appendChild(divFaceUp);
    divPanel.addEventListener('click', onCardClick, false);

    return divPanel;
}

var onCardClick = function(event) {
    flipCard(event.currentTarget);
    setTimeout(runGameLogic, 1000, event.currentTarget);
    numberOfClicks();
}

var count = 0;
var numberOfClicks = function() {
        count++;
        //console.log(count);
        if (count%2 == 0) {
	    document.getElementById("numberOfTries").innerHTML = "Number of Attempts: " + count/2;
       }
}
var clearNumberOfAttempts = function() {
    count = 0;
    document.getElementById("numberOfTries").innerHTML = "Number of Attempts: ";
}

//TODO - "play again button" should clear current "#container", not add a new container.
//we need to know when the game has ended (all cards have been flipped up)
//user should not be able to click a "faceUp" card
//user should not be able to have more than 2 faceUp cards at a time. (never have more than 2 faceUp cards at a time)

var runGameLogic = function(card) {
    if (previousClickedCard != null) {
        var cardsAreEqual = compareCards(card, previousClickedCard);
        if (cardsAreEqual) {
            //console.log("It's a match");
            disableFlipMethod(card);
            previousClickedCard = null;
        } else {
            //console.log("Sorry try again");
            flipCard(card);
            flipCard(previousClickedCard);
            previousClickedCard = null;
        }
    } else {
        previousClickedCard = card;
    }
}

function createGameBoard(imageArray, gameContainer) {
    var cardDeck = chooseCardsToPlayWith(shuffle(imageArray));
    var duplicatedCardsForGameBoard = getDuplicateArray(cardDeck); 
    var shuffleDeckForGameBoard = shuffle(duplicatedCardsForGameBoard);
        
    for (var i=0; i<shuffleDeckForGameBoard.length; i++) {       
        gameContainer.appendChild(createCard(shuffleDeckForGameBoard[i]));
    }
}

var flipCard = function(div) {
    if ($(div).hasClass('flip')) {
        $(div).removeClass('flip');
    } else {
        $(div).addClass('flip');
    }
}
//  ====    todo      ========
var disableFlipMethod = function(div) {
    console.log("matching! disable flip");
    //var divPanel = document.getElementsByClassName('panel');
    //divPanel.removeEventListener('click', onCardClick, false);
}

var shuffle = function(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var getDuplicateArray = function(array) {
	var tempArray=[];
	
	for (var i=0; i<array.length; i++) {
	    tempArray.push(array[i]);
	    tempArray.push(array[i]); 
	}
	return tempArray;
}

var chooseCardsToPlayWith = function(array) {
    var tempCardDeckArray = [];
    
    for (var i=0; i<numberOfCards; i++) { 
        tempCardDeckArray.push(array[i]);
    }
    return tempCardDeckArray;
}

var compareCards = function(card1, card2) {
    
    //compare image source
    var firstCard = card1.getElementsByClassName("faceUp")[0].getElementsByTagName("img")[0].src;
    var secondCard = card2.getElementsByClassName("faceUp")[0].getElementsByTagName("img")[0].src;
    if (firstCard == secondCard) {
       return true;
    } else {
        return false;
    
    }
}

var onResetButtonClick = function(){
    gameContainer.innerHTML = "";
    clearNumberOfAttempts();
    createGameBoard(imageArray, gameContainer);    
}

var numberOfCards = 6;  // chose the number of cards to play with (before duplicating array)
var currentCard;
var previousClickedCard;

var imageArray = ['images/memoryGameImages/black_rectangle.png',
                  'images/memoryGameImages/blue_circle.png',
                  'images/memoryGameImages/blue_trapezoid.png',
                  'images/memoryGameImages/blue_triangle.png', 
                  'images/memoryGameImages/brown_square.png', 
                  'images/memoryGameImages/gold_triangle.png', 
                  'images/memoryGameImages/green_diamond.png',
                  'images/memoryGameImages/green_pentagon.png', 
                  'images/memoryGameImages/green_rectangle.png', 
                  'images/memoryGameImages/grey_octagon.png', 
                  'images/memoryGameImages/orange_hexagon.png', 
                  'images/memoryGameImages/orange_oval.png', 
                  'images/memoryGameImages/pink_diamond.png', 
                  'images/memoryGameImages/pink_pentagon.png', 
                  'images/memoryGameImages/pink_star.png', 
                  'images/memoryGameImages/purple_oval.png', 
                  'images/memoryGameImages/purple_trapezoid.png', 
                  'images/memoryGameImages/red_circle.png', 
                  'images/memoryGameImages/red_octagon.png', 
                  'images/memoryGameImages/white_hexagon.png', 
                  'images/memoryGameImages/yellow_square.png', 
                  'images/memoryGameImages/yellow_star.png'
                  ];

var gameContainer = document.getElementById("gameContainer");


createGameBoard(imageArray, gameContainer);

