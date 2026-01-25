# Projetos Angular — Versões e execução

Resumo das versões encontradas neste workspace e instruções para executar os projetos localmente.

- **Node (recomendado):** 20.20.0 (instalado via `nvm install 20.20.0`). Alternativa: Node LTS 18 (>=18.13.0).

- **Instrução geral de execução (válida para todos os projetos):**
  1. Abra um terminal e selecione a versão do Node (se usar nvm): `nvm use 20.20.0`.
  2. Entre na pasta do projeto: `cd <nome-do-projeto>`.
  3. Instale dependências: `npm install`.
  4. Inicie o servidor de desenvolvimento: `npm start` ou `ng serve`.
  5. Abra no navegador: `http://localhost:4200/` (ou a porta que o `ng serve` indicar).

- **Observações:**
  - Alguns projetos podem usar portas diferentes; se necessário, rode `ng serve --port PORT`.
  - Se não tiver o Angular CLI global, `npm start` (quando presente) chamará o `ng` local.

Projetos e versões do `@angular/core` encontradas:

- aula-template-variables: ^17.0.0 — [aula-template-variables/package.json](aula-template-variables/package.json#L16)
- aula-projecao: ^17.0.0 — [aula-projecao/package.json](aula-projecao/package.json#L16)
- aula-card-project: ^17.0.0 — [aula-card-project/package.json](aula-card-project/package.json#L16)
- aula-element-ref: ^21.0.0 — [aula-element-ref/package.json](aula-element-ref/package.json#L28)
- aula-style-directives: ^16.1.0 — [aula-style-directives/package.json](aula-style-directives/package.json#L16)
- aula-ng: ^16.1.0 — [aula-ng/package.json](aula-ng/package.json#L16)
- aula-ngfor: ^16.1.0 — [aula-ngfor/package.json](aula-ngfor/package.json#L16)
- aula-components: ^16.1.0 — [aula-components/package.json](aula-components/package.json#L17)
- aula-filtro-usuario: ^16.1.0 — [aula-filtro-usuario/package.json](aula-filtro-usuario/package.json#L17)
- aula-card-com-projecao: ^16.1.0 — [aula-card-com-projecao/package.json](aula-card-com-projecao/package.json#L16)
- aula-cards: ^16.1.0 — [aula-cards/package.json](aula-cards/package.json#L16)
- aula-binding: ^16.1.0 — [aula-binding/package.json](aula-binding/package.json#L16)

Se quiser, posso também atualizar os `README.md` individuais de cada projeto para incluir essas instruções específicas por projeto.
