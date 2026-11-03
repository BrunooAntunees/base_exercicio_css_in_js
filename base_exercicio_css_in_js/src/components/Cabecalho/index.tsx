import styled from 'styled-components'

const HeaderStyled = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 24px 0;
  text-align: center;
`

const Cabecalho = () => (
  <HeaderStyled>
    <h1>EBAC Jobs</h1>
  </HeaderStyled>
)

export default Cabecalho
