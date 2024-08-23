# Planejamento para Testes de Performance

## 1. Nome do Projeto
**Gerenciamento de Filmes no Sistema de Cinema**

## 2. Resumo
**Objetivo:** Avaliar a performance da API para o gerenciamento de filmes no sistema de cinema, assegurando que o sistema suporte cargas elevadas, mantenha tempos de resposta aceitáveis, e opere de maneira estável sob diferentes condições.

## 3. Objetivos do Teste de Performance
- **Tempo de Resposta:** Garantir que o tempo de resposta para operações CRUD não exceda os limites estabelecidos (500 ms para criação e atualização, 600 ms para listagem, e 500 ms para exclusão).
- **Capacidade de Carga:** Identificar o ponto de saturação onde o tempo de resposta excede os limites aceitáveis, esperando suportar pelo menos 100 solicitações de criação por segundo.
- **Confiabilidade e Estabilidade:** Manter uma taxa de erro abaixo de 5% durante o teste de estresse.
- **Configurações de Testes:** Realizar testes de Carga, Estresse, Escalabilidade, Pico e Concorrência.

## 4. Requisitos Não Funcionais de Performance
- **Capacidade de Processamento:** A API deve ser capaz de processar pelo menos 100 solicitações de criação de filmes por segundo.
- **Tempo de Resposta para Criação:** O tempo médio de resposta para a criação de um novo filme não deve exceder 2000 milissegundos.
- **Tempo de Resposta para Listagem:** A API deve ser capaz de responder a solicitações GET de listagem de filmes em menos de 100 milissegundos.
- **Paginação:** A lista de filmes deve ser paginada, com no máximo 20 filmes por página.
- **Tempo de Resposta para Detalhes:** A API deve ser capaz de responder a solicitações GET de detalhes de um filme em menos de 50 milissegundos.
- **Capacidade de Processamento para Atualização:** A API deve ser capaz de processar pelo menos 50 solicitações de atualização de filmes por segundo.
- **Tempo de Resposta para Atualização:** O tempo médio de resposta para a atualização dos detalhes de um filme não deve exceder 2000 milissegundos.
- **Capacidade de Processamento para Exclusão:** A API deve ser capaz de processar pelo menos 30 solicitações de exclusão de filmes por segundo.
- **Tempo de Resposta para Exclusão:** O tempo médio de resposta para a exclusão de um filme não deve exceder 2000 milissegundos.

## 5. Métricas a Serem Monitoradas
- **Tempo de Resposta (Latência):** Identificar o tempo necessário para que o sistema responda a uma requisição.
- **Taxa de Erro:** Monitorar a porcentagem de requisições que resultam em erro.
- **Throughput:** Medir o número de requisições processadas por segundo.
- **Uso de Recursos:** Monitorar o uso de CPU e memória durante os testes.

## 6. Configurações de Testes
- **Carga:** 50 a 200 usuários simultâneos durante 4 minutos.
- **Estresse:** 50 a 300 usuários simultâneos durante 4 minutos.
- **Escalabilidade:** 50 a 500 usuários simultâneos durante 5 minutos.
- **Pico:** 50 a 500 usuários simultâneos durante 30 segundos.
- **Concorrência:** 50 a 300 usuários simultâneos durante 1 minutos e 40 segundos.
- **Capacidade:** 50 a 500 usuários simultâneos durante 3 minutos e 30 segundos.


    ### 1. Rota de Filmes
    - **TP01:** Carga para POST
    - **TP02:** Concorrência para POST
    - **TP03:** Escalabilidade para GET por ID
    - **TP04:** Estresse para POST
    - **TP05:** Pico para PUT

    ### 2. Rota de Tickets
    - **TP06:** Carga para POST
    - **TP07:** Concorrência para POST
    - **TP08:** Escalabilidade para GET por ID
    - **TP09:** Estresse para POST
    - **TP10:** Pico para PUT

    ### 3. Flow01 (Fluxo Completo de Filme e Ticket)
    - **TP23:** Carga para Fluxo Completo
    - **TP24:** Concorrência para Fluxo Completo
    - **TP25:** Escalabilidade para Fluxo Completo
    - **TP26:** Estresse para Fluxo Completo
    - **TP27:** Pico para Fluxo Completo

    ### 4. Flow02 (Fluxo Simplificado de Filme e Ticket)
    - **TP28:** Carga para Fluxo Simplificado
    - **TP29:** Concorrência para Fluxo Simplificado
    - **TP30:** Escalabilidade para Fluxo Simplificado
    - **TP31:** Estresse para Fluxo Simplificado
    - **TP32:** Pico para Fluxo Simplificado


## 7. Pessoas Envolvidas
- **Testadores:** Daniel.

## 8. Local dos Testes
- **Ambiente:** Testes de performance serão realizados em um ambiente emulado, replicando as condições de uso do ambiente de produção.

## 9. Recursos Necessários
- **Recursos Humanos:** Testadores especializados em performance.
- **Equipamento:** Computador de alto desempenho.
- **Software:** JMeter, K6, etc.

## 10. Cronograma
- **Data de Início:** 19/08/2024
- **Data de Conclusão:** 30/08/2024
