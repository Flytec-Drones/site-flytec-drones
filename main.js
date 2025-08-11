function carregarHTML(url, seletorDestino) {
  fetch(url)
    .then(resposta => {
      if (!resposta.ok) throw new Error(`Erro ao carregar ${url}`);
      return resposta.text();
    })
    .then(html => {
      document.querySelector(seletorDestino).innerHTML = html;
    })
    .catch(error => console.error(error));
}

carregarHTML("./paginas/principal/cabecalho/cabecalho.html", ".secao-cabecalho");
carregarHTML("./paginas/principal/sobre/sobre.html", ".secao-sobre")
carregarHTML("./paginas/principal/areas/areas.html", ".secao-areas");
carregarHTML("./paginas/principal/participacoes/participacoes.html", ".secao-participacoes");
carregarHTML("./paginas/principal/rodape/rodape.html", ".secao-rodape");
