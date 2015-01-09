/**
 * @preserve asyncss.js
 *
 * LICENSE: http://hail2u.mit-license.org/2014
 */
(function () {
  var files = [
  ];
  var links = document.createDocumentFragment();
  files.forEach(function (file) {
    if (!/^https?:/.test(file.href) && location.protocol === 'file:') {
      file.href = './assets' + file.href;
    }

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file.href;

    if (file.media) {
      link.media = file.media;
    }

    links.appendChild(link);
  });
  document.head.appendChild(links);
})();
