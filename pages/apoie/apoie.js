function carregarHTML(url, seletorDestino) {
  fetch(url)
    .then(resposta => {
      if (!resposta.ok) throw new Error(`Erro ao carregar ${url}`);
      return resposta.text();
    })
    .then(html => {
      const destino = document.querySelector(seletorDestino);
      if (!destino) {
        console.error(`Selector não encontrado: '${seletorDestino}' ao carregar ${url}`);
        return;
      }
      destino.innerHTML = html;
      const event = new CustomEvent('componentLoaded', { detail: { selector: seletorDestino } });
      document.dispatchEvent(event);
    })
    .catch(error => console.error(error));
}

carregarHTML("components/header/header.html", ".header");
carregarHTML("components/footer/footer.html", ".footer");