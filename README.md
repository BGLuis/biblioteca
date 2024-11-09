# Projeto biblioteca

Este é um projeto desenvolvido para auxiliar nas dúvidas dos alunos da PUC. O projeto consiste em uma aplicação web que exibe uma lista de livros e permite a navegação entre as páginas de detalhes de cada livro.

## Estrutura do Projeto

- **src/components**: Contém os componentes reutilizáveis da aplicação
- **src/pages**: Contém as páginas da aplicação
- **src/style**: Contém os arquivos de estilo CSS utilizados na aplicação.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Biblioteca para gerenciamento de rotas na aplicação.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **React Icons**: Biblioteca para utilização de ícones.

## Como Executar o Projeto

1. Clone o repositório:
	```bash
	git clone https://github.com/BGLuis/biblioteca.git
	```
2. Navegue até o diretório do projeto:
	```bash
	cd biblioteca
	```
3. Instale as dependências:
	```bash
	npm install
	```
4. Execute a aplicação:
	```bash
	npm start
	```

## Estrutura de Componentes

- **Header**: Componente que exibe o cabeçalho da aplicação com informações do usuário.
- **Footer**: Componente que exibe o rodapé da aplicação.
- **BooksList**: Componente que exibe a lista de livros.
- **Book**: Componente que exibe os detalhes de um livro específico.

## Rotas da Aplicação

- `/`: Página inicial que exibe a lista de livros.
- `/book/:id`: Página de detalhes de um livro específico.
