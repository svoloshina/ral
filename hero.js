// Homepage banner: crossfade the lab photos every few seconds; the arrows step through them by hand.
(function () {
  var slides = document.querySelectorAll('.hero-slide');
  var cur = 0, timer;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(i) {
    slides[cur].classList.remove('on');
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add('on');
  }
  function restart() {
    clearInterval(timer);
    if (!still) timer = setInterval(function () { show(cur + 1); }, 5000);
  }

  document.querySelector('.hero-prev').addEventListener('click', function () { show(cur - 1); restart(); });
  document.querySelector('.hero-next').addEventListener('click', function () { show(cur + 1); restart(); });
  restart();
})();
