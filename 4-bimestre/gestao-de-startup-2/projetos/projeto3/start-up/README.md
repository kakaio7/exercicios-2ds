# StartUP — Painel de Métricas do Produto

### Conectando pessoas. Construindo startups. Transformando ideias em realidade.

---

## Sobre o projeto

O **StartUP** é uma plataforma que conecta pessoas interessadas em criar startups, encontrar sócios e formar equipes com habilidades complementares.

A proposta é funcionar como uma rede social voltada ao empreendedorismo, permitindo que os usuários apresentem suas habilidades, divulguem ideias e encontrem colaboradores para desenvolver novos projetos.

Por exemplo, uma pessoa que precisa de um desenvolvedor back-end pode publicar essa necessidade e encontrar alguém interessado em participar da equipe.

## Objetivo do produto

Facilitar a criação de startups por meio da conexão entre pessoas, ideias e habilidades, incentivando a colaboração e o desenvolvimento de novos negócios.

## Público-alvo

- Empreendedores que desejam tirar ideias do papel.
- Desenvolvedores e profissionais de tecnologia.
- Designers e profissionais de marketing.
- Pessoas que procuram sócios ou colaboradores.
- Estudantes interessados em inovação e empreendedorismo.

## Funcionalidades do produto

- **Perfis de usuários:** apresentação de habilidades e interesses.
- **Publicação de projetos:** divulgação de ideias e oportunidades.
- **Busca por colaboradores:** conexão entre pessoas com habilidades complementares.
- **Formação de equipes:** aproximação de pessoas interessadas em desenvolver startups.
- **Comunicação entre usuários:** contato para discutir ideias e possíveis parcerias.

---

## Projeto 3 — Painel de Métricas do Produto

O objetivo desta etapa é acompanhar o desempenho do StartUP por meio de métricas de produto e de código, identificar dificuldades e tomar decisões coletivas com base nos resultados analisados.

### Métricas acompanhadas

| **Categoria** | **Indicadores** |
|---|---|
| Produto | Taxa de ativação, retenção e NPS |
| Código | Commits realizados e bugs em aberto |

Cada indicador apresenta seu valor atual, o período analisado e uma ação definida pela equipe para responder a uma possível piora do resultado.

### Cálculos e análise

O painel apresenta os cálculos e as interpretações dos seguintes indicadores:

- **Taxa de ativação:** percentual de visitantes que realizam uma ação importante no produto.
- **Retenção:** percentual dos usuários de uma mesma coorte que voltam a utilizar o produto.
- **Churn:** percentual dos usuários da mesma coorte que não retornam durante o período de acompanhamento.
- **NPS (Net Promoter Score):** indicador de satisfação e disposição dos usuários para recomendar o produto.
- **Commits:** registros de alterações realizadas no código do projeto.
- **Bugs em aberto:** erros identificados que ainda precisam ser corrigidos.
- **Funil AARRR:** análise das etapas de aquisição, ativação, retenção, receita e recomendação para identificar a maior queda de usuários.

Os valores, as fórmulas, as interpretações e as ações correspondentes estão documentados em [`metricas/painel.md`](metricas/painel.md).

### Decisão coletiva

Após discutir as alternativas e realizar a votação, a equipe definiu como ação prioritária **simplificar o cadastro e melhorar as orientações do primeiro acesso ao StartUP**.

A decisão foi motivada pela queda estimada de 70% entre aquisição e ativação: dos 20 visitantes considerados no painel, 6 foram ativados e 14 não chegaram à etapa de ativação.

A equipe priorizará essa melhoria para facilitar a entrada de novos usuários e reduzir as dificuldades no primeiro acesso.

O registro formal da decisão, incluindo a justificativa, o responsável e a data de revisão, está disponível em [`metricas/decisao.md`](metricas/decisao.md).

### Arquivos do projeto

- [**Painel de métricas — `painel.md`](metricas/painel.md): indicadores de produto e código, cálculos de NPS, retenção e churn, funil AARRR e análise dos resultados.
- [**Decisão coletiva — `decisao.md`](metricas/decisao.md): registro da decisão da equipe, justificativa numérica, responsável e data de revisão.
- [**Issue #1 — Ação prioritária**](https://github.com/kakaio7/start-up/issues/1): acompanhamento das tarefas para simplificar o cadastro e melhorar o primeiro acesso.

---

## Tecnologias utilizadas

- **Frontend:** React.
- **Versionamento e colaboração:** Git e GitHub.

## Equipe

| **Integrante** | **Projeto** |
|---|---|
| Kauã | StartUP |
| Eryck | StartUP |
| Mario | StartUP |
| Caio | StartUP |
| Wanessa | StartUP |

## Organização da equipe

As responsabilidades foram distribuídas para permitir a execução das atividades em paralelo, mantendo a participação coletiva nas decisões do projeto.

| **Função** | **Responsabilidade** |
|---|---|
| Métricas de produto | Analisar retenção, engajamento e NPS. |
| Métricas de código | Verificar commits, pull requests (PRs), bugs e desempenho. |
| Painel | Organizar os indicadores, os valores e os cálculos. |
| Documentação | Registrar o funil AARRR e a decisão coletiva. |

A divisão de responsabilidades orienta a execução das tarefas, enquanto as decisões sobre as prioridades do produto são discutidas e tomadas por toda a equipe.

**Atividade:** Projeto 3 — Painel de Métricas do Produto.

## Status do projeto

**Em desenvolvimento.**

A equipe utiliza os indicadores e as necessidades dos usuários para orientar as melhorias e acompanhar a evolução do StartUP.

---

*StartUP — Grandes ideias começam com as conexões certas.*
