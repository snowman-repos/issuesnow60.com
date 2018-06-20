/* eslint-env browser */

const numberOfImages = 26;
let images = [];

const getRandomImage = () => Math.ceil(Math.random() * numberOfImages);

const swapRandomImage = () => {
  const image = Math.ceil(Math.random() * images.length);
  images[image].classList.add('u-fade-out');
  images[image].style.backgroundImage = `url(/img/mum-${getRandomImage()}.jpg)`;
  setTimeout(() => {
    images[image].classList.remove('u-fade-out');
  }, 1000);
};

const rotateImages = () => {
  const interval = Math.round(Math.random() * 2500);
  setTimeout(() => {
    swapRandomImage();
    rotateImages();
  }, interval);
};

const initialize = () => {
  images = document.querySelectorAll('.js-image');
  for (let i = 0; i < images.length; i += 1) {
    images[i].style.backgroundImage = `url(/img/mum-${getRandomImage()}.jpg)`;
    images[i].classList.remove('u-fade-out');
  }
  rotateImages();
};

console.log(document.readyState);

if (document.readyState !== 'loading') {
  initialize();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    initialize();
  });
}
