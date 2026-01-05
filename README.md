# 🧪 Automação de Testes – Login com Cypress

Este repositório contém um projeto de **automação de testes end-to-end (E2E)** utilizando **Cypress**, com foco na validação do fluxo de **login da aplicação Mellro**.

O projeto foi desenvolvido seguindo **boas práticas de QA**, priorizando testes estáveis, legíveis e fáceis de manter.

---

## 🎯 Objetivo do Projeto

Garantir que o fluxo de login funcione corretamente, validando:

- Acesso à página de login
- Preenchimento de credenciais
- Ação de autenticação
- Comportamento esperado após login bem-sucedido

Automatizar esse fluxo ajuda a evitar regressões e falhas em produção.

---

## 🛠 Tecnologias Utilizadas

- **JavaScript**
- **Cypress**
- **Node.js**
- **NPM**

---

## 📂 Estrutura do Projeto

```bash
cypress/
 ├── e2e/
 │   └── login.cy.js        # Teste automatizado de login
 ├── support/
 │   ├── commands.js        # Comandos customizados
 │   └── e2e.js             #
