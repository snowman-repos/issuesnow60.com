!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.props={imageFadeClass:"u-fade-out",imageTransitionTime:1e3,numberOfImages:57},this.state={images:document.querySelectorAll(".js-image")},this.fillImageContainers(this.rotateImages.bind(this))}return r(e,[{key:"fillImageContainers",value:function(e){for(var t=this.state.images,n=this.props.imageFadeClass,r=0;r<t.length;r+=1)t[r].style.backgroundImage="url(img/mum-"+this.getRandomImage()+".jpg)",t[r].classList.remove(n);e()}},{key:"getRandomImage",value:function(){return Math.ceil(Math.random()*this.props.numberOfImages)}},{key:"getRandomImageContainer",value:function(){return this.state.images.length?Math.floor(Math.random()*(this.state.images.length-1)):0}},{key:"rotateImages",value:function(){var e=this,t=Math.round(2500*Math.random());setTimeout(function(){e.swapImage(),e.rotateImages()},t)}},{key:"swapImage",value:function(){var e=this.state.images,t=this.props,n=t.imageFadeClass,r=t.imageTransitionTime,a=this.getRandomImageContainer();e[a].classList.add(n),e[a].style.backgroundImage="url(img/mum-"+this.getRandomImage()+".jpg)",setTimeout(function(){e[a].classList.remove(n)},r)}}]),e}();t.default=a},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.props={answer:document.querySelector(".js-answer"),birthday:+new Date("1958-07-13"),realAge:document.querySelector(".js-real-age")},this.setAnswer(),this.updateAge()}return r(e,[{key:"getAge",value:function(){return((Date.now()-this.props.birthday)/315576e5).toFixed(10)}},{key:"setAge",value:function(){this.props.realAge.textContent=this.getAge()}},{key:"setAnswer",value:function(){this.props.answer.textContent=60>this.getAge()?"no":"yes"}},{key:"updateAge",value:function(){var e=this;return setInterval(function(){e.setAge()},100)}}]),e}();t.default=a},function(e,t,n){"use strict";var r=o(n(1)),a=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",function(){new r.default,new a.default}):(new r.default,new a.default)}]);
//# sourceMappingURL=index.js.map