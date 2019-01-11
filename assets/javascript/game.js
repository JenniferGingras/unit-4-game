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

  // var gamePlay = false;

  // FUNCTIONS
  //-----------------

  // CHECK FOR A WIN OR LOSS
  var checkGame = function () {
    // if the userSum = randomNum the game is won
    if (userSum === randomNum) {
      // gamePlay = false;
      // update win counter plus 1
      winCounter++;
      $('#winCounter').html(winCounter);
      console.log('win');
      // update the message with 'Yay! You won! Do you want to play again?'
      $('#message').text('Yay! You won! Want to play again?');
      // update button to say 'play again?'
      $('#playButton').text('Play Again?');

    }
    // if userSum > randomNum the game is lost
    else if (userSum > randomNum) {
      //  gamePlay = false;
      // update lose counter plus 1
      lossCounter++;
      $('#lossCounter').html(lossCounter);
      console.log('lose');
      // update the message with 'Oh no! You lost! Would you like to try again?'
      $('#message').text('Oh no! You lost! Want to try again?');
      // update button to say 'play again'
      $('#playButton').text('Play Again?');
    } else {
      //  gamePlay = true;
    }
  };

  // SET THE GAME FOR PLAYING
  var gameSet = function () {
    // gamePlay = true;
    // Set sum to 0
    userSum = 0;
    $('#userTotal').html(userSum);

    // generate a number between 19-120 for randomNum
    randomNum = Math.floor(Math.random() * 101) + 19;
    console.log(randomNum);
    $('#randomNumber').html(randomNum);

    // generate a number for each of the buttons
    // use jquery to select html buttons and store the number
    $("#buttonBird").data("value", Math.floor(Math.random() * 11) + 1);
    console.log('bird: ' + $('#buttonBird').data('value'));
    $("#buttonFox").data("value", Math.floor(Math.random() * 11) + 1);
    console.log('fox: ' + $('#buttonFox').data('value'));
    $("#buttonSquirrel").data("value", Math.floor(Math.random() * 11) + 1);
    console.log('squirrel: ' + $('#buttonSquirrel').data('value'));
    $("#buttonMouse").data("value", Math.floor(Math.random() * 11) + 1);
    console.log('mouse: ' + $('#buttonMouse').data('value'));
  };

  // BUTTON CLICKS

  // Play Game Button
  $('#playButton').on('click', function () {
    gameSet();
  });

  // Animal Buttons
  // if (gamePlay === true) {
  $(".buttonImage").on("click", function () {
    // add value of button to userSum
    userSum = userSum + $(this).data('value');
    console.log($(this).data('value'));
    // update to totalSum in html
    $('#userTotal').text(userSum);
    // call checkGame function to check if the game is over 
    checkGame();
  });
  // };


});