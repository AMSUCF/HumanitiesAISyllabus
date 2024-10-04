## Tutorial: Image Classification

We've been working a lot with the output of models: now, as we prepare to shift our attention from images to code, we're going to get a bit more hands-on with the models themselves by introducing a visual dataset for comparative analysis. 

### Working with Teachable Machine

First, gather at least 10 sample images from 5 different categories. For my demo dataset, I'm using cover images from distinct titles of [comic book covers](https://www.coverbrowser.com/). You might try different art styles, architecture, palettes, animal types, etc. Remember to think about these as distinct sets - you'll need to categorize your inputs into specific labels, which in turn the model will try to place content.

![Categories of covers](categories.png)

Next, [launch Teachable Machine](https://teachablemachine.withgoogle.com/train), a simple visual interface for training machine learning models that can be exported to TensorFlow, a feature we'll be playing with more as we take more control of the tools. Select **New Image Project -> Standard image model** to start training your model.


Upload the images from each category, labeling them as you go (as shown above). Then, train the model and test it by uploading or holding up different content to your web camera. Iterate through content that fits and doesn't fit in the categories.

Finally, explore an existing usage of these libraries from the [Tensorflow.js gallery](https://github.com/tensorflow/tfjs/blob/master/GALLERY.md) - note that since this is a crowdsourced list, quality and usability may vary, so I recommend trying several to find one or two of interest. 

