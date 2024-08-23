## C01 Cenário de Criação de Filmes (POST)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 01**     | Cadastrar um filme com todos os campos preenchidos corretamente. | “message”: “Filme cadastrado com sucesso”. status 201 Created | ✅ | - | ✅ |
| **CT 02**     | Cadastrar um filme sem preencher o campo título obrigatório. | “titulo”: “Título não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 03**     | Cadastrar um filme sem preencher o campo descrição obrigatório. | “descricao”: “Descrição não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 04**     | Cadastrar um filme sem preencher o campo data de lançamento obrigatório. | “dataLancamento”: “Data de lançamento não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 05**     | Cadastrar um filme sem preencher o campo data de horários de exibição obrigatório. | “horários de exibição”: “horários de exibição não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 06**     | Cadastrar um filme com um título que já está registrado. | “message”: “Este título já está cadastrado”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 07**     | Cadastrar um filme com a data de lançamento no futuro. | “message”: “Filme cadastrado com sucesso”. status 201 Created | ✅ | - | ✅ |
| **CT 08**     | Cadastrar um filme com a data de lançamento anterior ao ano atual. | “dataLancamento”: “Data de lançamento deve ser após o ano atual”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 10**     | Cadastrar um filme com caracteres especiais no campo título. | “titulo”: “Título não pode conter caracteres especiais”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 11**     | Cadastrar um filme e preencher o campo data de lançamento com formato incorreto de data. | “dataLancamento”: “Data de lançamento não pode ficar em formato incorreto”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 12**     | Cadastrar um filme com título muito curto (menos de 2 caracteres). | “titulo”: “Título deve ter no mínimo 2 caracteres”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 13**     | Cadastrar um filme com uma descrição muito longa (mais de 1000 caracteres). | “descricao”: “Descrição não pode exceder 1000 caracteres”. status 400 Bad Request | ✅ | - | ✅ |


## C02 Cenário de Visualização de Filmes (GET)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 14**     | Listar todos os filmes com sucesso. | Lista de filmes. status 200 OK | ✅ | - | ✅ |
| **CT 15**     | Listar filmes quando não há nenhum filme cadastrado. | “message”: “Nenhum filme encontrado”. status 404 Not Found | ✅ | - | ✅ |

## C03 Cenário de Visualização de Filmes por ID (GET/{id})

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 16**     | Visualizar um filme específico pelo ID com sucesso. | Detalhes do filme. status 200 OK | ✅ | - | ✅ |
| **CT 17**     | Visualizar um filme com um ID inexistente. | “message”: “Filme não encontrado”. status 404 Not Found | ✅ | - | ✅ |
| **CT 18**     | Tentar visualizar um filme com ID em formato incorreto (ex: string ao invés de número). | “message”: “ID inválido”. status 400 Bad Request | ✅ | - | ✅ |


## C04 Cenário de Atualização de Filmes (PUT)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 19**     | Atualizar um filme com todos os campos preenchidos corretamente. | “message”: “Filme atualizado com sucesso”. status 200 OK | ✅ | - | ✅ |
| **CT 20**     | Atualizar um filme com um ID inexistente. | “message”: “Filme não encontrado”. status 404 Not Found | ✅ | - | ✅ |
| **CT 21**     | Atualizar um filme sem preencher o campo título obrigatório. | “titulo”: “Título não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 22**     | Atualizar um filme sem preencher o campo descrição obrigatório. | “descricao”: “Descrição não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 23**     | Atualizar um filme sem preencher o campo data de lançamento obrigatório. | “dataLancamento”: “Data de lançamento não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 24**     | Atualizar um filme sem preencher o campo data de horários de exibição obrigatório. | “horários de exibição”: “horários de exibição não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |

## C05 Cenário de Remoção de Filmes (DELETE)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 25**     | Remover um filme com sucesso pelo ID. | “message”: “Filme removido com sucesso”. status 204 No Content | ✅ | - | ✅ |
| **CT 26**     | Tentar remover um filme com um ID inexistente. | “message”: “Filme não encontrado”. status 404 Not Found | ✅ | - | ✅ |
| **CT 27**     | Tentar remover um filme com ticket associado. | “message”: “Acesso negado”. status 403 Forbidden | ✅ | Não pode ser removido filme que tenha ticket associado | ✅ |


## C06 Cenário de Criação de Tickets (POST)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 28**     | Cadastrar um ticket com todos os campos preenchidos corretamente. | “message”: “Ticket cadastrado com sucesso”. status 201 Created | ✅ | - | ✅ |
| **CT 29**     | Cadastrar um ticket sem preencher o campo filmeId obrigatório. | “filmeId”: “ID do filme não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 30**     | Cadastrar um ticket sem preencher o campo usuário obrigatório. | “userId”: “ID do usuário não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 31**     | Cadastrar um ticket sem preencher o campo número do assento. | “seatNumber”: “Número do assento não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 32**     | Cadastrar um ticket sem preencher o campo preço. | “seatNumber”: “preço não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 33**     | Cadastrar um ticket sem preencher o campo horários de exibição. | “seatNumber”: “horários de exibição não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 34**     | Cadastrar um ticket com um filme ID inexistente. | “message”: “Filme não encontrado”. status 404 Not Found | ✅ | - | ✅ |

## C07 Cenário de Visualização de Tickets (GET)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 35**     | Listar todos os tickets com sucesso. | Lista de tickets. status 200 OK | ✅ | - | ✅ |
| **CT 36**     | Tentar listar tickets quando não há nenhum ticket cadastrado. | “message”: “Nenhum ticket encontrado”. status 404 Not Found | ✅ | - | ✅ |

## C08 Cenário de Visualização de Tickets por ID (GET/{id})

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 37**     | Visualizar um ticket específico pelo ID com sucesso. | Detalhes do ticket. status 200 OK | ✅ | - | ✅ |
| **CT 38**     | Tentar visualizar um ticket com um ID inexistente. | “message”: “Ticket não encontrado”. status 404 Not Found | ✅ | - | ✅ |

## C09 Cenário de Atualização de Tickets (PUT)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 39**     | Atualizar um ticket com todos os campos preenchidos corretamente. | “message”: “Ticket atualizado com sucesso”. status 200 OK | ✅ | - | ✅ |
| **CT 40**     | Tentar atualizar um ticket com um ID inexistente. | “message”: “Ticket não encontrado”. status 404 Not Found | ✅ | - | ✅ |
| **CT 41**     | Cadastrar um ticket sem preencher o campo filmeId obrigatório. | “filmeId”: “ID do filme não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 42**     | Cadastrar um ticket sem preencher o campo usuário obrigatório. | “userId”: “ID do usuário não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 43**     | Cadastrar um ticket sem preencher o campo número do assento. | “seatNumber”: “Número do assento não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 44**     | Cadastrar um ticket sem preencher o campo preço. | “seatNumber”: “preço não pode ficar em branco”. status 400 Bad Request | ✅ | - | ✅ |
| **CT 45**     | Atualizar o número do assento de um ticket para um número já ocupado. | “seatNumber”: “Assento já está ocupado”. status 400 Bad Request | ✅ | - | ✅ |


## C10 Cenário de Remoção de Tickets (DELETE)

| Caso de Teste | Descrição | Response | Status | Observações | Sujeito a Automação |
|---------------|-----------|----------|--------|-------------|----------------------|
| **CT 46**     | Remover um ticket com sucesso pelo ID. | “message”: “Ticket removido com sucesso”. status 204 No Content | ✅ | - | ✅ |
| **CT 47**     | Tentar remover um ticket com um ID inexistente. | “message”: “Ticket não encontrado”. status 404 Not Found | ✅ | - | ✅ |

## FL01 Cenário de Fluxo 01

| **ID** | **Passos** | **Resultado Esperado** | **Status** |
|--------|------------|------------------------|------------|
| **FL01** | 1. Criar um novo filme<br>2. Visualizar a lista de filmes<br>3. Criar um novo ticket para o filme criado<br>4. Visualizar a lista de tickets<br>5. Atualizar os detalhes do filme<br>6. Visualizar os detalhes do filme atualizado<br>7. Atualizar o ticket criado<br>8. Visualizar os detalhes do ticket atualizado<br>9. Deletar o ticket<br>10. Deletar o filme | Todas as operações de CRUD para filmes e tickets devem ser concluídas com sucesso | ✅ |


## FL02 Cenário de Fluxo 02

| **ID** | **Passos** | **Resultado Esperado** | **Status** |
|--------|------------|------------------------|------------|
| **FL02** | 1. Criar um novo filme<br>2. Visualizar a lista de filmes<br>3. Visualizar um filme em especifico<br>4. Criar um ticket para o filme<br>5. Visualizar o ticket<br> | Todas as operações de CRUD para filmes e tickets devem ser concluídas com sucesso | ✅ |