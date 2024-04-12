import project from './services/projects/MakePictureFrame';

console.log(`Here's how to make a picture frame:`);
project.steps.forEach((step) => {
  console.log(step);
});
