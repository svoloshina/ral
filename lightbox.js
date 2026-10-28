// Click any image inside a .zoomable container to view it larger; click, or press Escape, to close.
(function () {
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Enlarged image');
  box.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="">';
  var big = box.querySelector('img');

  function open(img) {
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    document.body.appendChild(box);
    document.body.style.overflow = 'hidden';
  }
  function close() {
    if (box.parentNode) box.parentNode.removeChild(box);
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.zoomable img').forEach(function (img) {
    img.tabIndex = 0;
    img.addEventListener('click', function () { open(img); });
    img.addEventListener('keydown', function (e) { if (e.key === 'Enter') open(img); });
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
