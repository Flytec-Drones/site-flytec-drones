# README do Projeto

## Descrição geral

Estamos construindo um site com componentes separados, cada membro da equipe é responsável por uma seção. O objetivo é estruturar o trabalho como componentes:

* `apoie`
* `conquistas`
* `equipe`
* `footer`
* `header`
* `principal`
* `sobre`

Cada componente será desenvolvido por um integrante, facilitando a manutenção e integração.

---

## O processo de contribuição

Siga este passo a passo para contribuir usando **fork**, **GitHub Codespaces**, **branch**, **commit** e **pull request**.

### 1. Faça um *fork* do repositório principal

1. Acesse o repositório principal no GitHub.
2. Clique em **Fork** (canto superior direito).
3. Seu perfil ficará com uma cópia do projeto.

*Marcar print do fork aqui*

```
[insira imagem do botão Fork]
```

---

### 2. Abra seu Codespace

1. No seu fork, clique em **Code** > **Codespaces** > **Create codespace on main**.
2. Será aberto o ambiente de desenvolvimento no browser.

*Marcar print do Codespace aqui*

```
[insira imagem do código sendo iniciado]
```

---

### 3. Crie uma branch para seu componente

No terminal do Codespace, execute:

```bash
git checkout -b componente/<nome-da-branch>  # ex: componente/conquistas
```

Isso mantém o `main` limpo para integração.

---

### 4. Implemente seu componente

Edite os arquivos HTML/CSS da sua parte.
Por exemplo:

* `conquista.html`, `conquista.css`

Após finalizar:

```bash
git add .
git commit -m "Implementa componente conquistas"
git push --set-upstream origin componente/conquistas
```

---

### 5. Crie um Pull Request
