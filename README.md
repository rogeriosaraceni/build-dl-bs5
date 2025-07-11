# DL-BS5

Projeto de estruturação inicial para aplicações web em ASP Clássico.

## 📋 O que o projeto faz?

- Cria automaticamente a estrutura de pastas e arquivos base para um projeto web.
- Baixa e organiza dependências modernas (Bootstrap, jQuery, Fancybox) em suas respectivas pastas.
- Gera arquivos iniciais como `index.asp`, componentes, includes e utilitários para facilitar o desenvolvimento.

## ⚙️ Setup e Configuração

1. **Pré-requisitos:**  
   - Node.js instalado.

2. **Instalação e uso:**  
   No terminal, execute:
   ```bash
   node _build/setup.js
   ```
   Isso irá:
   - Criar a estrutura de diretórios e arquivos em seu projeto.
   - Baixar os arquivos para as pastas corretas.
   - Gerar arquivos de configuração como `.editorconfig` e `package.json`.

3. **Estrutura criada:**
   ```
   assets/
     bootstrap/
     css/
     images/
     js/
     libs/
     vendors/core/fancybox/
   components/
   includes/
   dlfelix/
   util/
   pages/home/
   ```

## 🚀 Tecnologias

- [Bootstrap 5.3.7](https://getbootstrap.com/)
- [jQuery 3.7.1](https://jquery.com/)
- [Fancybox 6.0](https://fancyapps.com/fancybox/)

## 📝 Observações

- O projeto é voltado para quem deseja iniciar rapidamente um projeto ASP Clássico com front-end moderno.
- O script pode ser adaptado para incluir outros vendors facilmente.
