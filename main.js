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

carregarHTML("./source/html/conquistas.html", ".secao-conquistas");
carregarHTML("./source/html/equipe.html", ".secao-equipe");
carregarHTML("./source/html/principal.html", ".secao-principal");
