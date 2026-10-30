import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
  }

  body {
    background-color: var(--cor-fundo, #f4f4f4);
    color: var(--cor-texto, #333);
    padding-bottom: 120px;
  }

  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f9f5f6;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export default EstiloGlobal
