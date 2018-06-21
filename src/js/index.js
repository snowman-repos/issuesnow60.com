/* eslint-env browser */
import AgeCalculator from './components/AgeCalculator';
import ImageWall from './components/ImageWall';

let imageWall = null;
let ageCalculator = null;

if (document.readyState !== 'loading') {
  ageCalculator = new AgeCalculator();
  imageWall = new ImageWall();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    ageCalculator = new AgeCalculator();
    imageWall = new ImageWall();
  });
}
