let model;
let img;
let canvas;
let dreamFactor = 0.2;  // Strength of initial dream effect
let numIterations = 5;  // Number of passes for stronger Inception effect
let exaggerationFactor = 1.5;  // How much to amplify changes in each iteration

function preload() {
  // Load your TensorFlow.js model via ml5 (locally hosted)
  model = ml5.imageClassifier('model/model.json', modelLoaded);
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('app');
  background(255);

  // Add event listener for image upload
  document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
}

function modelLoaded() {
  console.log('Model loaded successfully!');
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      img = loadImage(e.target.result, imageLoaded);
    };
    reader.readAsDataURL(file);
  }
}

function imageLoaded() {
  // Display the uploaded image on the canvas
  image(img, 0, 0, width, height);
  applyDeepDream(numIterations);  // Apply the multi-pass inception effect
}

function applyDeepDream(iterations) {
  if (img && model) {
    img.loadPixels();

    for (let iter = 0; iter < iterations; iter++) {
      console.log(`Applying deep dream iteration: ${iter + 1}`);
      
      // Run classification at each stage to create exaggerated features
      model.classify(canvas, (err, results) => {
        if (err) {
          console.error(err);
          return;
        }

        let result = results[0].label;
        document.getElementById('prediction').innerText = `Iteration ${iter + 1}: ${result}`;

        // Deep dream effect: manipulate pixel colors, amplifying with each iteration
        for (let i = 0; i < img.pixels.length; i += 4) {
          img.pixels[i] = img.pixels[i] * (1 + random(-dreamFactor, dreamFactor) * exaggerationFactor);  // Red
          img.pixels[i + 1] = img.pixels[i + 1] * (1 + random(-dreamFactor, dreamFactor) * exaggerationFactor);  // Green
          img.pixels[i + 2] = img.pixels[i + 2] * (1 + random(-dreamFactor, dreamFactor) * exaggerationFactor);  // Blue
        }

        img.updatePixels();  // Apply the modified pixels to the image
        image(img, 0, 0, width, height);  // Re-draw the image on the canvas

        // Gradually increase exaggeration factor for stronger dream effect
        exaggerationFactor *= 1.2;  
      });
    }
  }
}