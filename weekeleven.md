# Simple Interactive Room Game Instructions

## 1. Set Up the Canvas
1. Create a `setup()` function in p5.js.
2. Generate a 600x600 canvas for your game.
3. Make sure the canvas is centered on the page using `createCanvas(600, 600)`.

## 2. Load a Background Image
1. Find or create a background image for your room (e.g., a room with a desk, computer, phone, and book).
2. Use `loadImage()` in p5.js to load the image.
3. Display this image on the canvas inside the `draw()` function.

## 3. Display Mouse Coordinates
1. Write a `displayCoordinates()` function.
2. Use `text()` to show the current `mouseX` and `mouseY` values on the canvas.
3. Continuously display these coordinates in the bottom-left corner of the canvas to help define interactive zones.

## 4. Define Mouseover Zones Using Coordinates
1. Use the `displayCoordinates()` function to find the coordinates of the interactive objects in your background image.
2. Define mouseover zones by checking if the mouse is within certain `mouseX` and `mouseY` ranges for each object.
3. Change the cursor to a 'hand' icon when hovering over interactive areas using `cursor('pointer')`.

## 5. Make Zones Clickable and Display Messages
1. Make the defined interactive zones clickable using the `mousePressed()` function.
2. When an object (e.g., computer, phone, book) is clicked, display a message on the canvas using `text()`.
3. Example: When the player clicks the computer, show "The computer boots up slowly."

## 6. Build a Feedback System
1. Create a variable to store the player's score.
2. Each time the player clicks an interactive object, adjust the score.
3. Display the score in the corner of the canvas using `text()`.

## 7. Add Humor to Interaction Messages
1. Rewrite the interaction messages to make them funny or interesting.
2. For example, when the player clicks the book, display "You opened the book… only to find it's a guide to medieval taxonomy."

## 8. Create a Splash Screen
1. Create a splash screen with a message like "Click to Start" in the center of the canvas.
2. When the player clicks the splash screen, transition to the room view where they can interact with objects.

## 9. Display Feedback and Fade-Out Effect
1. After the player clicks an object, display the message for a few seconds.
2. Use `millis()` to track time and fade out the message after a short duration.

## 10. End the Game After All Interactions
1. Keep track of how many objects the player has interacted with.
2. When the player interacts with all objects, display an ending screen that says "You’ve interacted with everything! Game over."
3. Add a button or text like "Play Again" to restart the game.

