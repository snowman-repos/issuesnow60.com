/* eslint-env browser */
export default class AgeCalculator {
  constructor() {
    this.props = {
      answer: document.querySelector('.js-answer'),
      birthday: +new Date('1958-07-13 00:00:00'),
      realAge: document.querySelector('.js-real-age'),
    };
    this.setAnswer();
    this.updateAge();
  }
  getAge() {
    return ((Date.now() - this.props.birthday) / (31557600000)).toFixed(10);
  }
  setAge() {
    this.props.realAge.textContent = this.getAge();
  }
  setAnswer() {
    this.props.answer.textContent = this.getAge() < 60 ? 'no' : 'yes';
  }
  updateAge() {
    return setInterval(() => {
      this.setAge();
    }, 100);
  }
}
