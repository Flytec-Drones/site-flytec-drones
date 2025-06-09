function carregarHTML(url, seletorDestino) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Erro ao carregar ${url}`);
      return response.text();
    })
    .then(html => {
      document.querySelector(seletorDestino).innerHTML = html;
    })
    .catch(error => console.error(error));
}

carregarHTML("./source/html/header.html", ".secao-header");
carregarHTML("./source/html/principal.html", ".secao-principal");
carregarHTML("./source/html/sobre.html", ".secao-sobre");
carregarHTML("./source/html/participacoes.html", ".secao-participacoes");
carregarHTML("./source/html/equipe.html", ".secao-equipe");
carregarHTML("./source/html/apoie.html", ".secao-apoie");
carregarHTML("./source/html/footer.html", ".secao-footer");
