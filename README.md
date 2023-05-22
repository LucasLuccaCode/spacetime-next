# Spacetime

Spacetime é um projeto full-stack que permite aos usuários autenticar-se com sua conta do GitHub e adicionar memórias com fotos de momentos marcantes. O projeto utiliza Next.js, TypeScript e Tailwind CSS no frontend.

![Preview](https://github.com/LucasLuccaCode/spacetime-next/blob/main/.github/img/preview.png)

## Instalação

Clone o repositório:

```bash
git clone git@github.com:LucasLuccaCode/spacetime-next.git
```

Navegue até o diretório do projeto:

```bash
cd spacetime-next
```

Instale as dependências:

```bash
npm install
```

Renomeie o arquivo `.env.local.example` para `.env.local`, e defina as variáveis de ambiente com seus respectivos valores:

```makefile
#GitHub
GITHUB_CLIENT_ID=seu-client-id-do-github
```

Inicie a aplicação e acesse em http://localhost:3000:

```bash
npm run dev
```

## Back-end
[Clique aqui](https://github.com/LucasLuccaCode/spacetime-fastify) para acessar o repositório contendo o backend do Spacetime.

## Tecnologias usadas

- Next
- Typescript
- TailwindCss
- Eslint
- Js Cookie
- JWT Decode
- Dayjs
- Axios
- TailwindCss Forms