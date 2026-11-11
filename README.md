# Volt Peças

Catálogo simples de peças para grupos geradores, feito com React, JSX e Vite.

## Executar no VS Code

1. Abra esta pasta no VS Code.
2. No terminal integrado, rode `npm install`.
3. Rode `npm run dev` e abra o endereço local exibido no terminal.

## O que dá para fazer

- Navegar pelas páginas Início, Peças, Sobre e Contato, sem recarregar a página.
- Pesquisar produtos pelo nome ou código e filtrar por categoria.
- Adicionar peças à seleção, alterar quantidades, remover itens e ver o total estimado.
- Preencher o formulário para ver uma confirmação na tela.

A seleção e o formulário são demonstrações locais. Não existe checkout nem envio de mensagem para um servidor.

## Estrutura do projeto

- `src/App.jsx`: páginas, rotas e estado da seleção.
- `src/data/products.js`: lista de seis peças e preços demonstrativos.
- `src/components/`: componentes funcionais reutilizáveis.
- `src/styles.css`: estilos responsivos.

O componente `Card` recebe os dados do produto por Props, e `ProductList` usa `.map()` para criar os cartões. As rotas são `/`, `/produtos`, `/sobre`, `/contato` e uma rota curinga para endereços inexistentes.

