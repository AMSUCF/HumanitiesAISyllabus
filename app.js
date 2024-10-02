let model;
let canvas;
let img;
let dreamFactor = 0.05;  // Adjust this to control the intensity of the "deep dream"

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('app');
  
  // Load your TensorFlow.js model via ml5
  ml5.tf.loadLayersModel('model.json').then(loadedModel => {
    model = loadedModel;
    console.log("Model loaded successfully!");
  });

  // Add event listener for image upload
  document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      loadImage(e.target.result, (loadedImg) => {
        img = loadedImg;
        image(img, 0, 0, width, height);
        applyDeepDream();
      });
    };
    reader.readAsDataURL(file);
  }
}

function applyDeepDream() {
  if (model && img) {
    const inputTensor = tf.browser.fromPixels(img).expandDims(0).toFloat().div(tf.scalar(255));

    // Slightly adjust the model’s weights for the "dreamy" effect
    let dreamTensor = model.predict(inputTensor).mul(tf.scalar(dreamFactor)).add(inputTensor);

    // Convert the dreamified tensor back to image
    tf.browser.toPixels(dreamTensor.squeeze(), canvas.elt).then(() => {
      // Optional: Perform classification if needed
      classifyImage(inputTensor);
    });
  }
}

function classifyImage(imageTensor) {
  model.predict(imageTensor).array().then(predictions => {
    const topPrediction = predictions[0].indexOf(Math.max(...predictions[0]));
    document.getElementById('prediction').innerText = `Top Prediction: ${topPrediction}`;
  });
}