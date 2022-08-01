var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square1 = entry.target.querySelector('.scrollAnim1');
    const square2 = entry.target.querySelector('.scrollAnim2');
    const square3 = entry.target.querySelector('.scrollAnim3');
    if (entry.isIntersecting) {
      square1.classList.add('card-animation');
      square2.classList.add('card-animation');
      square3.classList.add('card-animation');
	  return;
    }
    square1.classList.remove('card-animation');
    square2.classList.remove('card-animation');
    square3.classList.remove('card-animation');
  });
});

observer.observe(document.querySelector('.card-deck'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const skill1 = entry.target.querySelector('.skillAnim1');
    const skill2 = entry.target.querySelector('.skillAnim2');
    const skill3 = entry.target.querySelector('.skillAnim3');
    const skill4 = entry.target.querySelector('.skillAnim4');
    if (entry.isIntersecting) {
      skill1.classList.add('skill-animation1');
      skill2.classList.add('skill-animation2');
      skill3.classList.add('skill-animation1');
      skill4.classList.add('skill-animation2');
	  return;
    }
    skill1.classList.remove('skill-animation1');
    skill2.classList.remove('skill-animation2');
    skill3.classList.remove('skill-animation1');
    skill4.classList.remove('skill-animation2');
  });
});

observer2.observe(document.querySelector('.skills'));

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const skill5 = entry.target.querySelector('.skillAnim5');
    const skill6 = entry.target.querySelector('.skillAnim6');
    const skill7 = entry.target.querySelector('.skillAnim7');
    if (entry.isIntersecting) {
      skill5.classList.add('skill-animation1');
      skill6.classList.add('skill-animation2');
      skill7.classList.add('skill-animation1');
	  return;
    }
    skill5.classList.remove('skill-animation1');
    skill6.classList.remove('skill-animation2');
    skill7.classList.remove('skill-animation1');
  });
});

observer3.observe(document.querySelector('.skills2'));