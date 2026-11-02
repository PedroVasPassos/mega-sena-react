# Gerador da Mega-Sena — React

Atividade de ReactJS sobre **componentes usando classes**.

## Como abrir no VS Code

Abra esta pasta e, no terminal, execute:

```bash
npm install
npm run dev
```

Abra o link indicado pelo Vite (normalmente http://localhost:5173).

## Como funciona

- `src/App.jsx` tem um componente React de classe (`class App extends Component`).
- O estado (`this.state.numeros`) guarda uma lista com os seis números sorteados.
- `gerarJogo` sorteia números de 1 a 60, sem repetição, usando `Set`, e ordena os valores.
- `this.setState` atualiza o estado e a tela automaticamente.
- `src/App.css` faz o visual e a adaptação para celular.
- A interface usa componentes `Button`, `Card` e `Container` do React Bootstrap (desafio do enunciado).

Este projeto usa **Vite** em vez do antigo create-react-app citado no material de 2021.
