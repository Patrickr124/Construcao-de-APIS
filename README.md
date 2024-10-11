# Construcao-de-APIS
# Gerenciamento de Produtos
Este projeto é uma API para gerenciar produtos, permitindo criar, ler, atualizar e deletar produtos. A API é construída com Express.js e utiliza validação de dados com express-validator.

# Índice
Instalação
Uso
Rotas da API
Validação
Estrutura do Projeto
Contribuição
Licença
Instalação
Para instalar o projeto, clone o repositório e instale as dependências necessárias. Em seguida, inicie o servidor para que a API esteja disponível.

# Uso
A API estará disponível em http://localhost:1234. Você pode utilizar ferramentas como Postman ou cURL para interagir com as rotas da API.

# Rotas da API
Criar Produto
Para criar um novo produto, envie uma requisição POST para /products com os dados do produto no corpo da requisição. Os campos obrigatórios são título, descrição, preço e quantidade.

# Listar Produtos
Para listar todos os produtos, envie uma requisição GET para /products. A resposta será uma lista de todos os produtos cadastrados.

# Obter Produto por ID
Para obter um produto específico pelo ID, envie uma requisição GET para /products/:id. Se o produto existir, ele será retornado; caso contrário, uma mensagem de erro será exibida.

# Atualizar Produto
Para atualizar um produto existente, envie uma requisição PUT para /products/:id com os dados atualizados no corpo da requisição. Se o produto for encontrado, ele será atualizado; caso contrário, uma mensagem de erro será exibida.

# Deletar Produto
Para deletar um produto, envie uma requisição DELETE para /products/:id. Se o produto for encontrado e deletado, uma mensagem de sucesso será exibida; caso contrário, uma mensagem de erro será exibida.

# Validação
A validação dos dados é feita utilizando express-validator. As seguintes validações são aplicadas:

O título não pode estar vazio.
A descrição não pode estar vazia.
O preço deve ser um número positivo.
A quantidade deve ser um inteiro maior que 0.
Estrutura do Projeto
O projeto é organizado da seguinte forma:

businessrules.js: Contém as funções de negócio para manipulação dos produtos.
data.json: Arquivo de armazenamento dos dados dos produtos.
index.js: Arquivo principal que configura e inicia o servidor.
package.json: Arquivo de configuração do npm.
README.md: Documentação do projeto.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

# Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo de licença para mais detalhes.
