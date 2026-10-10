# Ritmo — seu treino, uma série por vez

Aplicativo estático em português, feito para celular e computador. Sem API paga, assinatura, chave, anúncios, backend ou dependências de execução. Todos os arquivos necessários estão nesta pasta.

## Publicar no GitHub Pages

1. Crie um repositório **público** na sua conta do GitHub, por exemplo `meu-treino`.
2. Envie **o conteúdo desta pasta** para a raiz do repositório. O `index.html` deve ficar na raiz, ao lado de `app.js`, `core.js`, `styles.css`, `sw.js` e `manifest.webmanifest`. Envie também a pasta `icons` e o arquivo `.nojekyll`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
5. Selecione **main** e **/(root)**; clique em **Save**.
6. Quando a publicação terminar, abra o endereço exibido pelo GitHub Pages. É esse endereço que você usará no celular e no PC.

Não envie o ZIP inteiro como se fosse a página: extraia e envie os arquivos. Não precisa instalar Node, npm ou executar build.

Referência oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Testar no computador antes de publicar

Com Python instalado, abra um terminal nesta pasta e execute:

```bash
python3 -m http.server 8000
```

No Windows, também pode usar `py -m http.server 8000`. Abra `http://localhost:8000`.

Abrir `index.html` diretamente pode permitir parte da interface, conforme o navegador, mas o modo recomendado é usar HTTP local ou HTTPS no GitHub Pages. Instalação e offline não funcionam via `file://`.

## Primeiro uso

- Começa com SEG/PUSH, TER/PULL, QUA/LEGS, QUI/UPPER e SEX/LOWER.
- O PUSH tem os seis exercícios solicitados, com **3×8–12 apenas como exemplo editável**; cargas e histórico começam vazios. Os outros dias estão vazios para você montar.
- Em **Minhas fichas**, adicione, duplique, mova e edite exercícios, alternativas, aquecimento e dias. Use os botões de subir/descer para reorganizar. Não há drag & drop.
- Para o mesmo exercício compartilhar recordes entre dias, use **Reutilizar exercício e histórico** no cadastro. Criar um exercício novo cria uma identidade independente, mesmo com nome igual.
- **Iniciar treino → aquecimento → séries → descanso → próximo exercício**.
- Carga aceita vírgula ou ponto. Defina se ela é total, por lado, por halter, peso corporal ou assistência.
- **Fazer depois** envia o exercício ao final da fila preservando séries já feitas. **Não realizar nesta sessão** é uma ação separada.
- A fila permite reorganizar e escolher o próximo. Substituições mantêm as séries anteriores no exercício original e valem só para a sessão, salvo escolha explícita de atualizar a ficha.
- Use o lápis de uma série para corrigir carga/repetições ou excluir um lançamento errado, inclusive no histórico.
- Ao concluir o último exercício, toque em **Concluir treino** para salvar e ver o resumo. Pode encerrar antecipadamente e salvar como incompleto.

## Recordes

O destaque **Seu recorde pessoal** usa o histórico inteiro, incluindo séries confirmadas da sessão atual. Não é apenas o treino anterior.

- Carga externa: maior carga; em empate, mais repetições.
- Cargas menores têm recordes de repetições próprios, visíveis no histórico do exercício.
- Peso corporal: maior número de repetições.
- Assistência: mais repetições **no mesmo nível de assistência**. Mais assistência não é considerada melhora.
- Tipos de carga e exercícios diferentes não são misturados.
- A primeira série estabelece uma marca inicial; não é contada como recorde superado.
- Corrigir ou excluir uma série recalcula os recordes e os totais de PR. Sessões antigas podem ter seu total de PR recalculado após corrigir registros anteriores.

Renomear um exercício preserva sua identidade. Para outra modalidade/equipamento, crie outro exercício ou use Substituir.

## Dados, recuperação e backup

Os dados ficam em **IndexedDB, neste navegador e endereço**. Fichas, sessão ativa, campos digitados, fila e séries são salvos automaticamente. O descanso usa horário de término para continuar correto após sair e voltar. O treino continua contando tempo enquanto o aplicativo está fechado.

Não existe conta ou sincronização automática. PC, celular, navegadores e endereços diferentes têm dados separados. Limpar dados do site ou usar navegação privada pode remover seus registros. Exporte backups regularmente.

**Ajustes → Exportar backup** baixa um JSON com tudo. No outro aparelho, abra o mesmo aplicativo e importe esse arquivo. Confira o resumo e confirme a substituição; a importação substitui os dados locais. Arquivos inválidos não são aplicados. Limite de importação: 20 MB.

As gravações usam transações e revisão para evitar sobrescrita silenciosa entre abas. Se aparecer conflito, recarregue a aba desatualizada. Em falha de gravação, o aplicativo avisa e não confirma o salvamento.

## Spotify

Cole uma URL de playlist `https://open.spotify.com/playlist/...` em Ajustes. O botão **Abrir Spotify** abre esse link em outra aba/app. O Ritmo não usa API ou SDK do Spotify, não exige Premium e não controla a reprodução. A reprodução segue as condições da sua conta no Spotify.

## Instalação, offline e recursos do celular

Depois da primeira visita completa por HTTPS, o service worker guarda os arquivos para abrir offline. A música é externa e depende do Spotify.

- Android/Chrome: use a opção de instalação do navegador ou o botão em Ajustes quando oferecido.
- iPhone/Safari: Compartilhar → Adicionar à Tela de Início.
- Som é liberado por interação e pode ser bloqueado em segundo plano. Vibração e tela sempre ativa dependem do aparelho/navegador. Não há notificações push.
- Uma aba suspensa não garante alerta no instante do fim do descanso; a contagem é corrigida ao voltar.
- A atualização não é forçada durante o treino. Quando houver nova versão, finalize a sessão e use o botão de atualizar.

## Atualizar os arquivos

Altere os arquivos e **incremente `VERSION` no `sw.js`** a cada versão publicada. Não altere `schema` em `core.js` sem implementar migração dos dados. A versão inicial usa schema 1.

## Organização

- `index.html`: página e carregamento local dos arquivos.
- `styles.css`: temas, responsividade e acessibilidade.
- `core.js`: filas, registros, PRs e validação de backups.
- `app.js`: interface, IndexedDB, backup e recursos opcionais.
- `sw.js`: cache offline e atualizações.
- `manifest.webmanifest` e `icons/`: instalação e identidade.
- `tests/`: verificações das regras, executáveis com `node tests/core.test.cjs`.
- `VERIFICACAO.md`: escopo e resultado dos testes realizados.

Nenhuma biblioteca, fonte ou script é carregado de CDN. O único link externo usado durante o treino é a playlist opcional.
