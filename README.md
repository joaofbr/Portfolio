# Portfólio

Site pessoal em React, publicado em https://joaofbr.github.io/portfolio/

## Rodando

```bash
npm install
npm run dev
```

Build de produção em `npm run build`, e `npm run preview` para servir o resultado.

## Onde mexer

Textos, experiências, projetos e skills ficam todos em `src/data/site.js`. Os componentes leem daí, então dá para atualizar o site sem tocar em JSX.

Cores, fontes e espaçamentos ficam em `src/styles/tokens.css`.

Para adicionar telas a um projeto, coloque as imagens em `src/assets/projects/`, importe no topo do `site.js` e liste em `gallery` com `src`, `label` e `alt`.

## Formulário de contato

O envio usa o Formspree, já que o GitHub Pages não roda código no servidor. Crie um formulário em formspree.io, copie o id do endpoint (em `formspree.io/f/xyz`, o id é `xyz`) e cole em `contactConfig.formspreeId`, no fim do `site.js`.

Sem o id preenchido o formulário abre o cliente de e-mail do visitante com a mensagem pronta.

## Deploy

O push na `main` dispara o workflow em `.github/workflows/deploy.yml`. Nas configurações do repositório, `Pages` → `Source` precisa estar em `GitHub Actions`.

O `base` do Vite está fixo em `/portfolio/`. Se o repositório mudar de nome, ajuste em `vite.config.js`.

## Notas

As animações usam Motion via `LazyMotion` com o conjunto `domAnimation`, que não inclui `drag` nem `layout` — se precisar de um deles, troque para `domMax`. O modo `strict` faz `motion.*` lançar erro justamente para avisar disso.

Vale manter as animações em `opacity` e `transform`. Foi assim que o scroll ficou fluido depois de uma primeira versão que usava `backdrop-filter` e `blur` e travava.
