### User Story 01: [API] Movies

**Como** um usuário do sistema de cinema

**Gostaria** de poder adicionar, visualizar, atualizar e remover filmes no catálogo

**Para que** eu possa gerenciar o acervo de filmes disponíveis para os usuários.

---

### DoR (Definition of Ready)

- Banco de dados e infraestrutura para desenvolvimento disponibilizados.
- API de autenticação implementada.
- Ambiente de testes disponibilizado.
- Requisitos de negócio claramente definidos.
- API de categorias de filmes implementada.

---

### DoD (Definition of Done)

- CRUD de filmes implementado (CRIAR, ATUALIZAR, LISTAR e DELETAR).
- Análise de testes cobrindo a rota de filmes.
- Matriz de rastreabilidade atualizada.
- Automação de testes baseada na análise realizada.
- Código revisado e aprovado.
- Documentação do endpoint da API atualizada no Swagger.

---

### Acceptance Criteria

#### Requisitos Funcionais

- **Autenticação:** Os clientes e administradores deverão ser autenticados para realizar ações na rota de filmes.
- **Adicionar Filme:** Deve ser possível criar um novo filme no catálogo e o sistema deverá criar o filme e atribuir um ID único, retornar uma resposta de sucesso com o status `201 Created`, incluindo o ID do filme.
- **Visualizar Filmes:** Deve ser possível listar todos os filmes cadastrados.
- **Visualizar Filme por ID:** Deve ser possível visualizar os detalhes de um filme específico ao fornecer seu ID e o sistema deverá retornar uma resposta de erro com o status `404 Not Found`.
- **Atualizar Filme:** Deve ser possível atualizar as informações de um filme existente no catálogo e retornar uma resposta de sucesso com o status `200 OK` e os detalhes atualizados do filme.
- **Remover Filme:** Deve ser possível deletar um filme do catálogo só por administradores e retornar uma resposta de sucesso com o status `204 No Content`.
- **Validações:** Não deve ser possível cadastrar filmes duplicados (mesmo título e ano).
- **Validação de Campos Obrigatórios:** O sistema deverá validar que todos os campos obrigatórios estão corretamente preenchidos, incluindo o Titulo do Filme, Descrição, Data de Lançamento e Data de Apresentação.
- **Autorização:** Apenas administradores devem ter permissão para adicionar, deletar ou atualizar filmes.
- **Evidências:** Os testes executados deverão conter evidências.
- **Cobertura de Testes:** A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos, como tentativas de deletar filmes inexistentes.

#### Requisitos Não Funcionais de Performance

- **Capacidade de Processamento:** A API deve ser capaz de processar pelo menos 100 solicitações de criação de filmes por segundo.
- **Tempo de Resposta para Criação:** O tempo médio de resposta para a criação de um novo filme não deve exceder 2000 milissegundos.
- **Tempo de Resposta para Listagem:** A API deve ser capaz de responder a solicitações GET de listagem de filmes em menos de 600 milissegundos.
- **Tempo de Resposta para Detalhes:** A API deve ser capaz de responder a solicitações GET de detalhes de um filme em menos de 2000 milissegundos.
- **Capacidade de Processamento para Atualização:** A API deve ser capaz de processar pelo menos 50 solicitações de atualização de filmes por segundo.
- **Tempo de Resposta para Atualização:** O tempo médio de resposta para a atualização dos detalhes de um filme não deve exceder 2000 milissegundos.
- **Capacidade de Processamento para Exclusão:** A API deve ser capaz de processar pelo menos 30 solicitações de exclusão de filmes por segundo.
- **Tempo de Resposta para Exclusão:** O tempo médio de resposta para a exclusão de um filme não deve exceder 2000 milissegundos.