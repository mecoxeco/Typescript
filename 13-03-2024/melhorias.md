#Validação de Entrada Aprimorada
  Implementamos uma validação aprimorada para garantir que todos os dados necessários sejam inseridos ao criar um novo livro na API. Modificamos a função create do controlador BookController para solicitar os dados em um loop até que todos os campos necessários sejam fornecidos. Isso garante que a API só crie um novo livro quando todos os campos obrigatórios (title, author, ISBN e pageNumber) forem fornecidos no corpo da solicitação.

#Padronização de Nomes de Rotas e Recursos:
  Padronizamos os nomes das rotas e dos recursos para seguir convenções comuns, melhorando a consistência e a legibilidade da API. Renomeamos as rotas e os recursos para seguir uma convenção de pluralização e utilizamos verbos HTTP apropriados para cada operação CRUD.

#Adição do .gitignore: 
  Criamos e adicionamos um arquivo .gitignore para ignorar arquivos e diretórios desnecessários, garantindo que apenas os arquivos essenciais sejam versionados no repositório Git.

#Manipulação de Erros Melhorada:
  Apesar de não ter sido explicitamente implementada no código fornecido, recomendamos a melhoria da manipulação de erros para fornecer respostas mais significativas em caso de falhas. Implementar um middleware de tratamento de erros global pode ajudar a capturar e responder adequadamente a erros durante as operações CRUD.

#Documentação da API e Testes: 
  Embora não tenham sido implementados no código fornecido, recomendamos a adição de documentação detalhada da API usando ferramentas como Swagger ou OpenAPI para facilitar o uso por parte dos desenvolvedores, bem como a implementação de testes unitários e de integração para garantir a robustez e a confiabilidade do código.
