// Study panels: a link (or QR code) to participate.html#<study-id> opens that study and scrolls to it.
// Opening a study updates the address bar so the link can be copied and shared.
(function () {
  function openFromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var d = document.getElementById(id);
    if (d && d.tagName === 'DETAILS') {
      d.open = true;
      d.scrollIntoView({ block: 'start' });
    }
  }

  document.querySelectorAll('details.study').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open && history.replaceState) history.replaceState(null, '', '#' + d.id);
    });
  });

  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();
