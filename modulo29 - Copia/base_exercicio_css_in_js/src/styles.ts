import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f9f5f6;
    --cor-texto: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background: #f4f4f4;
    color: var(--cor-texto);
    min-width: 320px;
  }

  button, input {
    font: inherit;
  }

  ul { list-style: none; }
`

export const Container = styled.div`
  width: min(100% - 32px, 1024px);
  margin: 0 auto;
`

export default EstiloGlobal
