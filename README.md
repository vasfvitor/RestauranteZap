## Primeiro de tudo

Astro é um framework JS

O objetivo de usar ele é facilitar a edição e manutenção do código.

Exemplo: Olhando os arquivos fica fácil de localizar cada seção das página pois cada uma tem um arquivo próprio que ao final o Astro junta tudo pra formar o html/css/js final. O rodapé tem o arquivo `Footer.astro`, o cardápio `Cardapio.astro`.

## Estrutura do projeto

Esses arquivos na raiz do projeto são de configuração, não precisa mexer neles. O site mesmo é na pasta /src

na pasta:
/src/components - fica os componentes

/src/images - fica as imagens e outros assets visuais como icones, background...

/src/layout - é o layout html geral

/src/pages - são as páginas. A pagima principal do site index.astro é o equivalente
do index.html. Pode organizar as paginas em varios arquivos mas também em pastas

Exemplo:

1 - www.exemplo.com.br/comprar/passo1

Ficaria em arquivos: /src/pages/comprar/passo1.astro - veja que foi criado uma pasta chamada "comprar".

2 - www.exemplo.com.br/comprar

Pode ser feito com /src/pages/comprar/index.astro ou /src/pages/comprar.astro
A opção com pasta é melhor caso tenha várias páginas no /comprar como é o caso do exemplo 1.

## Convenção:

Componentes sempre escrito com a primeira letra maiscula. E páginas, letra minuscula.

Componentes são pedaços de código que vai formar a página, pode ser desde um botão até uma seção inteira.

Exemplos:

blog.astro -> página

index.astro -> página

Carrinho.astro -> componente

Button.astro -> componente

## Estrutura dos componentes e pagina astro:

Em todo arquivo astro existe uma seção inicial (cabeçalho) entre '---' e o restante escreve o html normalmente, com algumas possibilidades extras.

exemplo:
`---`
`//javascript, cabeçalho da pagina/componente astro`
`---`
`<div>HTML</div>`

## Tailwind e DaisyUI

No caso foi decisão pessoal, no curso o cara usa o Bootstrap e escreve CSS.

O Tailwind facilita escrever css sem precisar usar um arquivo .css. Não existe `btn` como existe no Bootstrap. O Tailwind é uma biblioteca de css utilitário; O Bootstrap é baseado em componentes.

[Documentação Tailwind CSS](https://tailwindcss.com/docs/)

Pra facilitar o processo acrescentei o DaisyUI que tem componentes prontos como teria no Bootstrap. Só visitar [esse link](https://daisyui.com/components/?lang=pt) escolher o componente desejado, copiar o código, e colar num novo componente ou página Astro. Daí customiza.


## Svelte

O Astro nativamente não armazena estados entre os componentes. Para isso [o recomendado](https://docs.astro.build/pt-br/core-concepts/sharing-state/) é utilzar a biblioteca Nano Stores juntamente com uma framework, seja React, Preact, Lit, Solid, Vue ou Svelte. 

Escolhi Svelte porque eu queria aprender Svelte. No momento já tem mais linhas de Svelte do que Astro. Por isso a consideração de mover tudo para Svelte + Vite ou SvelteKit.


# Astro Starter Kit: Minimal

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
