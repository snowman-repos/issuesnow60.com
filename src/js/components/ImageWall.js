/* eslint-env browser */

export default class ImageWall {
  constructor() {
    this.props = {
      imageFadeClass: 'u-fade-out',
      imageTransitionTime: 1000,
      numberOfImages: 26,
    };
    this.state = {
      images: document.querySelectorAll('.js-image'),
    };

    this.fillImageContainers(this.rotateImages.bind(this));
  }
  fillImageContainers(callback) {
    const { images } = this.state;
    const { imageFadeClass } = this.props;
    for (let i = 0; i < images.length; i += 1) {
      images[i].style.backgroundImage = `url(/img/mum-${this.getRandomImage()}.jpg)`;
      images[i].classList.remove(imageFadeClass);
    }
    callback();
  }
  getRandomImage() {
    return Math.ceil(Math.random() * this.props.numberOfImages);
  }
  getRandomImageContainer() {
    if (this.state.images.length) {
      return Math.floor(Math.random() * (this.state.images.length - 1));
    }
    return 0;
  }
  rotateImages() {
    const interval = Math.round(Math.random() * 2500);
    setTimeout(() => {
      this.swapImage();
      this.rotateImages();
    }, interval);
  }
  swapImage() {
    const { images } = this.state;
    const { imageFadeClass, imageTransitionTime } = this.props;
    const index = this.getRandomImageContainer();
    images[index].classList.add(imageFadeClass);
    images[index].style.backgroundImage = `url(/img/mum-${this.getRandomImage()}.jpg)`;
    setTimeout(() => {
      images[index].classList.remove(imageFadeClass);
    }, imageTransitionTime);
  }
}
