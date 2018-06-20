/* eslint-env browser */

const myInitCode = () => {
  const images = document.querySelectorAll('.js-image');
  for (let i = 0; i < images.length; i += 1) {
    images[i].style.backgroundImage = `url(/img/mum-${i + 1}.jpg)`;
    images[i].style.opacity = 1;
  }
};

console.log(document.readyState);

if (document.readyState !== 'loading') {
  myInitCode();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    myInitCode();
  });
}
