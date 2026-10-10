# Verificação — Ritmo 1.0

Executada em 29/09/2026 sobre os arquivos entregues.

## Testes de regras — aprovados

Com Node, sem dependências (`node tests/core.test.cjs`):

| Regra | Casos verificados |
| --- | --- |
| PR-01 | Primeira marca, mais reps na mesma carga, carga menor, nova carga máxima; identidade e modalidade separadas |
| PR-02 | Assistência comparada por nível; maior assistência não gera PR de carga |
| QUEUE-01 | Adiar preserva séries; último pendente rejeita adiamento sem loop |
| SUB-01 | Substituir preserva logs do original e separa PRs |
| EDIT-01 | Excluir série recalcula PR e reabre exercício incompleto |
| BACKUP-01 | Schema válido, estrutura malformada, repetições inválidas |
| LINK-01 | Link Spotify permitido e URLs de protocolo/host indevidos rejeitados |

## Testes no navegador — aprovados

Chromium headless, aplicação real em HTTP local sob a subpasta `/ritmo/`, com IndexedDB e service worker:

- Abrir ficha e iniciar sessão; concluir aquecimento.
- Registrar carga/repetições e iniciar descanso automaticamente.
- Recarregar página durante descanso e recuperar a sessão e contagem.
- Adiar um exercício parcialmente realizado e abrir o próximo.
- Substituir por exercício novo e registrar carga decimal com vírgula.
- Corrigir uma série pela interface e conferir PR recalculado.
- Encerrar antecipadamente e conferir sessão incompleta no histórico.
- Editar preferências, tema claro e link Spotify.
- Exportar JSON e conferir duas séries com suas identidades preservadas.
- Rejeitar importação inválida sem mudar o histórico.
- Importar backup válido após confirmação e preservar sessões.
- Criar ficha e exercício pela interface.
- Completar sessão de um exercício com peso corporal.
- Duplo clique no botão de série sem duplicar o registro.
- Concluir a sessão e conferir status completo.
- Recarregar offline após ativar cache e recuperar histórico.
- Capturas reais inspecionadas em 1440×1000 e 390×844; tela mobile sem transbordamento horizontal.
- Revisão visual do modo escuro, player mobile e ajustes no modo claro.
- Sintaxe dos arquivos JavaScript verificada.

## Limites desta verificação

- O projeto está pronto para upload; não foi publicado em uma conta GitHub.
- Instalação física em Android/iPhone, áudio, vibração, wake lock e funcionamento sob bloqueio de tela precisam de teste no aparelho real. Suporte e políticas variam por navegador.
- A reprodução externa no Spotify não foi automatizada; o link é validado e a integração não usa API.
- O conflito entre abas é protegido por comparação de revisão dentro da transação IndexedDB; o cenário concorrente não foi executado no teste de interface.
- Atualização futura de service worker está implementada com confirmação após o treino; a troca entre duas versões publicadas não foi simulada.

## Escopo entregue

Tudo funciona sem dependências de execução ou serviço pago. Os testes de navegador usaram ferramentas somente no ambiente de desenvolvimento; elas não fazem parte dos requisitos para usar ou publicar o app.
