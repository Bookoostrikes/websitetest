const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', function(){
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

});

  const url = 'Janna_AlHashimy_Resume.pdf'; // Path to your PDF file
  const canvas = document.getElementById('pdf-canvas');
  const context = canvas.getContext('2d');

  pdfjsLib.getDocument(url).promise.then(pdf => {
    pdf.getPage(1).then(page => {
      const viewport = page.getViewport({ scale: 1.5 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  });

