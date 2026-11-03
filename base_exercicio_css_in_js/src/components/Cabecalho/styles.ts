import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  background: var(--cor-secundaria);
  color: var(--cor-principal);
  border-bottom: 1px solid #e1d2d5;

  h1 {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
  }
`
