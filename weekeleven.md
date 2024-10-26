## Tutorial: Iteration and Design

This week, we're going to add on to our understanding of working with code to explore the concept of conditional statements and "ifs" that Littman covers in *Code to Joy.* Building from the examples he gives from interactive fiction, and this week's discussion of the persistent limitations of games and conversation systems (recalling our earlier interactions with Eliza), we will build a simple, one-room interactive experience. I've built out an extensive example of this week's approach in [AI Admin](https://anastasiasalter.net/AIAdmin/). Notice how this work becomes a metagame considering the potential role of generative AI tools in shaping interactive experiences for education and training. It's also built on very simple conditionals. The game's primary logic can all be described under the framework of "if / else" - players are given simple scenarios and a choice of answers, and each answer in turn changes the player's reputation on leading AI policy for their department.

### Building for Interaction

Instead of providing specific prompts this week, I've provided a process overview condensed from my example. These are technical directions - you'll need to think about how to get through and test each phase. In this week's course video, I cover the first several steps, and demonstrate how to deploy and test through GitHub Pages.

Your experience can address any content you feel works well under a similar "if / else" structure, with decisions based on the concept. Refer to this week's video and the example for ideas of how to address your specific goals.

#### 1. Set Up the Canvas
1. Build a single-page HTML game, using the P5.js library online
2. Generate a 1000x1000 canvas for your game.
3. Make sure the canvas is centered on the HTML page 

#### 2. Load a Background Image
1. Generate a background image for your room (e.g., a room with a desk, computer, phone, and book) and save it in your repository folder
2. Use `loadImage()` in p5.js to load that image - make sure to use the right file name.
3. Display this image on the canvas inside the `draw()` function.

#### 3. Display Mouse Coordinates
1. Write a `displayCoordinates()` function.
2. Use `text()` to show the current `mouseX` and `mouseY` values on the canvas.
3. Continuously display these coordinates in the bottom-left corner of the canvas - these coordinates will help define the right interactive zones.

#### 4. Define Mouseover Zones Using Coordinates
1. Use the `displayCoordinates()` function to find the coordinates of the interactive objects in your background image.
2. Define mouseover zones by checking if the mouse is within certain `mouseX` and `mouseY` ranges for each object.
3. Change the cursor to a 'hand' icon when hovering over interactive areas using `cursor('pointer')`.

#### 5. Make Zones Clickable and Display Messages
1. Make the defined interactive zones clickable using the `mousePressed()` function.
2. When an object (e.g., computer, phone, book) is clicked, display a message on the canvas using `text()`.
3. Example: When the player clicks the computer, show "The computer boots up slowly."

#### 6. Build interactions
1. Display choices when an object is clicked
2. Each time the player clicks an interactive object, give a response or change the score.
3. Display the score in the corner of the canvas using `text()`.

#### 7. End the Game After All Interactions
1. Keep track of how many objects the player has interacted with.
2. When the player interacts with all objects, display an ending screen.
3. Consider adjusting the ending based on player decisions.

Share the link to your live, GitHub Pages version of the game - the easiest way to do this is to include the project in the same repository you deployed last week using a different .html file name. Don't worry about bugs, weird mouseover zones, or broken interactions: focus on getting the core functionality in place through iteration.

### Reflecting on Process

Consider the claims made in this week's readings regarding the future of games, particularly with regards to how interactions with characters and environments have typically been scripted as simple conditional statements. Does building this simple system give you a different perspective on that tradition of design? Think about the "modern" chatbots and interactive characters you've encountered thus far. Given some of Noble's critiques, what are the possibilities and challenges of bringing those types of characters into a game like this?
