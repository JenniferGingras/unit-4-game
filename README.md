# unit-4-game

This is a game in which the player will add numbers to match a randomly selected number.

## The game will include:

* A start button
* Gameplay instructions
* Four buttons displayed on the page 
* A random number that is displayed at the start of the game
* A score counter that adds the running total sum of the buttons clicked
* A counter for games won and for games lost
* Messages displayed for a win or a loss

## Functionality:

* Clickable buttons that cause events to happen on the DOM
* Randomly generated numbers the display on the DOM
* A total sum that updates as buttons are clicked
* Update of the wins and losses
* Message changes to reflect whether the player won or lost

## How the game works

When the player clicks on a button, it will add a specific amount of points to the player's total score. 
* The game will hide this amount until the player clicks a button.
* When they do click one, update the player's score counter.

The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the buttons will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

#### notes

The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.

Find my version here:
https://jennifergingras.github.io/unit-4-game/
