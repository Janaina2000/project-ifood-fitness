// Função para carregar o conteúdo de um arquivo HTML e inseri-lo em um elemento


function loadHTML(file, selector) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha ao carregar ' + file);
      }
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o HTML:', error));
}


// Carregar o cabeçalho e o rodapé ao carregar o documento
document.addEventListener('DOMContentLoaded', () => {
  loadHTML('/project-ifood-fitness/assets/html/base/header.html', 'header');
  loadHTML('/project-ifood-fitness/assets/html/pages/home/index.html', 'main');
  loadHTML('/project-ifood-fitness/assets/html/base/footer.html', 'footer');

});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}