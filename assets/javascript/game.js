$(document).ready(function () {

  // VARIABLES
  // ----------------
  // holds the random number the the computer picks
  var randomNum = 0;

  // place to hold sum of buttons clicked
  var userSum = 0;
  // counters
  var winCounter = 0;
  var lossCounter = 0;

  // holds button numbers that computer picks
  var buttonBird;
  var buttonFox;
  var buttonSquirrel;
  var buttonMouse;

  var gamePlaying = false;

  // FUNCTIONS
  //-----------------

  // SET UP THE GAME
  function gameSet() {
    gamePlaying = true
    // Set sum to 0
    userSum = 0;
    $('#userTotal').html(userSum);

    // generate a number between 19-120 for randomNum
    randomNum = Math.floor(Math.random() * 101) + 19;
    console.log(randomNum);
    $('#randomNumber').html(randomNum);


    // generate a number for each of the buttons
    buttonBird = Math.floor(Math.random() * 11) + 1;
    console.log(buttonBird);
    buttonFox = Math.floor(Math.random() * 11) + 1;
    console.log(buttonFox);
    buttonSquirrel = Math.floor(Math.random() * 11) + 1;
    console.log(buttonSquirrel);
    buttonMouse = Math.floor(Math.random() * 11) + 1;
    console.log(buttonMouse);
  }
  // call startGame just to see it console logged
  // gameSet();


  // CHECK END GAME
  function checkGame() {
    // if the userSum = randomNum the game is won
    if (userSum === randomNum) {
      // update win counter plus 1
      winCounter++;
      $('#winCounter').html(winCounter);
      // update the message with 'Yay! You won! Do you want to play again?'
      $('#message').text('Yay! You won! Want to play again?');
      // update button to say 'play again?'
      $('#playButton').text('Play Again?');
    }
    // if userSum > randomNum the game is lost
    else if (userSum > randomNum) {
      // update lose counter plus 1
      lossCounter++;
      $('#lossCounter').html(lossCounter);
      // update the message with 'Oh no! You lost! Would you like to try again?'
      $('#message').text('Oh no! You lost! Want to try again?');
      // update button to say 'play again'
      $('#playButton').text('Play Again?');
    }
    // if userSum < randomNum game is still in play
    else if (userSum < randomNum) {
      gamePlaying = true;
    }
  };

  // BUTTON CLICKS
  $('#playButton').on('click', function () {
    gameSet();
  });

  // FIX SO THAT YOU CAN'T CLICK ANIMAL BUTTONS UNTIL GAME IS PLAYING
  // THERE'S GOTTA BE A WAY TO COMBINE ALL BUTTONS
  // --------------------------------------------------
  $("#buttonFox").on("click", function () {
    // add value of button to userSum
    userSum = userSum + buttonFox;
    console.log(userSum);
    // update to totalSum in html
    $('#userTotal').text(userSum);
    // call checkGame function to check if the game is over 
    checkGame();
  });

  $("#buttonBird").on("click", function () {
    // add value of button to userSum
    userSum = userSum + buttonBird;
    console.log(userSum);
    // update to totalSum in html
    $('#userTotal').text(userSum);
    // call checkGame function to check if the game is over 
    checkGame();
  });

  $("#buttonSquirrel").on("click", function () {
    // add value of button to userSum
    userSum = userSum + buttonSquirrel;
    console.log(userSum);
    // update to totalSum in html
    $('#userTotal').text(userSum);
    // call checkGame function to check if the game is over 
    checkGame();
  });

  $("#buttonMouse").on("click", function () {
    // add value of button to userSum
    userSum = userSum + buttonMouse;
    console.log(userSum);
    // update to totalSum in html
    $('#userTotal').text(userSum);
    // call checkGame function to check if the game is over 
    checkGame();
  });

})