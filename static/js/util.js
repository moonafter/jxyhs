var url = '//oss.chengchangqin.com/jxyhs/%E6%A1%A5%E6%A2%81%E5%9F%BA%E6%9C%AC%E7%8A%B6%E5%86%B5%E5%8D%A1%E7%89%87.pdf'
PDFJS.workerSrc = '/static/js/pdf.worker.min.js'
var loadingTask = PDFJS.getDocument(url);
loadingTask.promise.then(function(pdf) {
  for (var i = 1; i <= pdf.numPages; i++) {
    pdf.getPage(i).then(function(page) {
      var id = "canvas"+i;
      var scale = 1.2;
      var viewport = page.getViewport(scale);
      var canvas = document.getElementById(id);
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  };
});
