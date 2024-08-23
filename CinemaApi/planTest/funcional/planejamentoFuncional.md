# Planejamento para Testes Funcionais

## 1. Nome do Projeto
**Gerenciamento de Filmes e Tickets no Sistema de Cinema**

## 2. Resumo
**Objetivo:** Garantir a funcionalidade e a integridade da API para o gerenciamento de filmes e tickets no sistema de cinema, permitindo que administradores e usuários realizem operações de CRUD (Create, Read, Update, Delete) de maneira eficiente e segura.

## 3. Cenários Macro na Suíte de Testes

### **US 001: [API] Gerenciamento de Filmes**

- **C01 Cenário de Criação de Filmes (POST)**
  - Valor gerado: Permitir a inclusão de novos filmes no catálogo, garantindo que todas as informações obrigatórias sejam fornecidas e validadas.

- **C02 Cenário de Visualização de Filmes (GET)**
  - Valor gerado: Permitir a visualização de todos os filmes disponíveis no catálogo.

- **C03 Cenário de Visualização de Filmes por ID (GET/{id})**
  - Valor gerado: Permitir a visualização dos detalhes específicos de um filme ao fornecer seu ID.

- **C04 Cenário de Atualização de Filmes (PUT)**
  - Valor gerado: Permitir a atualização das informações de um filme existente no catálogo.

- **C05 Cenário de Remoção de Filmes (DELETE)**
  - Valor gerado: Permitir a remoção segura de filmes do catálogo.

### **US 002: [API] Gerenciamento de Tickets**

- **C06 Cenário de Criação de Tickets (POST)**
  - Valor gerado: Permitir a criação de novos tickets para filmes, garantindo que todos os detalhes do ticket sejam fornecidos e validados.

- **C07 Cenário de Visualização de Tickets (GET)**
  - Valor gerado: Permitir a visualização de todos os tickets disponíveis.

- **C08 Cenário de Visualização de Tickets por ID (GET/{id})**
  - Valor gerado: Permitir a visualização dos detalhes específicos de um ticket ao fornecer seu ID.

- **C09 Cenário de Atualização de Tickets (PUT)**
  - Valor gerado: Permitir a atualização dos detalhes de um ticket existente.

- **C10 Cenário de Remoção de Tickets (DELETE)**
  - Valor gerado: Permitir a remoção segura de tickets do sistema.

### Cenarios de Fluxos

- **FL01 Cenário de Fluxo End-to-End para Filmes e Tickets**
  - Valor gerado:  Garantir que as operações de criação, visualização, atualização e exclusão sejam realizadas com sucesso tanto para filmes quanto para tickets. Esse fluxo assegura que o sistema de gerenciamento de cinema funcione de maneira integrada, permitindo que os administradores possam gerenciar todo o ciclo de vida de filmes e tickets, desde a criação até a remoção segura.

- **FL02 Cenário de Fluxo End-to-End para Filmes e Tickets**
  - Valor gerado:  Garantir que todas as operações de criação, visualização, atualização e exclusão sejam realizadas com sucesso tanto para filmes quanto para tickets. Esse fluxo assegura que o sistema de gerenciamento de cinema funcione de maneira integrada, permitindo que os administradores possam gerenciar todo o ciclo de vida de filmes e tickets, desde a criação até a remoção segura.


## 4. Testes Candidatos à Automação

- **Testes de CRUD:**
  - Todos os cenários de criação, leitura, atualização e exclusão são candidatos à automação devido à sua necessidade de repetição e à eficiência que a automação proporciona.

- **Testes de Validação de Dados:**
  - Automação de testes que verificam a validação de campos obrigatórios e unicidade dos filmes e tickets.

- **Testes de Integridade e Segurança:**
  - Testes que verificam as restrições quanto a acesso sem autorização e a impossibilidade de cadastrar filmes ou tickets duplicados são críticos e devem ser automatizados.

## 5. Cenários de Teste Importantes

- **Cenário 1: C01 Criação de Filmes (POST)**
  - Valor Gerado: Garantir que o administrador consiga cadastrar um filme corretamente e que o sistema valide todos os campos obrigatórios e a unicidade do título.

- **Cenário 2: C02 Visualização de Filmes (GET)**
  - Valor Gerado: Garantir que o usuário ou administrador consiga visualizar todos os filmes cadastrados.

- **Cenário 3: C03 Visualização de Filmes por ID (GET/{id})**
  - Valor Gerado: Garantir que o usuário ou administrador consiga visualizar os detalhes de um filme específico ao fornecer o ID.

- **Cenário 4: C06 Criação de Tickets (POST)**
  - Valor Gerado: Garantir que o usuário consiga criar um ticket corretamente, e que o sistema valide todos os campos obrigatórios.

- **Cenário 5: C08 Visualização de Tickets por ID (GET/{id})**
  - Valor Gerado: Garantir que o usuário ou administrador consiga visualizar os detalhes de um ticket específico ao fornecer o ID.

## 6. Testes Exploratórios Utilizados

- Freestyle
- Baseado em Cenários
- Valor Limite
- Vazio
- Testes de Segurança
- Testes de Validação de Dados
- Testes de Integridade
- [Test Heuristics Cheat Sheet | Ministry of Testing](https://www.ministryoftesting.com/articles/test-heuristics-cheat-sheet)

## 7. Pessoas Envolvidas

- **Testadores:** Daniel.

## 8. Local dos Testes

- **Ambiente:** Testes serão realizados em um ambiente emulado, replicando o ambiente de produção.

## 9. Recursos Necessários

- **Recursos Humanos:** Testadores e Desenvolvedores.
- **Equipamento:** Computador de alto desempenho.
- **Software:** Postman, Node.js, VS Code, etc.

## 10. Cronograma

- **Data de Início:** 19/08/2024
- **Data de Conclusão:** 30/08/2024
