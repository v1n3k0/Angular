# AulaComponents

Este projeto foi gerado com o Angular CLI e está preparado para rodar com as versões:

- **Angular/CLI:** `16.1.0` (instalado por projeto)
- **NodeJS:** `18.20.8` (LTS)

## Requisitos

- NodeJS 18.20.8 (LTS)
- npm (vem junto com Node)
- `@angular/cli@16.1.0` instalado localmente no projeto

> Dica: usar o `npx` permite executar o `ng` da instalação local do projeto sem precisar instalar globalmente.

## Instalar/Selecionar Node (opções)

- Usando `nvm` (Linux/macOS/WSL/Git Bash):

```bash
nvm install 18.20.8
nvm use 18.20.8
node -v    # deve mostrar v18.20.8
```

- Usando `nvm-windows` (Windows nativo):

```powershell
# baixe e instale o nvm-windows (https://github.com/coreybutler/nvm-windows)
# depois, no terminal (PowerShell ou CMD):
nvm install 18.20.8
nvm use 18.20.8
node -v
```

- Ou instale diretamente o NodeJS 18.20.8 pelo instalador em https://nodejs.org/ (se preferir não usar nvm).

## Preparar o projeto

1. Abra um terminal no diretório do projeto (onde está o `package.json`).
2. Instale as dependências do projeto:

```bash
npm install
```

3. Instale o Angular CLI local (devDependency) na versão 16.1.0 (caso ainda não esteja instalado):

```bash
npm install --save-dev @angular/cli@16.1.0
```

4. Verifique as versões instaladas:

```bash
# versão do Node
node -v

# versão do npm
npm -v

# versão do Angular CLI (local) — use npx para executar a versão do projeto
npx ng version
```

## Comandos úteis

- Rodar servidor de desenvolvimento (usa o `ng` local via `npx`):

```bash
npx ng serve --open
```

- Build de produção:

```bash
npx ng build --configuration production
```

- Rodar testes unitários:

```bash
npx ng test
```

## Observações

- Recomendamos usar a versão local do `@angular/cli` (instalada em `node_modules`) para evitar diferenças entre ambientes de desenvolvimento.
- Se você clona este repositório em uma máquina nova, execute `npm install` e verifique se está usando `Node v18.20.8` antes de rodar o projeto.
- Caso prefira instalar o `@angular/cli` globalmente, use `npm install -g @angular/cli@16.1.0`, mas isso não é necessário quando se usa `npx`.

Se precisar, posso adicionar passos para configurar o ambiente com WSL ou ajustar scripts em `package.json` para usar `npx ng` por padrão.
