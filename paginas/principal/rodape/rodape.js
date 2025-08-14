fetch('./paginas/principal/rodape/rodape.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('rodape').innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o rodapé:', error));
